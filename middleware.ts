import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { clerkClient } from '@clerk/nextjs/server';

// Define protected routes
const isProtectedRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware(async (auth, req) => {
  // Protect admin routes - server-side auth check (faster than client-side)
  if (isProtectedRoute(req)) {
    const { userId } = await auth();
    
    if (!userId) {
      // Not authenticated - redirect to sign-in
      const signInUrl = new URL('/sign-in', req.url);
      signInUrl.searchParams.set('redirect_url', req.url);
      return NextResponse.redirect(signInUrl);
    }
    
    try {
      // Fetch user from Clerk API to get publicMetadata (role)
      // Session claims might not include publicMetadata by default
      const client = await clerkClient();
      const user = await client.users.getUser(userId);
      
      // Check if user has admin role from publicMetadata
      const role = user.publicMetadata?.role as string | undefined;
      
      if (role !== 'admin') {
        // Not authorized - redirect to not-authorized
        return NextResponse.redirect(new URL('/not-authorized', req.url));
      }
    } catch (error) {
      // If there's an error fetching user, deny access for security
      console.error('Error fetching user in middleware:', error);
      return NextResponse.redirect(new URL('/not-authorized', req.url));
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};