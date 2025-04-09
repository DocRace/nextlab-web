'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Publications', path: '/publications' },
  { name: 'Research', path: '/research' },
  { name: 'Course', path: '/course' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div 
        className="absolute inset-0" 
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          transform: 'translateZ(0)',
          WebkitTransform: 'translateZ(0)'
        }}
      />
      <div className="relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8">
        <div className="flex h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/next-lab-logo.png"
                alt="Next Lab Logo"
                width={120}
                height={0}
                style={{ height: 'auto' }}
                priority
              />
            </Link>
          </div>
          <nav className="hidden md:flex" style={{ marginLeft: '60px' }}>
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.path}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ease-in-out ${
                  pathname === item.path
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                style={{
                  backgroundColor: pathname === item.path ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
                  borderRadius: '9999px',
                  marginRight: index < navItems.length - 1 ? '16px' : '0'
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu - you can use an SVG here */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                pathname === item.path
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
} 