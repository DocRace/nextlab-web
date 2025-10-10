'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Publications', path: '/publications' },
  { name: 'Researches', path: '/researches' },
  { name: 'Courses', path: '/courses' },
  { name: 'People', path: '/team' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div 
        className="absolute inset-0 px-4 sm:px-6 lg:px-8 xl:px-8" 
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
            <Link href="/" className="flex items-center m-0 p-0">
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
          <div className="flex items-center justify-end flex-1 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden absolute top-full left-0 right-0 z-50`}>
        <div 
          className="py-2 space-y-1 shadow-lg"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderTop: '1px solid rgba(0, 0, 0, 0.1)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
          }}
        >
          <Link
            href="/"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/publications"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Publications
          </Link>
          <Link
            href="/researches"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Researches
          </Link>
          <Link
            href="/courses"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Courses
          </Link>
          <Link
            href="/team"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            People
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}