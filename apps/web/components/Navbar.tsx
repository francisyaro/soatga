'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Mic, ChevronDown, Menu, Store } from 'lucide-react';
import { MobileDrawer } from './MobileDrawer';
import { VoiceModal } from './VoiceModal';
import { NotificationCenter } from './NotificationCenter';
import { useAuth } from '@/context/AuthContext';

export function Navbar() {
  const pathname = usePathname();
  const { user, initials, activeShop, setActiveShop } = useAuth();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);

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

  const shopsList = ['Boutique Gounghin', 'Boutique 1200 Logements', 'Dépôt Central Tanghin'];

  return (
    <>
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-xs">
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
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Mobile Menu Icon Toggle (< 1024px) */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="lg:hidden text-stone-700 hover:text-stone-900 p-1.5 rounded-xl hover:bg-stone-100 border border-stone-200"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Voice Action Button */}
            <button
              onClick={() => setIsVoiceModalOpen(true)}
              className="hidden sm:flex bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold px-3.5 py-2 rounded-full items-center space-x-1.5 shadow-sm transition-all transform active:scale-95"
            >
              <Mic className="w-4 h-4" />
              <span>Parler à SOATGA</span>
            </button>

            {/* Real-time Notification Center */}
            <NotificationCenter />

            {/* Boutique Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsShopMenuOpen(!isShopMenuOpen)}
                className="flex items-center space-x-1 text-xs bg-stone-50 hover:bg-stone-100 px-2.5 py-1.5 rounded-lg border border-stone-200 transition-colors"
              >
                <Store className="w-3.5 h-3.5 text-stone-500" />
                <span className="font-semibold text-stone-800 text-[11px] sm:text-xs max-w-28 truncate">
                  {activeShop}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
              </button>

              {isShopMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsShopMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-stone-200 z-50 p-2 space-y-1">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block px-2.5 py-1">
                      Changer de point de vente
                    </span>
                    {shopsList.map((shop) => (
                      <button
                        key={shop}
                        onClick={() => {
                          setActiveShop(shop);
                          setIsShopMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                          activeShop === shop
                            ? 'bg-red-50 text-brand-red font-bold'
                            : 'text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        <span>{shop}</span>
                        {activeShop === shop && (
                          <span className="w-2 h-2 rounded-full bg-brand-red" />
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* User Profile Avatar with Dynamic Initials */}
            <Link
              href="/profile"
              title={`Connecté en tant que ${user.fullName}`}
              className="w-9 h-9 rounded-full bg-stone-900 text-white font-black text-xs flex items-center justify-center shadow-sm border border-stone-700 hover:bg-brand-red transition-all transform active:scale-95"
            >
              {initials}
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* Real-time Microphone Speech Recognition Modal */}
      <VoiceModal isOpen={isVoiceModalOpen} onClose={() => setIsVoiceModalOpen(false)} />
    </>
  );
}
