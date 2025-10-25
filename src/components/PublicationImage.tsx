'use client';

import Image from "next/image";
import { useState } from "react";

interface PublicationImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function PublicationImage({ src, alt, className }: PublicationImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc('/images/next-lab-logo.png');
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={1200}
      height={800}
      className={className}
      style={{ maxWidth: '100%', height: 'auto' }}
      onError={handleError}
    />
  );
}
