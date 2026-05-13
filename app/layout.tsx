import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prince Shivhare | App Developer Portfolio",
  description:
    "Prince Shivhare — App Developer & Full Stack Developer. Building modern mobile-first apps, SaaS platforms, dashboards, and scalable web applications.",
  keywords: [
    "App Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Mobile App",
    "SaaS",
    "Prince Shivhare",
  ],
  authors: [{ name: "Prince Shivhare" }],
  openGraph: {
    title: "Prince Shivhare | App Developer Portfolio",
    description:
      "App Developer & Full Stack Developer — modern apps, SaaS platforms, dashboards.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise">{children}</body>
    </html>
  );
}
