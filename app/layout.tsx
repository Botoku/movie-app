import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TMDB Clone",
  description: "A clone of the TMDB website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={`${inter.className} h-[100vh] w-[100vw]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
