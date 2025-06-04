import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BudgetBox",
  description: "BudgetBox: Fullstack Bütçe Yönetim Uygulaması - NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${robotoMono.className} m-2 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
