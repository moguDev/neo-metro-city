import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import BackgroundShowcase from "@/components/BackgroundShowcase";
import SideDrawer from "@/components/SideDrawer";
import { AlertProvider } from "@/components/AlertProvider";

export const metadata: Metadata = {
  title:
    "Neo Metro City: The most cyber-geek UI library for Tailwind CSS — open-source, ever-evolving, and built by the geeks of Neo Metro City.",
  description:
    "The most cyber-geek UI library for Tailwind CSS — open-source, ever-evolving, and built by the geeks of Neo Metro City.This is more than just a library — it's a place where geeks connect, create, and sync with the city.",
  openGraph: {
    title:
      "Neo Metro City: The most cyber-geek UI library for Tailwind CSS — open-source, ever-evolving, and built by the geeks of Neo Metro City.",
    description:
      "The most cyber-geek UI library for Tailwind CSS — open-source, ever-evolving, and built by the geeks of Neo Metro City.This is more than just a library — it's a place where geeks connect, create, and sync with the city.",
    url: "https://neo-metro.dev",
    siteName: "Neo Metro City",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Neo Metro City",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Neo Metro City: The most cyber-geek UI library for Tailwind CSS — open-source, ever-evolving, and built by the geeks of Neo Metro City.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Neo Metro City",
      },
    ],
    creator: "@mogu_57B",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Kosugi+Maru&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Quicksand:wght@300..700&family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-quicksand w-full min-h-screen overflow-x-hidden">
        <BackgroundShowcase />
        <Header />
        <AlertProvider>
          <div className="relative">{children}</div>
        </AlertProvider>
        <SideDrawer />
      </body>
    </html>
  );
}
