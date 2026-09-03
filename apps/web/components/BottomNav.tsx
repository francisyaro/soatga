'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ShoppingBag, Mic, CreditCard, Menu } from 'lucide-react';
import { MobileDrawer } from './MobileDrawer';
import { VoiceModal } from './VoiceModal';

export function BottomNav() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-4 py-2 flex items-center justify-around shadow-lg pb-safe">
        {/* Aujourd'hui */}
        <Link
          href="/"
          className={`flex flex-col items-center space-y-1 text-[10px] font-bold transition-all ${
            pathname === '/' ? 'text-brand-red' : 'text-stone-400 hover:text-stone-700'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Aujourd&apos;hui</span>
        </Link>

        {/* Ventes */}
        <Link
          href="/sales"
          className={`flex flex-col items-center space-y-1 text-[10px] font-bold transition-all ${
            pathname === '/sales' ? 'text-brand-red' : 'text-stone-400 hover:text-stone-700'
          }`}
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Ventes</span>
        </Link>

        {/* Center Floating Mic Button -> Opens Speech Recognition Modal */}
        <button
          onClick={() => setIsVoiceModalOpen(true)}
          className="relative -top-5 bg-brand-red hover:bg-brand-red-hover text-white w-14 h-14 rounded-full flex flex-col items-center justify-center shadow-lg shadow-brand-red/40 border-4 border-white transition-all transform active:scale-95"
        >
          <Mic className="w-6 h-6 animate-pulse" />
        </button>

        {/* Crédits */}
        <Link
          href="/credits"
          className={`flex flex-col items-center space-y-1 text-[10px] font-bold transition-all ${
            pathname === '/credits' ? 'text-brand-red' : 'text-stone-400 hover:text-stone-700'
          }`}
        >
          <CreditCard className="w-5 h-5" />
          <span>Crédits</span>
        </Link>

        {/* Plus / Menu Drawer Toggle */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="flex flex-col items-center space-y-1 text-[10px] font-bold text-stone-400 hover:text-stone-700 transition-all"
        >
          <Menu className="w-5 h-5" />
          <span>Plus</span>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* Real-time Microphone Speech Recognition Modal */}
      <VoiceModal isOpen={isVoiceModalOpen} onClose={() => setIsVoiceModalOpen(false)} />
    </>
  );
}
