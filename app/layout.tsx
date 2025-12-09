import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ViaVia - Book your entire multi-city trip in one checkout",
  description: "Book your entire multi-city trip in one checkout - flights, hotels, transport, and activities. Starting with Europe, expanding globally. For people taking the long way on purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}

