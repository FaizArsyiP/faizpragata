import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://faizpragata.vercel.app"),
  title: "Faiz Arsyi Pragata",
  description: "Portfolio website created using Next.js and TailwindCSS",
  openGraph: {
    title: "Faiz Arsyi Pragata",
    description: "Portfolio website created using Next.js and TailwindCSS",
    images: ["/assets/icon/me1.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="sm:scroll-smooth">
      <body className={`${inter.className} bg-gray-950`}>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
