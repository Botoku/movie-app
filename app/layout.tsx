import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

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
      <body className={`${inter.className} h-[100vh] w-[100vw]`} >
        <Header />
        {children}
      </body>
    </html>
  );
}
