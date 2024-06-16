import type { Metadata } from "next";
import "./globals.css";


import { Courier_Prime } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const courier = Courier_Prime({ 
  subsets:['latin'],
  weight: ['400','700'],
  style: ['normal', 'italic'], 
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Dadidouda Card",
  description: "Crée ta carte Dadidouda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={courier.className}>{children}</body>
    </html>
  );
}
