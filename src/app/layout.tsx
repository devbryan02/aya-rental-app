
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../styles/globals.css";


import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Aya Rental - Inicio",
  description: "Alquiler de vehiculos",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={cn(
          " min-h-screen bg-background font-sans antialiased bg-gray-100 ",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
