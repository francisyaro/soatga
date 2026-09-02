'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Wallet,
  FileText,
  AlertTriangle,
  Building,
  Calendar,
  FileSpreadsheet,
  Download,
  Mic,
  RotateCcw,
} from 'lucide-react';

export default function ReportsPage() {
  const [period, setPeriod] = useState<'Jour' | 'Semaine' | 'Mois' | 'Personnalisé'>('Jour');

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Rapports</h1>
          <p className="text-sm text-stone-500 mt-0.5">
            Analysez vos performances et suivez l&apos;évolution de votre activité.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs font-semibold text-stone-700 flex items-center space-x-2 shadow-sm">
            <Calendar className="w-4 h-4 text-stone-400" />
            <span>2 sept. 2025 — 2 sept. 2025</span>
          </div>

          <Link
            href="/voice/draft"
            className="bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm flex items-center space-x-2"
          >
            <Mic className="w-4 h-4" />
            <span>Parler à SOATGA</span>
          </Link>
        </div>
      </div>

      {/* Period Filter Pills */}
      <div className="flex items-center space-x-2 text-xs font-semibold">
        {(['Jour', 'Semaine', 'Mois', 'Personnalisé'] as const).map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            className={`px-4 py-1.5 rounded-full transition-all ${
              period === p
                ? 'bg-brand-red text-white shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Top 5 Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Ventes */}
        <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
              VENTES
            </span>
            <span className="text-xl font-black text-stone-900 mt-1 block">486 500 FCFA</span>
            <span className="text-[10px] text-emerald-600 font-semibold">+12 % vs hier</span>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <TrendingUp className="w-5 h-5" />
          </div>
        </div>

        {/* Encaissements */}
        <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
              ENCAISSEMENTS
            </span>
            <span className="text-xl font-black text-emerald-600 mt-1 block">392 000 FCFA</span>
            <span className="text-[10px] text-stone-400">4 paiements</span>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Wallet className="w-5 h-5" />
          </div>
        </div>

        {/* Crédits */}
        <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
              CRÉDITS
            </span>
            <span className="text-xl font-black text-stone-900 mt-1 block">94 500 FCFA</span>
            <span className="text-[10px] text-red-500 font-medium">2 ventes</span>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
        </div>

        {/* Stock Critique */}
        <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
              STOCK CRITIQUE
            </span>
            <span className="text-xl font-black text-stone-900 mt-1 block">13</span>
            <span className="text-[10px] text-red-500 font-medium">2 produits</span>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5" />
          </div>
        </div>

        {/* Caisse */}
        <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
              CAISSE
            </span>
            <span className="text-xl font-black text-emerald-600 mt-1 block">318 700 FCFA</span>
            <span className="text-[10px] text-stone-400">Session ouverte 07:45</span>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Building className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Analytics Grid: Line Chart & Donut Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Line Chart Simulation (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-4">
          <div className="flex justify-between items-center border-b border-stone-100 pb-3">
            <h2 className="text-sm font-bold text-stone-900">Évolution des ventes</h2>
            <select className="bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-1 text-xs text-stone-700 font-semibold">
              <option>7 derniers jours</option>
              <option>30 derniers jours</option>
            </select>
          </div>

          {/* SVG Chart Visualization */}
          <div className="h-48 w-full pt-4 flex flex-col justify-between">
            <svg className="w-full h-36 overflow-visible" viewBox="0 0 500 120">
              <path
                d="M 0,80 Q 70,60 140,50 T 280,20 T 420,55 T 500,65"
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
              />
              <path
                d="M 0,80 Q 70,60 140,50 T 280,20 T 420,55 T 500,65 L 500,120 L 0,120 Z"
                fill="url(#greenGradient)"
                opacity="0.15"
              />
              <defs>
                <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
              </defs>
              <circle cx="0" cy="80" r="4" fill="#10b981" />
              <circle cx="70" cy="65" r="4" fill="#10b981" />
              <circle cx="140" cy="55" r="4" fill="#10b981" />
              <circle cx="280" cy="20" r="5" fill="#10b981" />
              <circle cx="350" cy="40" r="4" fill="#10b981" />
              <circle cx="420" cy="55" r="4" fill="#10b981" />
              <circle cx="500" cy="65" r="4" fill="#10b981" />
            </svg>

            {/* X-axis labels */}
            <div className="flex justify-between text-[10px] text-stone-400 font-semibold border-t border-stone-100 pt-2">
              <span>26 août</span>
              <span>27 août</span>
              <span>28 août</span>
              <span>29 août</span>
              <span>30 août</span>
              <span>31 août</span>
              <span>1 sept.</span>
              <span>2 sept.</span>
            </div>
          </div>
        </div>

        {/* Donut Chart (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-3">
            Ventes par catégorie
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
            {/* Donut SVG */}
            <div className="relative w-36 h-36 shrink-0 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                <circle
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="none"
                  stroke="#d9381e"
                  strokeWidth="4"
                  strokeDasharray="42 100"
                  strokeDashoffset="0"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="4"
                  strokeDasharray="26 100"
                  strokeDashoffset="-42"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="4"
                  strokeDasharray="15 100"
                  strokeDashoffset="-68"
                />
              </svg>
              <span className="absolute text-xs font-bold text-stone-800">42%</span>
            </div>

            {/* Legend */}
            <div className="space-y-2 text-xs w-full">
              <div className="flex justify-between items-center">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-red"></span>
                  <span className="text-stone-700">Épicerie</span>
                </span>
                <span className="font-bold text-stone-900">204 300 FCFA (42%)</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="text-stone-700">Céréales</span>
                </span>
                <span className="font-bold text-stone-900">126 800 FCFA (26%)</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span className="text-stone-700">Hygiène</span>
                </span>
                <span className="font-bold text-stone-900">72 500 FCFA (15%)</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
                  <span className="text-stone-700">Boissons</span>
                </span>
                <span className="font-bold text-stone-900">48 600 FCFA (10%)</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-stone-400"></span>
                  <span className="text-stone-700">Autres</span>
                </span>
                <span className="font-bold text-stone-900">34 300 FCFA (7%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Top Produits + Résumé + Exporter */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Top Produits Table (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-3">
            Top produits
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-stone-400 font-bold uppercase border-b border-stone-100">
                  <th className="pb-2">#</th>
                  <th className="pb-2">PRODUIT</th>
                  <th className="pb-2">CATÉGORIE</th>
                  <th className="pb-2 text-center">QUANTITÉ VENDUE</th>
                  <th className="pb-2 text-right">CHIFFRE D&apos;AFFAIRES</th>
                  <th className="pb-2 text-right">% DU CA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-800">
                <tr>
                  <td className="py-2.5 font-bold text-stone-400">1</td>
                  <td className="py-2.5 font-bold text-stone-900">Huile 5 L</td>
                  <td className="py-2.5 text-stone-500">Épicerie</td>
                  <td className="py-2.5 text-center font-semibold">36</td>
                  <td className="py-2.5 text-right font-bold text-stone-900">234 000 FCFA</td>
                  <td className="py-2.5 text-right font-semibold text-stone-500">22,4 %</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-bold text-stone-400">2</td>
                  <td className="py-2.5 font-bold text-stone-900">Sac de riz 25 kg</td>
                  <td className="py-2.5 text-stone-500">Céréales</td>
                  <td className="py-2.5 text-center font-semibold">18</td>
                  <td className="py-2.5 text-right font-bold text-stone-900">198 800 FCFA</td>
                  <td className="py-2.5 text-right font-semibold text-stone-500">19,1 %</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-bold text-stone-400">3</td>
                  <td className="py-2.5 font-bold text-stone-900">Sucre 1 kg</td>
                  <td className="py-2.5 text-stone-500">Épicerie</td>
                  <td className="py-2.5 text-center font-semibold">120</td>
                  <td className="py-2.5 text-right font-bold text-stone-900">96 000 FCFA</td>
                  <td className="py-2.5 text-right font-semibold text-stone-500">9,3 %</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-bold text-stone-400">4</td>
                  <td className="py-2.5 font-bold text-stone-900">Savon Kabakourou</td>
                  <td className="py-2.5 text-stone-500">Hygiène</td>
                  <td className="py-2.5 text-center font-semibold">75</td>
                  <td className="py-2.5 text-right font-bold text-stone-900">52 500 FCFA</td>
                  <td className="py-2.5 text-right font-semibold text-stone-500">5,0 %</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-bold text-stone-400">5</td>
                  <td className="py-2.5 font-bold text-stone-900">Bidon d&apos;eau 10 L</td>
                  <td className="py-2.5 text-stone-500">Boissons</td>
                  <td className="py-2.5 text-center font-semibold">42</td>
                  <td className="py-2.5 text-right font-bold text-stone-900">50 400 FCFA</td>
                  <td className="py-2.5 text-right font-semibold text-stone-500">4,9 %</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Résumé (3 cols) */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-3">Résumé</h2>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-center p-2.5 rounded-xl bg-stone-50">
              <span className="text-stone-600 font-medium">Panier moyen</span>
              <span className="font-bold text-stone-900">28 676 FCFA</span>
            </div>

            <div className="flex justify-between items-center p-2.5 rounded-xl bg-stone-50">
              <span className="text-stone-600 font-medium">Nombre de ventes</span>
              <span className="font-bold text-stone-900">17</span>
            </div>

            <div className="flex justify-between items-center p-2.5 rounded-xl bg-stone-50">
              <span className="text-stone-600 font-medium">Taux de paiement</span>
              <span className="font-bold text-emerald-600">64,7 %</span>
            </div>

            <div className="flex justify-between items-center p-2.5 rounded-xl bg-stone-50">
              <span className="text-stone-600 font-medium">Crédits en cours</span>
              <span className="font-bold text-red-600">146 500 FCFA</span>
            </div>
          </div>
        </div>

        {/* Exporter (2 cols) */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-4 flex flex-col justify-between">
          <h2 className="text-sm font-bold text-stone-900">Exporter</h2>

          <div className="space-y-3">
            <button
              type="button"
              className="w-full bg-white hover:bg-stone-50 border border-stone-200 text-brand-red text-xs font-bold py-3 px-3 rounded-xl flex items-center justify-center space-x-2 shadow-sm transition-all"
            >
              <FileText className="w-4 h-4 text-brand-red" />
              <span>Exporter PDF</span>
            </button>

            <button
              type="button"
              className="w-full bg-white hover:bg-stone-50 border border-stone-200 text-emerald-700 text-xs font-bold py-3 px-3 rounded-xl flex items-center justify-center space-x-2 shadow-sm transition-all"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
              <span>Exporter Excel</span>
            </button>
          </div>

          <div className="text-[10px] text-stone-400 text-center pt-2 border-t border-stone-100">
            Dernière mise à jour: Aujourd&apos;hui 14:30
          </div>
        </div>
      </div>
    </div>
  );
}
