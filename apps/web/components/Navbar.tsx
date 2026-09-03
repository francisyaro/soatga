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
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo with Official Icon */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <Image
                src="/icon.png"
                alt="SOATGA Official Icon"
                width={36}
                height={36}
                className="object-contain w-full h-full transform group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <span className="text-xl font-black tracking-tight text-stone-900">
              SOATGA
            </span>
          </Link>

          {/* Desktop Navigation Links (Hidden on Mobile) */}
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
        <div className="flex items-center space-x-2.5 sm:space-x-3">
          {/* Voice Action Button (Hidden on smallest screens, visible on sm+) */}
          <Link
            href="/voice/draft"
            className="hidden sm:flex bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold px-3.5 py-2 rounded-full items-center space-x-1.5 shadow-sm transition-all transform active:scale-95"
          >
            <Mic className="w-4 h-4" />
            <span>Parler à SOATGA</span>
          </Link>

          {/* Notifications */}
          <button className="text-gray-500 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100">
            <Bell className="w-4 h-4" />
          </button>

          {/* Boutique Selector */}
          <div className="flex items-center space-x-1 text-xs bg-stone-50 hover:bg-stone-100 px-2.5 py-1.5 rounded-lg border border-stone-200 cursor-pointer">
            <span className="font-semibold text-stone-800 text-[11px] sm:text-xs">
              Gounghin
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
          </div>

          {/* User Profile */}
          <div className="w-8 h-8 rounded-full bg-stone-200 text-stone-700 font-bold text-xs flex items-center justify-center border border-stone-300">
            MK
          </div>
        </div>
      </div>
    </header>
  );
}
