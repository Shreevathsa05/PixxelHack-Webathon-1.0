"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { GamingCrosshair } from "../components/crosshair";
export default function RootLayout({ children }) {
  return (
   <html lang="en" className="cursor-none select-none">
 
      <body className="bg-black ">
        < Navbar/> 
        <GamingCrosshair/>
        {children}
      </body>
    </html>

  );
}
