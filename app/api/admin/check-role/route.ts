// Utility endpoint to check if current user is admin
// Useful for debugging role issues
import { NextResponse } from 'next/server';
import { auth, clerkClient } from '@clerk/nextjs/server';

export async function GET() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({
        isAuthenticated: false,
        isAdmin: false,
        message: 'Not authenticated'
      });
    }

    const client = await clerkClient();
    const user = await client.users.getUser(userId);
    
    const role = user.publicMetadata?.role as string | undefined;
    const isAdmin = role === 'admin';
    
    return NextResponse.json({
      isAuthenticated: true,
      isAdmin,
      userId,
      role: role || 'not set',
      publicMetadata: user.publicMetadata,
      message: isAdmin 
        ? 'User is admin' 
        : `User role is "${role || 'not set'}" - needs to be "admin"`
    });
  } catch (error) {
    console.error('Error checking role:', error);
    return NextResponse.json(
      { 
        error: 'Error checking role',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

