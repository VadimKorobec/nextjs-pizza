import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
