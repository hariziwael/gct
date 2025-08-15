// app/admin/page.tsx
'use client'

import { useUser } from '@clerk/nextjs';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded) {
      const role = user?.publicMetadata?.role;

      if (role !== 'admin') {
        router.push('/not-authorized'); // أو أي صفحة منع
      }
    }
  }, [isLoaded, user, router]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="p-6 min-h-screen   bg-emerald-50 pt-32">
      <h1 className="text-3xl text-center font-bold">
        <span className="text-emerald-900">Welcome, </span>
        <span className="bg-gradient-to-r from-emerald-900 to-emerald-400 bg-clip-text text-transparent">
          Admin
        </span>
      </h1>
      <p className="text-xl text-emerald-800 text-center mt-2">
        You have access to this admin dashboard
      </p>

      
    </div>
  );
}
