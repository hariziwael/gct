
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Inter } from 'next/font/google'


import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] })
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



// app/layout.tsx

export const metadata = {
  metadataBase: new URL('https://gct-tn.vercel.app'),
  title: {
    default: 'GCT – Groupe Chimique Tunisien',
    template: '%s | GCT',
  },
  description: 'Site officiel du Groupe Chimique Tunisien.',
  keywords: ['GCT', 'Tunisie', 'Phosphate', 'Chimie', 'Industrie'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Groupe Chimique Tunisien',
    description: 'Découvrez les produits et l’impact du GCT.',
    url: 'https://gct-tn.vercel.app',
    siteName: 'GCT',
    locale: ['fr_FR', 'ar_AR', 'tn_TN'],
    type: 'website',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.className}`}
      >
        <Navbar />
        
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
