import "./globals.css";
import { Syne, Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne", // Buat jembatan ke CSS
});

const spaceg = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spaceg", // Buat jembatan ke CSS
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta", // Buat jembatan ke CSS
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${syne.variable} scroll-smooth ${spaceg.variable} ${jakarta.variable}`}
    >
      <body className="min-h-screen bg-[#f5f3f0] overflow-x-hidden text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
