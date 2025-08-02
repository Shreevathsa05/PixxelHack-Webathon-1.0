import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { GamingCrosshair } from "../components/crosshair";
import BackgroundAudio from "../components/BackgroundAudio";
import Footer from "../components/Footer";
import Marquee from "../components/marquee";
export default function RootLayout({ children }) {
  return (
   <html lang="en" className="cursor-none select-none">
 
      <body className="bg-black ">
        < Navbar/> 
        <BackgroundAudio/>
        <GamingCrosshair/>
        {children}
      
        <Footer/>
      </body>
    </html>

  );
}
