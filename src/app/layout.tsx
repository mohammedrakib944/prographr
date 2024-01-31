import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

// const gellix = localFont({
//   src: "../../public/fonts/Gellix/Gellix-Medium.ttf",
// });

export const metadata: Metadata = {
  title: "Prographr",
  description: "Prographr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
