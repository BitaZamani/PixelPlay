import type { Metadata } from "next";
import "@fontsource/bitcount-grid-double/400.css";
import "./globals.css";
export const metadata: Metadata = {
  title: "PixelPlay",
  description: "Your Portal to Every Pixel",
};
import { Audiowide } from "next/font/google";
import StoreProvider from "./StoreProvider";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${audiowide.className}`}>
      <StoreProvider>
        <body className={`antialiased min-h-screen`}>{children}</body>
      </StoreProvider>
    </html>
  );
}
