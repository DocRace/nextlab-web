'use client';

import Image from 'next/image';
import { useState } from 'react';

interface TeamAvatarProps {
  src: string;
  alt: string;
  size?: number;
  priority?: boolean;
}

export default function TeamAvatar({ src, alt, size = 100, priority = false }: TeamAvatarProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div className="relative flex-shrink-0" style={{ width: `${size}px`, height: `${size}px`, minWidth: `${size}px` }}>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className="rounded-full object-cover bg-gray-100"
        sizes={`${size}px`}
        priority={priority}
        onError={() => {
          setImgSrc('/avatars/avatar-placeholder.png');
        }}
      />
    </div>
  );
}

