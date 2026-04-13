import { Metadata } from "next";
import "./globals.css";
import GlobalBackground from "@/components/Background/GlobalBackground";
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
      <body className="relative bg-transparent">
        <GlobalBackground />
        <div className="relative z-10">
          <ResponsiveNav />
          {children}
          <Footer />
          <ScrolltoTop />
        </div>
      </body>
    </html>
  );
}
