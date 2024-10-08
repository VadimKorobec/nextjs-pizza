import Header from "@/shared/components/shared/header";
import type { Metadata } from "next";

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
      <Header hasSearch={true} />
      {children}
      {modal}
    </main>
  );
}
