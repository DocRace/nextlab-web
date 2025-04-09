'use client';

import { useEffect, useState } from 'react';

interface ColorExtractorProps {
  imageSrc: string;
  children: React.ReactNode;
}

// Predefined colors for different image types
const getColorForImage = (imageSrc: string): string => {
  // Extract a simple hash from the image path
  const hash = imageSrc.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  
  // Use the hash to select from a predefined set of colors
  const colors = [
    'rgba(41, 128, 185, 0.4)',  // Blue
    'rgba(39, 174, 96, 0.4)',   // Green
    'rgba(142, 68, 173, 0.4)',  // Purple
    'rgba(230, 126, 34, 0.4)',  // Orange
    'rgba(231, 76, 60, 0.4)',   // Red
    'rgba(52, 152, 219, 0.4)',  // Light Blue
    'rgba(46, 204, 113, 0.4)',  // Light Green
    'rgba(155, 89, 182, 0.4)',  // Light Purple
  ];
  
  return colors[Math.abs(hash) % colors.length];
};

export default function ColorExtractor({ imageSrc, children }: ColorExtractorProps) {
  const [dominantColor, setDominantColor] = useState<string>('rgba(0, 0, 0, 0.4)');

  useEffect(() => {
    // Set a color based on the image path
    setDominantColor(getColorForImage(imageSrc));
  }, [imageSrc]);

  return (
    <div className="relative w-full h-full">
      {children}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: `linear-gradient(to bottom, transparent 0%, ${dominantColor} 100%)`,
          backdropFilter: 'blur(0px)',
          WebkitBackdropFilter: 'blur(0px)',
        }}
      />
    </div>
  );
} 