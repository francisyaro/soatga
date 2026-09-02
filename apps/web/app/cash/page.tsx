'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Wallet,
  ArrowDownRight,
  ArrowUpRight,
  RefreshCw,
  Lock,
  Search,
  Download,
  CheckCircle2,
  Mic,
  Plus,
} from 'lucide-react';

export default function CashPage() {
  const [activeTab, setActiveTab] = useState<'Vue' | 'Mouvements' | 'Sessions'>('Vue');
  const [activeFilter, setActiveFilter] = useState<'Tous' | 'Entrées' | 'Sorties' | 'Transferts'>('Tous');

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Caisse</h1>
          <p className="text-sm text-stone-500 mt-0.5">
            Gérez vos mouvements de caisse et suivez votre session en cours.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            href="/voice/draft"
            className="bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm flex items-center space-x-2"
          >
            <Mic className="w-4 h-4" />
            <span>Parler à SOATGA</span>
          </Link>

          <Link
            href="/sales/new"
            className="bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm flex items-center space-x-1.5"
          >
            <Plus className="w-4 h-4 text-stone-600" />
            <span>Nouvelle vente</span>
          </Link>
        </div>
      </div>

      {/* Top Cards Bar (Metrics + Session Status Card) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Metric 1: Solde actuel */}
        <div className="md:col-span-3 bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
              SOLDE ACTUEL
            </span>
            <span className="text-2xl font-black text-emerald-600 mt-1 block">318 700 FCFA</span>
            <span className="text-xs text-stone-400">En espèces</span>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Wallet className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 2: Entrées du jour */}
        <div className="md:col-span-3 bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
              ENTRÉES DU JOUR
            </span>
            <span className="text-2xl font-black text-emerald-600 mt-1 block">695 500 FCFA</span>
            <span className="text-xs text-stone-400">5 opérations</span>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <ArrowDownRight className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 3: Sorties du jour */}
        <div className="md:col-span-3 bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
              SORTIES DU JOUR
            </span>
            <span className="text-2xl font-black text-red-600 mt-1 block">376 800 FCFA</span>
            <span className="text-xs text-stone-400">4 opérations</span>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
            <ArrowUpRight className="w-6 h-6" />
          </div>
        </div>

        {/* Right Session Opened Box (3 cols) */}
        <div className="md:col-span-3 bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-emerald-600 flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Session ouverte</span>
            </span>
            <span className="text-stone-400 font-mono">07:45</span>
          </div>

          <div className="text-xs">
            <span className="text-stone-400 font-medium block">Responsable</span>
            <span className="font-bold text-stone-900 block">Aminata Diarra</span>
            <span className="text-stone-400 font-medium block mt-1">Solde théorique</span>
            <span className="font-bold text-emerald-600 text-sm block">318 700 FCFA</span>
          </div>

          <button
            type="button"
            className="w-full bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold py-2 rounded-xl flex items-center justify-center space-x-1.5 shadow-sm transition-all"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Clôturer la session</span>
          </button>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-4">
        {/* Navigation Tabs */}
        <div className="border-b border-stone-100 flex space-x-6 text-xs font-bold">
          {(['Vue', 'Mouvements', 'Sessions'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2.5 transition-all border-b-2 ${
                activeTab === tab
                  ? 'border-brand-red text-brand-red'
                  : 'border-transparent text-stone-400 hover:text-stone-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2 text-xs font-semibold overflow-x-auto w-full sm:w-auto">
            {(['Tous', 'Entrées', 'Sorties', 'Transferts'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  activeFilter === filter
                    ? 'bg-brand-red text-white shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {filter}
              </button>
            ))}

            <select className="bg-stone-50 border border-stone-200 rounded-xl px-3 py-1.5 text-xs text-stone-700 font-semibold">
              <option>Aujourd&apos;hui</option>
              <option>Hier</option>
              <option>Cette semaine</option>
            </select>
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-56">
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full pl-8 pr-3 py-1.5 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-red"
              />
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
            </div>

            <button
              type="button"
              className="bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-700 text-xs font-bold px-3 py-1.5 rounded-xl flex items-center space-x-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Exporter</span>
            </button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-stone-400 font-bold uppercase border-b border-stone-100">
                <th className="pb-3">HEURE</th>
                <th className="pb-3">TYPE</th>
                <th className="pb-3">COMPTE</th>
                <th className="pb-3">RÉFÉRENCE</th>
                <th className="pb-3 text-right">MONTANT</th>
                <th className="pb-3 text-right">STATUT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-800">
              {/* Row 1 */}
              <tr>
                <td className="py-3 font-semibold text-stone-600">14:20</td>
                <td className="py-3">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                    <span>↓ Entrée</span>
                  </span>
                </td>
                <td className="py-3 text-stone-600">Caisse espèces</td>
                <td className="py-3 font-bold text-stone-900">VTE-2451 • Boutique Sanogo</td>
                <td className="py-3 text-right font-bold text-emerald-600">125 000 FCFA</td>
                <td className="py-3 text-right">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                    Validé
                  </span>
                </td>
              </tr>

              {/* Row 2 */}
              <tr>
                <td className="py-3 font-semibold text-stone-600">12:05</td>
                <td className="py-3">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                    <span>↓ Entrée</span>
                  </span>
                </td>
                <td className="py-3 text-stone-600">Caisse espèces</td>
                <td className="py-3 font-bold text-stone-900">VTE-2450 • Issa Traoré</td>
                <td className="py-3 text-right font-bold text-emerald-600">30 000 FCFA</td>
                <td className="py-3 text-right">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                    Validé
                  </span>
                </td>
              </tr>

              {/* Row 3 */}
              <tr>
                <td className="py-3 font-semibold text-stone-600">10:41</td>
                <td className="py-3">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 font-semibold">
                    <span>↑ Sortie</span>
                  </span>
                </td>
                <td className="py-3 text-stone-600">Caisse espèces</td>
                <td className="py-3 font-bold text-stone-900">
                  Paiement fournisseur • Savon Kabakourou
                </td>
                <td className="py-3 text-right font-bold text-red-600">25 000 FCFA</td>
                <td className="py-3 text-right">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                    Validé
                  </span>
                </td>
              </tr>

              {/* Row 4 */}
              <tr>
                <td className="py-3 font-semibold text-stone-600">09:30</td>
                <td className="py-3">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 font-semibold">
                    <span>⇄ Transfert</span>
                  </span>
                </td>
                <td className="py-3 text-stone-600">Caisse espèces → Banque</td>
                <td className="py-3 font-bold text-stone-900">Dépôt journalier</td>
                <td className="py-3 text-right font-bold text-stone-900">100 000 FCFA</td>
                <td className="py-3 text-right">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                    Validé
                  </span>
                </td>
              </tr>

              {/* Row 5 */}
              <tr>
                <td className="py-3 font-semibold text-stone-600">08:15</td>
                <td className="py-3">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                    <span>↓ Entrée</span>
                  </span>
                </td>
                <td className="py-3 text-stone-600">Caisse espèces</td>
                <td className="py-3 font-bold text-stone-900">VTE-2449 • Mariam Kaboré</td>
                <td className="py-3 text-right font-bold text-emerald-600">46 500 FCFA</td>
                <td className="py-3 text-right">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                    Validé
                  </span>
                </td>
              </tr>

              {/* Row 6 */}
              <tr>
                <td className="py-3 font-semibold text-stone-600">08:00</td>
                <td className="py-3">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 font-semibold">
                    <span>↑ Sortie</span>
                  </span>
                </td>
                <td className="py-3 text-stone-600">Caisse espèces</td>
                <td className="py-3 font-bold text-stone-900">Frais divers</td>
                <td className="py-3 text-right font-bold text-red-600">1 800 FCFA</td>
                <td className="py-3 text-right">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                    Validé
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
