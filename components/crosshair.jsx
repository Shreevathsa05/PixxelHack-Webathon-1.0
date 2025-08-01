"use client";
import { useState, useEffect } from 'react';

export const GamingCrosshair = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75"
      style={{
        left: mousePos.x,
        top: mousePos.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Main crosshair */}
      <div 
        className={`relative transition-all duration-100 ${
          isClicking ? 'scale-125' : 'scale-100'
        }`}
      >
        {/* Center dot */}
        <div 
          className={`absolute w-1 h-1 bg-cyan-400 rounded-full transition-all duration-100 ${
            isClicking ? 'scale-150 shadow-[0_0_10px_#00FFFF]' : ''
          }`}
          style={{ left: '-2px', top: '-2px' }}
        />
        
        {/* Top line */}
        <div 
          className={`absolute w-0.5 h-4 bg-cyan-400 transition-all duration-100 ${
            isClicking ? 'shadow-[0_0_8px_#00FFFF] bg-cyan-400' : ''
          }`}
          style={{ left: '-1px', top: '-20px' }}
        />
        
        {/* Bottom line */}
        <div 
          className={`absolute w-0.5 h-4 bg-cyan-400 transition-all duration-100 ${
            isClicking ? 'shadow-[0_0_8px_#00FFFF] bg-cyan-400' : ''
          }`}
          style={{ left: '-1px', top: '4px' }}
        />
        
        {/* Left line */}
        <div 
          className={`absolute w-4 h-0.5 bg-cyan-400 transition-all duration-100 ${
            isClicking ? 'shadow-[0_0_8px_#00FFFF] bg-cyan-400' : ''
          }`}
          style={{ left: '-20px', top: '-1px' }}
        />
        
        {/* Right line */}
        <div 
          className={`absolute w-4 h-0.5 bg-cyan-400 transition-all duration-100 ${
            isClicking ? 'shadow-[0_0_8px_#00FFFF] bg-cyan-400' : ''
          }`}
          style={{ left: '4px', top: '-1px' }}
        />

        {/* Click effect ring */}
        {isClicking && (
          <div 
            className="absolute w-8 h-8 border border-cyan-400 rounded-full animate-pulse"
            style={{ left: '-16px', top: '-16px' }}
          />
        )}
      </div>
    </div>
  );
};