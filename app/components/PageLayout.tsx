"use client";

import { useState, useEffect, ReactNode } from 'react';
import { Loader } from './Loader';

interface PageLayoutProps {
  children: ReactNode;
}

let isFirstLoad = true;

export function PageLayout({ children }: PageLayoutProps) {
  const [loading, setLoading] = useState(isFirstLoad);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setLoading(false);
          isFirstLoad = false;
        }, 400); 
      }, 200); 

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="relative">
      {loading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 50,
            transition: 'opacity 400ms ease-in-out',
            opacity: isExiting ? 0 : 1,
          }}
        >
          <Loader />
        </div>
      )}

      <div 
        style={{
          transition: 'opacity 400ms ease-in-out, transform 400ms ease-in-out',
          opacity: loading ? 0 : 1,
          transform: loading ? 'translateY(20px)' : 'translateY(0)',
        }}
      >
        {children}
      </div>
    </div>
  );
}