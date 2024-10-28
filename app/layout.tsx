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
      <body className="bg-black text-white">

        {/* Page Content */}
        <main className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
          {children}
        </main>


        {/* Menu Bar */}
        <nav className="fixed top-0 left-0 w-full bg-gray-800/40 text-white py-2">
          <div className=" text-2xl font-bold mx-4 hover:underline">
            <Link href="/">&nbsp;Jules Wellner</Link>
          </div>
          <ul className="flex space-x-6 pt-3 justify-end">
            <li>
              <Link href="/sculpture" className="hover:underline">
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

        {/* Overlay Content
        <div className="absolute inset-0 flex flex-col items-center justify-center ">
          <h1 className="text-5xl font-bold">Welcome to My Website</h1>
          <p className="text-lg mt-4">This is the home page with a full-size image.</p>
        </div>
      }
*/}



      </body>
    </html >
  );
}


