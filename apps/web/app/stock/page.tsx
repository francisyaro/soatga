'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Package,
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  Search,
  ChevronRight,
  SlidersHorizontal,
  Plus,
} from 'lucide-react';

export default function StockPage() {
  const [activeFilter, setActiveFilter] = useState<'Tous' | 'Entrées' | 'Sorties' | 'Ajustements' | 'Alertes'>('Tous');

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Stock</h1>
          <p className="text-sm text-stone-500 mt-0.5">
            Suivi des mouvements et niveaux de stock
          </p>
        </div>

        <button
          type="button"
          className="bg-brand-red hover:bg-brand-red-hover text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm flex items-center space-x-2 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Ajuster le stock</span>
        </button>
      </div>

      {/* Top Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
              RÉFÉRENCES EN STOCK
            </span>
            <span className="text-2xl font-black text-stone-900 mt-1 block">5</span>
            <span className="text-xs text-stone-400">sur 5 références</span>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Package className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
              STOCK FAIBLE
            </span>
            <span className="text-2xl font-black text-amber-600 mt-1 block">2</span>
            <span className="text-xs text-stone-400">références à réapprovisionner</span>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
              ENTRÉES DU JOUR
            </span>
            <span className="text-2xl font-black text-emerald-600 mt-1 block">34</span>
            <span className="text-xs text-stone-400">articles en stock</span>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <ArrowDownRight className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
              SORTIES DU JOUR
            </span>
            <span className="text-2xl font-black text-red-600 mt-1 block">18</span>
            <span className="text-xs text-stone-400">articles sortis</span>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
            <ArrowUpRight className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Main Content Grid (8 cols Left, 4 cols Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (8 cols): Movements Table */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-4">
            {/* Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative flex-1 w-full">
                <input
                  type="text"
                  placeholder="Rechercher un produit, un mouvement, une source..."
                  className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-red"
                />
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
              </div>
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <select className="bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs font-semibold text-stone-700">
                  <option>Aujourd&apos;hui</option>
                  <option>7 derniers jours</option>
                  <option>Ce mois-ci</option>
                </select>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center space-x-2 text-xs font-semibold overflow-x-auto pb-1">
              {(['Tous', 'Entrées', 'Sorties', 'Ajustements', 'Alertes'] as const).map((filter) => (
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
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="text-stone-400 font-bold uppercase border-b border-stone-100">
                    <th className="pb-3">PRODUIT</th>
                    <th className="pb-3">MOUVEMENT</th>
                    <th className="pb-3 text-center">QUANTITÉ</th>
                    <th className="pb-3">SOURCE</th>
                    <th className="pb-3">DATE</th>
                    <th className="pb-3 text-right">STATUT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-800">
                  {/* Row 1 */}
                  <tr>
                    <td className="py-3">
                      <span className="font-bold text-stone-900 block">Huile 5 L</span>
                      <span className="text-[10px] text-stone-400">Épicerie • bidon</span>
                    </td>
                    <td className="py-3">
                      <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md bg-red-50 text-red-600 font-semibold">
                        <span>↓ Sortie</span>
                      </span>
                    </td>
                    <td className="py-3 text-center font-bold text-red-600">-2</td>
                    <td className="py-3">
                      <span className="font-bold text-stone-900 block">VTE-2451</span>
                      <span className="text-[10px] text-stone-400">Boutique Sanogo</span>
                    </td>
                    <td className="py-3 text-stone-500">Aujourd&apos;hui 14:20</td>
                    <td className="py-3 text-right">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                        Confirmé
                      </span>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr>
                    <td className="py-3">
                      <span className="font-bold text-stone-900 block">Sac de riz 25 kg</span>
                      <span className="text-[10px] text-stone-400">Céréales • sac</span>
                    </td>
                    <td className="py-3">
                      <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md bg-red-50 text-red-600 font-semibold">
                        <span>↓ Sortie</span>
                      </span>
                    </td>
                    <td className="py-3 text-center font-bold text-red-600">-1</td>
                    <td className="py-3">
                      <span className="font-bold text-stone-900 block">VTE-2450</span>
                      <span className="text-[10px] text-stone-400">Issa Traoré</span>
                    </td>
                    <td className="py-3 text-stone-500">Aujourd&apos;hui 12:05</td>
                    <td className="py-3 text-right">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                        Confirmé
                      </span>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr>
                    <td className="py-3">
                      <span className="font-bold text-stone-900 block">Huile 5 L</span>
                      <span className="text-[10px] text-stone-400">Épicerie • bidon</span>
                    </td>
                    <td className="py-3">
                      <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-semibold">
                        <span>↑ Entrée</span>
                      </span>
                    </td>
                    <td className="py-3 text-center font-bold text-emerald-600">+10</td>
                    <td className="py-3">
                      <span className="font-bold text-stone-900 block">Achat fournisseur</span>
                      <span className="text-[10px] text-stone-400">Fournisseur Diallo</span>
                    </td>
                    <td className="py-3 text-stone-500">Aujourd&apos;hui 09:15</td>
                    <td className="py-3 text-right">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                        Confirmé
                      </span>
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr>
                    <td className="py-3">
                      <span className="font-bold text-stone-900 block">Savon Kabakourou</span>
                      <span className="text-[10px] text-stone-400">Hygiène • pièce</span>
                    </td>
                    <td className="py-3">
                      <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-semibold">
                        <span>↑ Entrée</span>
                      </span>
                    </td>
                    <td className="py-3 text-center font-bold text-emerald-600">+5</td>
                    <td className="py-3">
                      <span className="font-bold text-stone-900 block">Achat fournisseur</span>
                      <span className="text-[10px] text-stone-400">Fournisseur Koné</span>
                    </td>
                    <td className="py-3 text-stone-500">Aujourd&apos;hui 08:40</td>
                    <td className="py-3 text-right">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                        Confirmé
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column (4 cols): Alertes & Product History */}
        <div className="lg:col-span-4 space-y-6">
          {/* Alertes stock faible Card */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-3">
            <div className="flex items-center space-x-2 border-b border-stone-100 pb-3">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <h2 className="text-sm font-bold text-stone-900">Alertes stock faible</h2>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 border border-stone-100">
                <div>
                  <span className="font-bold text-stone-900 block">Huile 5 L</span>
                  <span className="text-[10px] text-stone-400">Épicerie • bidon</span>
                </div>
                <div className="text-right">
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold text-[11px] block">
                    8 restants
                  </span>
                  <span className="text-[10px] text-stone-400">Seuil d&apos;alerte: 12</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 border border-stone-100">
                <div>
                  <span className="font-bold text-stone-900 block">Savon Kabakourou</span>
                  <span className="text-[10px] text-stone-400">Hygiène • pièce</span>
                </div>
                <div className="text-right">
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold text-[11px] block">
                    5 restants
                  </span>
                  <span className="text-[10px] text-stone-400">Seuil d&apos;alerte: 10</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="w-full text-center text-xs font-bold text-brand-red hover:underline pt-1 block"
            >
              Voir toutes les alertes (2)
            </button>
          </div>

          {/* Historique Product Card */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h2 className="text-sm font-bold text-stone-900">Historique — Huile 5 L</h2>
              <span className="text-xs font-bold text-brand-red cursor-pointer">Voir tout</span>
            </div>

            <div className="space-y-2 text-[11px]">
              <div className="grid grid-cols-4 font-semibold text-stone-400 uppercase border-b border-stone-100 pb-1">
                <span>DATE</span>
                <span>MVT</span>
                <span className="text-center">QTÉ</span>
                <span className="text-right">SOLDE</span>
              </div>
              <div className="grid grid-cols-4 text-stone-700 py-1">
                <span>Aujourd&apos;hui 14:20</span>
                <span className="text-red-600 font-semibold">↓ Sortie</span>
                <span className="text-center font-bold">-2</span>
                <span className="text-right font-bold">8</span>
              </div>
              <div className="grid grid-cols-4 text-stone-700 py-1">
                <span>Aujourd&apos;hui 09:15</span>
                <span className="text-emerald-600 font-semibold">↑ Entrée</span>
                <span className="text-center font-bold">+10</span>
                <span className="text-right font-bold">10</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-800 text-xs font-bold py-2.5 rounded-xl transition-all"
            >
              Voir la fiche produit &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
