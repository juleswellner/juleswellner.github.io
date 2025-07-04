import type { Metadata } from "next";
import Link from 'next/link';
import localFont from "next/font/local";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jules Wellner",
  description: "Sculpture, Ceramics, Tile installation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* Page Content */}
        <main className={`flex-grow ${geistSans.variable} ${geistMono.variable} antialiased`} >
          {children}
        </main>

        <footer className="gap-6 text-center text-gray-500">
          &copy; Jules Wellner 2024, 2025
        </footer>

        {/* Menu Bar */}
        <nav className="fixed top-0 left-0 w-full bg-gray-800/50 text-white py-2">
          <div className=" text-2xl font-bold mx-4">
            <Link href="/">&nbsp; Jules Wellner </Link>
          </div>
          <ul className="flex space-x-6 pt-3 justify-end">
            <li>
              <Link href="/" className="hover:underline">
                Sculpture
              </Link>
            </li>
            <li>
              <Link href="/pottery" className="hover:underline">
                Pottery
              </Link>
            </li>
            <li>
              <Link href="/tile" className="hover:underline">
                Tile
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <span></span>
          </ul>
        </nav>

      </body>
      <GoogleAnalytics gaId="G-7VWZR5Z902" />
    </html >
  );
}


