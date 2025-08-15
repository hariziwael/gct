import { SignIn } from "@clerk/nextjs";

// app/not-authorized/page.tsx
export default function NotAuthorizedPage() {
    return (
      <div className="h-screen text-center pt-4 text-red-600 text-xl bg-emerald-50">
        <div className="z-40 flex justify-center items-center "><SignIn /></div>
        ❌ Access Denied: You are not authorized to view this page.
        
      </div>
    );
  }
  