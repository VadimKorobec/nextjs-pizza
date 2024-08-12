import type { Metadata } from "next";

import Header from "@/components/shared/header";

export const metadata: Metadata = {
  title: "NextJS Pizza | Main page",
  description: "Generated by create next app",
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
      {modal}
    </main>
  );
}
