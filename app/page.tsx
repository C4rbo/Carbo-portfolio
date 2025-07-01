"use client";

import { useState, useRef, useEffect } from 'react';
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Image from 'next/image';

export default function Home() {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const imageElement = imageRef.current;
    if (!imageElement) return;

    const { left, top, width, height } = imageElement.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (mousePosition.x - centerX) / (window.innerWidth / 2);
    const deltaY = (mousePosition.y - centerY) / (window.innerHeight / 2);

    const tiltX = deltaY * 8;
    const tiltY = deltaX * 8;

    imageElement.style.transform = `
      perspective(1000px)
      rotateX(${-tiltX}deg)
      rotateY(${tiltY}deg)
      scale3d(1.02, 1.02, 1.02)
    `;
  }, [mousePosition]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar/>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div 
          ref={imageRef}
          className="relative rounded-xl border-4 border-[#2a2a2a] overflow-hidden transition-all duration-300 ease-out transform-gpu hover:shadow-lg"
          style={{
            transformStyle: 'preserve-3d',
            willChange: 'transform',
            maxWidth: '900px', 
            width: '100%'
          }}
        >
          <Image 
            src="/bg.jpg" 
            alt=""
            width={900} 
            height={250} 
            className="w-full h-auto object-cover transform-gpu transition-transform duration-300 ease-out"
            priority
          />
        </div>

        {/* qui ci andranno le card */}

      </main>
      <Footer/>
    </div>
  );
}