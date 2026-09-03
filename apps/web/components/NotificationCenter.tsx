'use client';

import React, { useState } from 'react';
import {
  Bell,
  X,
  Check,
  ShoppingBag,
  AlertTriangle,
  UserPlus,
  Send,
  Wallet,
  CheckCheck,
} from 'lucide-react';

export interface NotificationItem {
  id: string;
  type: 'sale' | 'stock' | 'customer' | 'reminder' | 'payment';
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

export function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: '1',
      type: 'sale',
      title: 'Nouvelle Vente Confirmée',
      message: 'VTE-2451 créée par Aminata (125 000 FCFA via Orange Money).',
      timestamp: 'Il y a 5 min',
      isRead: false,
    },
    {
      id: '2',
      type: 'stock',
      title: 'Alerte Stock Faible',
      message: 'Huile 5 L est à 8 bidons (Seuil d\'alerte: 12).',
      timestamp: 'Il y a 18 min',
      isRead: false,
    },
    {
      id: '3',
      type: 'customer',
      title: 'Nouveau Client Créé',
      message: 'Le client Oumarou Sawadogo a été créé suite à une vente vocale.',
      timestamp: 'Il y a 45 min',
      isRead: false,
    },
    {
      id: '4',
      type: 'reminder',
      title: 'Rappel de Crédit Envoyé',
      message: 'Rappel de créance (146 500 FCFA) envoyé à Mariam Kaboré.',
      timestamp: 'Il y a 2h',
      isRead: true,
    },
    {
      id: '5',
      type: 'payment',
      title: 'Encaissement Reçu',
      message: 'Paiement de 46 500 FCFA reçu en espèces au comptoir.',
      timestamp: 'Il y a 3h',
      isRead: true,
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const getIcon = (type: NotificationItem['type']) => {
    switch (type) {
      case 'sale':
        return <ShoppingBag className="w-4 h-4 text-emerald-600" />;
      case 'stock':
        return <AlertTriangle className="w-4 h-4 text-amber-600" />;
      case 'customer':
        return <UserPlus className="w-4 h-4 text-sky-600" />;
      case 'reminder':
        return <Send className="w-4 h-4 text-red-600" />;
      case 'payment':
        return <Wallet className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <div className="relative">
      {/* Bell Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative text-stone-500 hover:text-stone-700 p-2 rounded-full hover:bg-stone-100 transition-colors"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-brand-red text-white text-[9px] font-extrabold flex items-center justify-center border-2 border-white">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Notification Dropdown Panel */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-stone-200/80 z-50 overflow-hidden animate-in fade-in zoom-in-95">
            {/* Panel Header */}
            <div className="p-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/60">
              <div className="flex items-center space-x-2">
                <Bell className="w-4 h-4 text-brand-red" />
                <h3 className="font-bold text-stone-900 text-sm">Centre de Notifications</h3>
                {unreadCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-red-100 text-brand-red text-[10px] font-bold">
                    {unreadCount} nouvelles
                  </span>
                )}
              </div>

              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-[11px] font-bold text-brand-red hover:underline flex items-center space-x-1"
                >
                  <CheckCheck className="w-3.5 h-3.5" />
                  <span>Tout marquer lu</span>
                </button>
              )}
            </div>

            {/* Notification Items List */}
            <div className="divide-y divide-stone-100 max-h-80 overflow-y-auto">
              {notifications.map((n) => (
                <div
                  key={n.id}
                  className={`p-3.5 flex items-start space-x-3 transition-colors ${
                    n.isRead ? 'bg-white' : 'bg-red-50/20'
                  }`}
                >
                  <div className="p-2 rounded-xl bg-stone-100 shrink-0 mt-0.5">
                    {getIcon(n.type)}
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-stone-900 text-xs">{n.title}</span>
                      <span className="text-[10px] text-stone-400 font-medium">{n.timestamp}</span>
                    </div>
                    <p className="text-xs text-stone-600 leading-snug">{n.message}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Panel Footer */}
            <div className="p-3 bg-stone-50 border-t border-stone-100 text-center">
              <span className="text-[11px] text-stone-400 font-semibold">
                Activité commerciale en temps réel
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
