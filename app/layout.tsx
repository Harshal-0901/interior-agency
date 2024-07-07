import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import localFont from "next/font/local";
import { Metadata } from "next/types";
import "./globals.css";
const myFont = localFont({
  src: "../public/HousttelySignature-GOonZ.ttf",
  variable: "--font-house",
});

export const metadata: Metadata = {
  title: "New Haven",
  description: "A interior agency website, which helps book ur best interior design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body data-barba="wrapper" className="flex flex-col min-h-screen">
        <HeaderComponent />
        <main className="flex-grow">{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
