import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rescue Rider",
  description: "Your Vehicle Breakdown Assistance Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className}`}
        >
          <Header/>
          <main className="min-h-screen">
            {children}
          </main>

          <footer className=" py-4 bg-gray-100/60">
            <div className="font-semibold text-md text-center">
              Made with love💙
            </div>
          </footer>
          
        </body>
      </html>
    </ClerkProvider>
  );
}
