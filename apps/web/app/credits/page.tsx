'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mic,
  Plus,
  Search,
  MoreVertical,
  Send,
  CreditCard,
  Calendar,
  Clock,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

export default function CreditsPage() {
  const [selectedFilter, setSelectedFilter] = useState<'Tous' | 'À venir' | 'Aujourd\'hui' | 'En retard'>('Tous');

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Header & CTAs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Crédits</h1>
          <p className="text-sm text-stone-500 mt-0.5">
            Gérez les créances clients et suivez vos recouvrements.
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

      {/* Metrics Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
              À RECOUVRER
            </span>
            <span className="text-2xl font-black text-stone-900 mt-1 block">514 500 FCFA</span>
            <span className="text-xs text-stone-400">5 clients</span>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <CreditCard className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
              ÉCHÉANCES AUJOURD&apos;HUI
            </span>
            <span className="text-2xl font-black text-amber-600 mt-1 block">78 000 FCFA</span>
            <span className="text-xs text-stone-400">1 client</span>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Calendar className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
              EN RETARD
            </span>
            <span className="text-2xl font-black text-red-600 mt-1 block">146 500 FCFA</span>
            <span className="text-xs text-stone-400">1 client</span>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
              MONTANT RÉCUPÉRÉ CE MOIS
            </span>
            <span className="text-2xl font-black text-emerald-600 mt-1 block">221 500 FCFA</span>
            <span className="text-xs text-stone-400">8 paiements</span>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Main Grid (8 cols Table, 4 cols Right Panel) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (8 cols): Table */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-4">
            {/* Filter Pills & Search */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center space-x-2 text-xs font-semibold overflow-x-auto w-full sm:w-auto">
                {(['Tous', 'À venir', "Aujourd'hui", 'En retard'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-3.5 py-1.5 rounded-full transition-all ${
                      selectedFilter === filter
                        ? 'bg-brand-red text-white shadow-sm'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-60">
                <input
                  type="text"
                  placeholder="Rechercher un client..."
                  className="w-full pl-8 pr-3 py-1.5 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-red"
                />
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="text-stone-400 font-bold uppercase border-b border-stone-100">
                    <th className="pb-3">CLIENT</th>
                    <th className="pb-3">MONTANT DÛ</th>
                    <th className="pb-3">ÉCHÉANCE</th>
                    <th className="pb-3">DERNIER PAIEMENT</th>
                    <th className="pb-3">STATUT</th>
                    <th className="pb-3 text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-800">
                  {/* Row 1: Selected Mariam Kaboré */}
                  <tr className="bg-red-50/30 border-l-4 border-l-brand-red">
                    <td className="py-3.5 pl-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-full bg-red-100 text-brand-red font-bold text-[10px] flex items-center justify-center">
                          MK
                        </div>
                        <div>
                          <span className="font-bold text-stone-900 block">Mariam Kaboré</span>
                          <span className="text-[10px] text-stone-400">+226 65 89 74 12</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 font-bold text-red-600">146 500 FCFA</td>
                    <td className="py-3.5">
                      <span className="font-bold text-red-600 block">12 août 2025</span>
                      <span className="text-[10px] text-red-500">(En retard)</span>
                    </td>
                    <td className="py-3.5 text-stone-500">
                      <span>10 juil. 2025</span>
                      <span className="text-[10px] text-stone-400 block">50 000 FCFA</span>
                    </td>
                    <td className="py-3.5">
                      <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-800 font-semibold text-[11px]">
                        En retard
                      </span>
                    </td>
                    <td className="py-3.5 text-right">
                      <button className="text-stone-400 hover:text-stone-700">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr>
                    <td className="py-3.5">
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] flex items-center justify-center">
                          IT
                        </div>
                        <div>
                          <span className="font-bold text-stone-900 block">Issa Traoré</span>
                          <span className="text-[10px] text-stone-400">+226 76 55 21 09</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 font-bold text-amber-600">48 000 FCFA</td>
                    <td className="py-3.5">
                      <span className="font-medium text-stone-800 block">20 août 2025</span>
                      <span className="text-[10px] text-stone-400">(À venir)</span>
                    </td>
                    <td className="py-3.5 text-stone-500">
                      <span>05 août 2025</span>
                      <span className="text-[10px] text-stone-400 block">30 000 FCFA</span>
                    </td>
                    <td className="py-3.5">
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-semibold text-[11px]">
                        À venir
                      </span>
                    </td>
                    <td className="py-3.5 text-right">
                      <button className="text-stone-400 hover:text-stone-700">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr>
                    <td className="py-3.5">
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-full bg-stone-100 text-stone-700 font-bold text-[10px] flex items-center justify-center">
                          BS
                        </div>
                        <div>
                          <span className="font-bold text-stone-900 block">Boutique Sanogo</span>
                          <span className="text-[10px] text-stone-400">+226 70 12 34 56</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 font-bold text-emerald-600">0 FCFA</td>
                    <td className="py-3.5 text-stone-400">—</td>
                    <td className="py-3.5 text-stone-500">
                      <span>02 sept. 2025</span>
                      <span className="text-[10px] text-stone-400 block">125 000 FCFA</span>
                    </td>
                    <td className="py-3.5">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-[11px]">
                        À jour
                      </span>
                    </td>
                    <td className="py-3.5 text-right">
                      <button className="text-stone-400 hover:text-stone-700">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column (4 cols): Selected Client Detailed Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-5">
            {/* Header Client info */}
            <div className="flex items-center space-x-3 border-b border-stone-100 pb-4">
              <div className="w-12 h-12 rounded-full bg-red-100 text-brand-red font-bold text-sm flex items-center justify-center">
                MK
              </div>
              <div>
                <h2 className="font-bold text-stone-900 text-base">Mariam Kaboré</h2>
                <span className="text-xs text-stone-400">+226 65 89 74 12</span>
              </div>
            </div>

            {/* Solde à recouvrir & prochaine échéance */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-stone-400 font-bold uppercase tracking-wider block">
                  SOLDE À RECOUVRER
                </span>
                <span className="text-xl font-black text-red-600 mt-1 block">146 500 FCFA</span>
              </div>
              <div>
                <span className="text-stone-400 font-bold uppercase tracking-wider block">
                  PROCHAINE ÉCHÉANCE
                </span>
                <span className="text-xs font-bold text-red-600 mt-1 block">12 août 2025</span>
                <span className="text-[10px] text-red-500">(En retard)</span>
              </div>
            </div>

            {/* Stats Summary Bar */}
            <div className="grid grid-cols-3 gap-2 bg-stone-50 rounded-xl p-3 text-[11px] text-center border border-stone-100">
              <div>
                <span className="text-stone-400 block font-medium">TOTAL ACHETÉ</span>
                <span className="font-bold text-stone-900">842 000 FCFA</span>
              </div>
              <div>
                <span className="text-stone-400 block font-medium">TOTAL PAYÉ</span>
                <span className="font-bold text-emerald-600">695 500 FCFA</span>
              </div>
              <div>
                <span className="text-stone-400 block font-medium">CRÉDIT ACCORDÉ</span>
                <span className="font-bold text-amber-600">146 500 FCFA</span>
              </div>
            </div>

            {/* Paiements récents */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-stone-900 uppercase tracking-wider">
                  PAIEMENTS RÉCENTS
                </span>
                <span className="text-brand-red font-semibold cursor-pointer">Tout voir</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 border border-stone-100">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <div>
                      <span className="font-bold text-stone-900 block">10 juil. 2025</span>
                      <span className="text-[10px] text-stone-400">Espèces</span>
                    </div>
                  </div>
                  <span className="font-bold text-emerald-600">50 000 FCFA</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 border border-stone-100">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <div>
                      <span className="font-bold text-stone-900 block">30 juin 2025</span>
                      <span className="text-[10px] text-stone-400">Orange Money</span>
                    </div>
                  </div>
                  <span className="font-bold text-emerald-600">100 000 FCFA</span>
                </div>
              </div>
            </div>

            {/* Send Reminder CTA */}
            <div className="pt-2 space-y-2 text-center">
              <button
                type="button"
                className="w-full bg-brand-red hover:bg-brand-red-hover text-white py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Envoyer un rappel</span>
              </button>
              <p className="text-[10px] text-stone-400">
                Un rappel sera envoyé par WhatsApp au client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
