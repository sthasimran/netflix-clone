import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./(root)/Layout/Navbar/Navbar";
import Footer from "./(root)/Layout/Footer/Footer";

export const metadata: Metadata = {
  title: {
    default: "Netflix - Home",
    template: "%s | Netflix",
  },
  description: "Where you can watch your favorite Movies, Series and TV Shows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
         
        
          {children}
      
          <Footer />
      </body>
    </html>
  );
}
