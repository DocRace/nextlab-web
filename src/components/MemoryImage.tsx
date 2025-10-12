'use client';

import Image from "next/image";
import { useState } from "react";

interface MemoryImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function MemoryImage({ src, alt, className }: MemoryImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc('/images/next-lab-logo.png');
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className={className}
      onError={handleError}
    />
  );
}
