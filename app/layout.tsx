import { Metadata } from "next";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrolltoTop from "@/components/Helper/ScrolltoTop";

export const metadata: Metadata = {
  title: "Synaptra",
  description: "Synaptra landing page using next js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrolltoTop />
      </body>
    </html>
  );
}
