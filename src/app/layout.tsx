import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: "MLP",
  description: "Ministério Luz da Palavra",
};

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['200' ,'300', '400', '500', '600'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} bg-zinc-900 text-slate-50 flex flex-col w-screen h-screen overflow-x-hidden`}>
        <Navbar/>
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
