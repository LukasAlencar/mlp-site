import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MLP",
  description: "Ministério Luz da Palavra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-slate-50 flex flex-col w-screen h-screen`}>
        <Navbar/>
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
