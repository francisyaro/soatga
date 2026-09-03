'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  X,
  Home,
  Mic,
  PlusCircle,
  ShoppingBag,
  BarChart3,
  Package,
  CreditCard,
  Building2,
  Wallet,
  Tags,
  Users,
  Rocket,
  Lock,
  ChevronRight,
} from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  const menuSections = [
    {
      title: 'OPÉRATIONS RAPIDES',
      items: [
        { label: '🎙️ SOATGA Voice', href: '/voice/draft', icon: Mic, highlight: true },
        { label: '🛒 Nouvelle Vente', href: '/sales/new', icon: PlusCircle },
        { label: '💵 Encaissement', href: '/payments/new', icon: Wallet },
      ],
    },
    {
      title: 'GESTION COMMERCIALE',
      items: [
        { label: "Aujourd'hui (Tableau de bord)", href: '/', icon: Home },
        { label: 'Toutes les Ventes', href: '/sales', icon: ShoppingBag },
        { label: 'Gestion du Stock', href: '/stock', icon: Package },
        { label: 'Crédits & Recouvrements', href: '/credits', icon: CreditCard },
        { label: 'Caisse & Sessions', href: '/cash', icon: Building2 },
        { label: 'Rapports & Performance', href: '/reports', icon: BarChart3 },
      ],
    },
    {
      title: 'CATALOGUE & CLIENTS',
      items: [
        { label: 'Catalogue Produits', href: '/products', icon: Tags },
        { label: 'Fichier Clients', href: '/customers', icon: Users },
      ],
    },
    {
      title: 'COMPTE & PARAMÈTRES',
      items: [
        { label: 'Onboarding Marchand', href: '/onboarding', icon: Rocket },
        { label: 'Connexion / Déconnexion', href: '/login', icon: Lock },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Slide-Up Sheet */}
      <div className="fixed inset-x-0 bottom-0 top-12 bg-white rounded-t-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">
        {/* Header */}
        <div className="p-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 relative">
              <Image
                src="/icon.png"
                alt="SOATGA Icon"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="font-bold text-stone-900 text-sm">Navigation SOATGA</h2>
              <p className="text-[10px] text-stone-400">Tous les modules disponibles</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-stone-700 bg-white border border-stone-200 shadow-xs"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-24">
          {menuSections.map((section, idx) => (
            <div key={idx} className="space-y-2">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block px-1">
                {section.title}
              </span>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center justify-between p-3 rounded-2xl transition-all ${
                        item.highlight
                          ? 'bg-brand-red text-white font-bold shadow-md shadow-brand-red/20'
                          : isActive
                          ? 'bg-red-50 text-brand-red font-bold border border-red-100'
                          : 'bg-stone-50 hover:bg-stone-100 text-stone-800 font-semibold'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon
                          className={`w-5 h-5 ${
                            item.highlight
                              ? 'text-white'
                              : isActive
                              ? 'text-brand-red'
                              : 'text-stone-500'
                          }`}
                        />
                        <span className="text-xs">{item.label}</span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 ${
                          item.highlight ? 'text-white/80' : 'text-stone-400'
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
