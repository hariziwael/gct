// API endpoint to update user role
// Only accessible by admins
import { NextRequest, NextResponse } from 'next/server';
import { auth, clerkClient } from '@clerk/nextjs/server';

export async function POST(request: NextRequest) {
  try {
    const { userId: currentUserId } = await auth();
    
    if (!currentUserId) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    // Check if current user is admin
    const client = await clerkClient();
    const currentUser = await client.users.getUser(currentUserId);
    const currentUserRole = currentUser.publicMetadata?.role as string | undefined;
    
    if (currentUserRole !== 'admin') {
      return NextResponse.json(
        { error: 'Only admins can update roles' },
        { status: 403 }
      );
    }

    const { userId, role } = await request.json();
    
    if (!userId || !role) {
      return NextResponse.json(
        { error: 'userId and role are required' },
        { status: 400 }
      );
    }

    if (role !== 'admin' && role !== 'user') {
      return NextResponse.json(
        { error: 'Role must be "admin" or "user"' },
        { status: 400 }
      );
    }

    // Get the user to update
    const userToUpdate = await client.users.getUser(userId);
    
    // Update user role (preserve existing metadata)
    const updatedUser = await client.users.updateUser(userId, {
      publicMetadata: {
        ...(userToUpdate.publicMetadata || {}), // Keep existing metadata
        role: role, // Update role
      },
    });

    return NextResponse.json({
      success: true,
      message: `User role updated to ${role}`,
      user: {
        id: updatedUser.id,
        role: updatedUser.publicMetadata?.role,
      },
    });
  } catch (error) {
    console.error('Error updating role:', error);
    return NextResponse.json(
      { 
        error: 'Error updating role',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

