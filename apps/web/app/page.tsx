'use client';

import React from 'react';
import Link from 'next/link';
import {
  Mic,
  Plus,
  TrendingUp,
  Wallet,
  CreditCard,
  Building,
  AlertTriangle,
  Clock,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Header & Top Action CTAs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Aujourd&apos;hui</h1>
          <p className="text-sm text-stone-500 mt-0.5">
            Mercredi 2 septembre — Boutique Gounghin
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            href="/voice/draft"
            className="bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm flex items-center space-x-2 transition-all transform active:scale-95"
          >
            <Mic className="w-4 h-4" />
            <span>Parler à SOATGA</span>
          </Link>

          <Link
            href="/sales/new"
            className="bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm flex items-center space-x-1.5 transition-all"
          >
            <Plus className="w-4 h-4 text-stone-600" />
            <span>Nouvelle vente</span>
          </Link>
        </div>
      </div>

      {/* Top 5 Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* CA du jour */}
        <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-sm space-y-1">
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
            CA DU JOUR
          </span>
          <span className="text-xl font-black text-stone-900 block">486 500 FCFA</span>
          <span className="text-[10px] text-emerald-600 font-semibold block">+12 % vs hier</span>
        </div>

        {/* Encaissé */}
        <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-sm space-y-1">
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
            ENCAISSÉ
          </span>
          <span className="text-xl font-black text-emerald-600 block">392 000 FCFA</span>
          <span className="text-[10px] text-stone-400 block">4 paiements</span>
        </div>

        {/* Crédits accordés */}
        <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-sm space-y-1">
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
            CRÉDITS ACCORDÉS
          </span>
          <span className="text-xl font-black text-stone-900 block">94 500 FCFA</span>
          <span className="text-[10px] text-stone-400 block">2 ventes</span>
        </div>

        {/* Créances totales */}
        <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-sm space-y-1">
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
            CRÉANCES TOTALES
          </span>
          <span className="text-xl font-black text-red-600 block">1 245 000 FCFA</span>
          <span className="text-[10px] text-stone-400 block">1 en retard</span>
        </div>

        {/* Caisse */}
        <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-sm space-y-1">
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
            CAISSE
          </span>
          <span className="text-xl font-black text-emerald-600 block">318 700 FCFA</span>
          <span className="text-[10px] text-stone-400 block">Session ouverte 07:45</span>
        </div>
      </div>

      {/* Main Grid: Ventes récentes (7 cols Left), Alertes & Activités (5 cols Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Ventes Récentes Card */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <h2 className="text-sm font-bold text-stone-900">Ventes récentes</h2>
            <Link
              href="/sales"
              className="text-xs font-bold text-brand-red hover:underline"
            >
              Tout voir
            </Link>
          </div>

          <div className="divide-y divide-stone-100 text-xs">
            {/* Item 1 */}
            <div className="py-3 flex items-center justify-between">
              <div>
                <Link
                  href="/sales/VTE-2451"
                  className="font-bold text-stone-900 hover:text-brand-red block"
                >
                  Boutique Sanogo
                </Link>
                <span className="text-[11px] text-stone-400">
                  VTE-2451 • Aujourd&apos;hui 14:20 • Orange Money
                </span>
              </div>
              <div className="text-right">
                <span className="font-bold text-stone-900 block">125 000 FCFA</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-[10px]">
                  Payée
                </span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="py-3 flex items-center justify-between">
              <div>
                <span className="font-bold text-stone-900 block">Issa Traoré</span>
                <span className="text-[11px] text-stone-400">
                  VTE-2450 • Aujourd&apos;hui 12:05 • Espèces
                </span>
              </div>
              <div className="text-right">
                <span className="font-bold text-stone-900 block">78 000 FCFA</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-semibold text-[10px]">
                  Partielle
                </span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="py-3 flex items-center justify-between">
              <div>
                <span className="font-bold text-stone-900 block">Mariam Kaboré</span>
                <span className="text-[11px] text-stone-400">
                  VTE-2449 • Aujourd&apos;hui 10:41 • Espèces
                </span>
              </div>
              <div className="text-right">
                <span className="font-bold text-stone-900 block">46 500 FCFA</span>
                <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-semibold text-[10px]">
                  Crédit
                </span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="py-3 flex items-center justify-between">
              <div>
                <span className="font-bold text-stone-900 block">Alimentation Wend-Kuuni</span>
                <span className="text-[11px] text-stone-400">
                  VTE-2448 • Hier 17:55 • Banque
                </span>
              </div>
              <div className="text-right">
                <span className="font-bold text-stone-900 block">210 000 FCFA</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-[10px]">
                  Payée
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Alertes stock & Activité récente */}
        <div className="lg:col-span-5 space-y-6">
          {/* Alertes stock */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-3">
            <div className="flex items-center space-x-2 border-b border-stone-100 pb-3">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <h2 className="text-sm font-bold text-stone-900">Alertes stock</h2>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-xl bg-stone-50">
                <span className="font-semibold text-stone-800">Huile 5 L</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold text-[10px]">
                  8 restants
                </span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-stone-50">
                <span className="font-semibold text-stone-800">Savon Kabakourou</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold text-[10px]">
                  5 restants
                </span>
              </div>
            </div>
          </div>

          {/* Activité récente */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-3">
            <h2 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-3">
              Activité récente
            </h2>

            <div className="space-y-3 text-xs">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0"></span>
                  <span className="text-stone-700">Vente VTE-2451 confirmée par Aminata</span>
                </div>
                <span className="text-[10px] text-stone-400 font-mono">14:20</span>
              </div>

              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0"></span>
                  <span className="text-stone-700">Paiement Orange Money reçu — 125 000 FCFA</span>
                </div>
                <span className="text-[10px] text-stone-400 font-mono">14:21</span>
              </div>

              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0"></span>
                  <span className="text-stone-700">Stock faible : Savon Kabakourou (5 restants)</span>
                </div>
                <span className="text-[10px] text-stone-400 font-mono">13:02</span>
              </div>

              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0"></span>
                  <span className="text-stone-700">Rappel envoyé à Mariam Kaboré</span>
                </div>
                <span className="text-[10px] text-stone-400 font-mono">09:15</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
