import type { Metadata } from "next";
import Link from 'next/link';
import localFont from "next/font/local";
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
  description: "Sculpture, Ceramics, Home Restoration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        {/* Menu Bar */}
        <nav className="bg-gray-700 p-4 flex justify-between items-center overflow-x-hidden">
          <div className="text-white text-lg font-bold">
            <Link href="/">Jules Wellner</Link>
          </div>

          {/* Links on the right */}
          <ul className="flex space-x-8">
            <li>
              <Link href="/sculpture" className="text-white hover:text-gray-300">
                Sculpture
              </Link>
            </li>
            <li>
              <Link href="/pottery" className="text-white hover:text-gray-300">
                Pottery
              </Link>
            </li>            <li>
              <Link href="/home-restoration" className="text-white hover:text-gray-300">
                Home restoration
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
          </ul>

        </nav>

        {/* Page Content */}
        <main className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
          {children}
        </main>
      </body>

    </html>
  );
}


