import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "MechaFusion",
  description: "Website oficial al clubului de robotica UPT MechaFusion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
