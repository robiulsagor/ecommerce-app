import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Furniro - E-commerce",
  description: "Furniro is a modern e-commerce platform offering a wide range of furniture and home decor products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased w-[100vw]`}
      >
        {children}
      </body>
    </html>
  );
}
