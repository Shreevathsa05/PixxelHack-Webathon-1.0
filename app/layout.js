import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { GamingCrosshair } from "../components/crosshair";
import BackgroundAudio from "../components/BackgroundAudio";
import Footer from "../components/Footer";
export default function RootLayout({ children }) {
  return (
   <html lang="en" className="cursor-none select-none">
 
      <body className="bg-black ">
        < Navbar/> 
        <BackgroundAudio/>
        <div className="md:cursor-pointer md:block">
          <GamingCrosshair/>
        </div>
        {children}
        <Footer/>
      </body>
    </html>

  );
}
