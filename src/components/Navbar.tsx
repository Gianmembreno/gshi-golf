"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-green-900 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            GSHI
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-green-300 transition-colors">
              Home
            </Link>
            <Link href="/results" className="hover:text-green-300 transition-colors">
              Results
            </Link>
            <Link href="/players" className="hover:text-green-300 transition-colors">
              Players
            </Link>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                href="/" 
                className="block px-3 py-2 text-base font-medium text-white hover:text-green-300 hover:bg-green-800 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/results" 
                className="block px-3 py-2 text-base font-medium text-white hover:text-green-300 hover:bg-green-800 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Results
              </Link>
              <Link 
                href="/players" 
                className="block px-3 py-2 text-base font-medium text-white hover:text-green-300 hover:bg-green-800 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Players
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}