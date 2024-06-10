import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "BRAVE ANIME",
  description: "ANIME LIST FILM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.className} bg-me-dark`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
