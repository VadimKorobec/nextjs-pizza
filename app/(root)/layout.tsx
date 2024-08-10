import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import Header from "@/components/shared/header";

export const metadata: Metadata = {
  title: "NextJS Pizza | Main page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <main className="min-h-screen">
        <Header />
        {children}
      </main>
    </html>
  );
}
