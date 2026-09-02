'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Mic, ChevronDown, Bell } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Aujourd'hui", href: '/' },
    { label: 'Clients', href: '/customers' },
    { label: 'Produits', href: '/products' },
    { label: 'Ventes', href: '/sales' },
    { label: 'Rapports', href: '/reports' },
    { label: 'Stock', href: '/stock' },
    { label: 'Crédits', href: '/credits' },
    { label: 'Caisse', href: '/cash' },
    { label: 'Brouillon', href: '/voice/draft' },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="SOATGA Logo"
              width={140}
              height={38}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold transition-colors flex items-center space-x-1 ${
                    isActive
                      ? 'text-brand-red border-b-2 border-brand-red py-4'
                      : 'text-stone-700 hover:text-brand-red'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          {/* Voice Action Button */}
          <Link
            href="/voice/draft"
            className="bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold px-3.5 py-2 rounded-full flex items-center space-x-1.5 shadow-sm transition-all transform active:scale-95"
          >
            <Mic className="w-4 h-4" />
            <span>Parler à SOATGA</span>
          </Link>

          {/* Notifications */}
          <button className="text-gray-500 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100">
            <Bell className="w-4 h-4" />
          </button>

          {/* User Profile */}
          <div className="w-8 h-8 rounded-full bg-stone-200 text-stone-700 font-bold text-xs flex items-center justify-center border border-stone-300">
            MK
          </div>
        </div>
      </div>
    </header>
  );
}
