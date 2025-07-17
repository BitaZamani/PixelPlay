import type { Metadata } from "next";
import "@fontsource/bitcount-grid-double/400.css";
import "./globals.css";
import LayoutWrapper from "./layoutWrapper";
export const metadata: Metadata = {
  title: "PixelPlay",
  description: "Your Portal to Every Pixel",
};
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${audiowide.className}`}>
      <LayoutWrapper>{children}</LayoutWrapper>
     
    </html>
  );
}
