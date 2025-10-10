'use client';

import { useState } from 'react';

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export default function CopyButton({ text, label = 'Copy', className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // ignore
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-slate-700 hover:bg-slate-800 text-white transition-colors ${className}`}
    >
      {copied ? 'Copied!' : label}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-2">
        <path d="M16 1H4a2 2 0 00-2 2v12h2V3h12V1zm3 4H8a2 2 0 00-2 2v12a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2zm0 14H8V7h11v12z" />
      </svg>
    </button>
  );
}


