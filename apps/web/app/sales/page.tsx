'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

export default function SalesListPage() {
  const [activeTab, setActiveTab] = useState<'Liste' | 'Détail vente' | 'Nouvelle vente'>('Liste');
  const [activeFilter, setActiveFilter] = useState<'Toutes' | 'Payées' | 'Partielles' | 'Crédit' | 'Aujourd\'hui' | 'Cette semaine'>('Toutes');

  const sales = [
    {
      id: 'VTE-2451',
      client: 'Boutique Sanogo',
      date: 'Aujourd\'hui 14:20',
      total: 125000,
      paid: 125000,
      mode: 'Orange Money',
      status: 'Payée',
      statusBg: 'bg-emerald-50 text-emerald-700',
    },
    {
      id: 'VTE-2450',
      client: 'Issa Traoré',
      date: 'Aujourd\'hui 12:05',
      total: 78000,
      paid: 30000,
      mode: 'Espèces',
      status: 'Partielle',
      statusBg: 'bg-amber-100 text-amber-800',
    },
    {
      id: 'VTE-2449',
      client: 'Mariam Kaboré',
      date: 'Aujourd\'hui 10:41',
      total: 46500,
      paid: 0,
      mode: 'Espèces',
      status: 'Crédit',
      statusBg: 'bg-red-100 text-red-700',
    },
    {
      id: 'VTE-2448',
      client: 'Alimentation Wend-Kuuni',
      date: 'Hier 17:55',
      total: 210000,
      paid: 210000,
      mode: 'Banque',
      status: 'Payée',
      statusBg: 'bg-emerald-50 text-emerald-700',
    },
    {
      id: 'VTE-2447',
      client: 'Salif Zongo',
      date: 'Hier 16:12',
      total: 27000,
      paid: 27000,
      mode: 'Moov Money',
      status: 'Payée',
      statusBg: 'bg-emerald-50 text-emerald-700',
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-stone-900">Ventes</h1>
        <p className="text-sm text-stone-500 mt-0.5">
          Aujourd&apos;hui : 5 ventes • 486 500 FCFA
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-stone-200 flex space-x-6 text-xs font-bold">
        <Link
          href="/sales"
          className="pb-2.5 border-b-2 border-brand-red text-brand-red font-bold"
        >
          Liste
        </Link>
        <Link
          href="/sales/VTE-2451"
          className="pb-2.5 text-stone-400 hover:text-stone-700 font-semibold"
        >
          Détail vente
        </Link>
        <Link
          href="/sales/new"
          className="pb-2.5 text-stone-400 hover:text-stone-700 font-semibold"
        >
          Nouvelle vente
        </Link>
      </div>

      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Rechercher une vente, un client, une référence..."
          className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-red shadow-sm"
        />
        <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
      </div>

      {/* Filter Pills */}
      <div className="flex items-center space-x-2 text-xs font-semibold overflow-x-auto pb-1">
        {(['Toutes', 'Payées', 'Partielles', 'Crédit', "Aujourd'hui", 'Cette semaine'] as const).map(
          (filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full transition-all ${
                activeFilter === filter
                  ? 'bg-brand-red text-white shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {filter}
            </button>
          )
        )}
      </div>

      {/* Sales Table Card */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-stone-400 font-bold uppercase border-b border-stone-100">
                <th className="pb-3">RÉFÉRENCE</th>
                <th className="pb-3">CLIENT</th>
                <th className="pb-3">DATE</th>
                <th className="pb-3 text-right">TOTAL</th>
                <th className="pb-3 text-right">PAYÉ</th>
                <th className="pb-3">MODE</th>
                <th className="pb-3 text-right">STATUT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-800">
              {sales.map((sale) => (
                <tr key={sale.id} className="hover:bg-stone-50 transition-colors">
                  <td className="py-3.5 font-bold text-stone-900">
                    <Link href={`/sales/${sale.id}`} className="hover:text-brand-red">
                      {sale.id}
                    </Link>
                  </td>
                  <td className="py-3.5 font-semibold text-stone-900">{sale.client}</td>
                  <td className="py-3.5 text-stone-500">{sale.date}</td>
                  <td className="py-3.5 text-right font-bold text-stone-900">
                    {sale.total.toLocaleString('fr-FR')} FCFA
                  </td>
                  <td className="py-3.5 text-right font-bold text-stone-900">
                    {sale.paid.toLocaleString('fr-FR')} FCFA
                  </td>
                  <td className="py-3.5 text-stone-600 font-medium">{sale.mode}</td>
                  <td className="py-3.5 text-right">
                    <span className={`px-2.5 py-0.5 rounded-full font-semibold ${sale.statusBg}`}>
                      {sale.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
