import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tools Own | Financial Calculators",
  description: "Professional suite of financial calculators for investment analysis, loan calculations, retirement planning, and more. Make informed financial decisions with Tools Own.",
  keywords: "financial calculator, investment tools, loan calculator, retirement planning, finance tools",
  authors: [{ name: "Tools Own" }],
  creator: "Tools Own",
  robots: "index, follow",
  applicationName: "Tools Own"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="p-10 flex flex-col w-full min-h-screen">
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
