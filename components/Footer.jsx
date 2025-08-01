'use client'
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="w-[90%] md:w-[80%] min-h-[10vh] bg-black bg-opacity-90 shadow-[0_0_20px_rgba(6,182,212,0.8)] text-gray-400 px-4 py-4 rounded-3xl mx-4 mt-8 text-sm flex flex-col sm:flex-row sm:items-center gap-4">
        
        {/* Logo */}
        <div className="relative w-10 h-10">
          <img src="favicon.ico" alt="Logo" className="object-contain" />
        </div>

        {/* Text */}
        <div className="flex-1">
          © {new Date().getFullYear()} ArthaShastra Corporation. All rights reserved.  
          All trademarks are property of their respective owners in India and other regions.
        </div>
        
      </div>
    </div>
  )
}

export default Footer
