'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ShoppingBag, Mic, CreditCard, MoreHorizontal } from 'lucide-react';

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { label: "Aujourd'hui", href: '/', icon: Home },
    { label: 'Ventes', href: '/sales', icon: ShoppingBag },
    { label: 'Crédits', href: '/credits', icon: CreditCard },
    { label: 'Plus', href: '/reports', icon: MoreHorizontal },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-stone-200 px-4 py-2 flex items-center justify-around shadow-lg pb-safe">
      {/* First 2 Items */}
      {navItems.slice(0, 2).map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center space-y-1 text-[10px] font-bold transition-all ${
              isActive ? 'text-brand-red' : 'text-stone-400 hover:text-stone-700'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        );
      })}

      {/* Center Floating Mic Button */}
      <Link
        href="/voice/draft"
        className="relative -top-5 bg-brand-red hover:bg-brand-red-hover text-white w-14 h-14 rounded-full flex flex-col items-center justify-center shadow-lg shadow-brand-red/40 border-4 border-white transition-all transform active:scale-95"
      >
        <Mic className="w-6 h-6 animate-pulse" />
      </Link>

      {/* Last 2 Items */}
      {navItems.slice(2, 4).map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center space-y-1 text-[10px] font-bold transition-all ${
              isActive ? 'text-brand-red' : 'text-stone-400 hover:text-stone-700'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
