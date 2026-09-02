'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Search } from 'lucide-react';

export default function CustomersPage() {
  const [selectedFilter, setSelectedFilter] = useState<'Tous' | 'Avec encours' | 'En retard' | 'À jour'>('Tous');
  const [selectedCustomerId, setSelectedCustomerId] = useState('3');
  const [activeTab, setActiveTab] = useState<'Aperçu' | 'Achats' | 'Paiements' | 'Crédit' | 'Activité'>('Aperçu');

  const customers = [
    {
      id: '1',
      name: 'Boutique Sanogo',
      phone: '+226 70 12 34 56',
      balance: 0,
      status: 'À jour',
      statusBg: 'bg-emerald-50 text-emerald-700',
      totalPurchased: 450000,
      totalPaid: 450000,
      nextDueDate: '—',
    },
    {
      id: '2',
      name: 'Issa Traoré',
      phone: '+226 76 55 21 09',
      balance: 48000,
      status: 'À jour',
      statusBg: 'bg-emerald-50 text-emerald-700',
      totalPurchased: 210000,
      totalPaid: 162000,
      nextDueDate: '20 août',
    },
    {
      id: '3',
      name: 'Mariam Kaboré',
      phone: '+226 65 89 74 12',
      balance: 146500,
      status: 'En retard',
      statusBg: 'bg-red-100 text-red-700',
      totalPurchased: 842000,
      totalPaid: 695500,
      nextDueDate: '12 août (en retard)',
    },
    {
      id: '4',
      name: 'Alimentation Wend-Kuuni',
      phone: '+226 71 44 88 03',
      balance: 320000,
      status: 'À jour',
      statusBg: 'bg-emerald-50 text-emerald-700',
      totalPurchased: 950000,
      totalPaid: 630000,
      nextDueDate: '15 sept.',
    },
    {
      id: '5',
      name: 'Salif Zongo',
      phone: '+226 78 90 11 22',
      balance: 0,
      status: 'À jour',
      statusBg: 'bg-emerald-50 text-emerald-700',
      totalPurchased: 180000,
      totalPaid: 180000,
      nextDueDate: '—',
    },
  ];

  const selectedCustomer = customers.find((c) => c.id === selectedCustomerId) || customers[2];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Clients</h1>
          <p className="text-sm text-stone-500 mt-0.5">5 clients • 514 500 FCFA d&apos;encours</p>
        </div>

        <button
          type="button"
          className="bg-brand-red hover:bg-brand-red-hover text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm flex items-center space-x-2 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Nouveau client</span>
        </button>
      </div>

      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Rechercher par nom ou téléphone..."
          className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-red shadow-sm"
        />
        <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
      </div>

      {/* Filter Pills */}
      <div className="flex items-center space-x-2 text-xs font-semibold overflow-x-auto pb-1">
        {(['Tous', 'Avec encours', 'En retard', 'À jour'] as const).map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-1.5 rounded-full transition-all ${
              selectedFilter === filter
                ? 'bg-brand-red text-white shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Split Layout: Left Client List (4 cols), Right Client Details (8 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Client Cards List */}
        <div className="lg:col-span-4 space-y-3">
          {customers.map((customer) => {
            const isSelected = customer.id === selectedCustomerId;
            return (
              <div
                key={customer.id}
                onClick={() => setSelectedCustomerId(customer.id)}
                className={`bg-white rounded-2xl p-4 border transition-all cursor-pointer shadow-sm flex justify-between items-center ${
                  isSelected
                    ? 'border-brand-red ring-1 ring-brand-red bg-red-50/20'
                    : 'border-stone-200/80 hover:border-stone-300'
                }`}
              >
                <div>
                  <h3 className="font-bold text-stone-900 text-sm">{customer.name}</h3>
                  <span className="text-xs text-stone-400">{customer.phone}</span>
                </div>

                <div className="text-right">
                  <span className="font-bold text-stone-900 text-sm block">
                    {customer.balance.toLocaleString('fr-FR')} FCFA
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full inline-block mt-0.5 ${customer.statusBg}`}
                  >
                    {customer.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Selected Client Details Card */}
        <div className="lg:col-span-8 bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-5">
          {/* Header */}
          <div className="flex justify-between items-start border-b border-stone-100 pb-4">
            <div>
              <h2 className="text-xl font-bold text-stone-900">{selectedCustomer.name}</h2>
              <span className="text-xs text-stone-500 font-medium">
                {selectedCustomer.phone} • dernier achat Aujourd&apos;hui
              </span>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                Solde dû
              </span>
              <span className="text-2xl font-black text-red-600">
                {selectedCustomer.balance.toLocaleString('fr-FR')} FCFA
              </span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-stone-100 flex space-x-6 text-xs font-bold">
            {(['Aperçu', 'Achats', 'Paiements', 'Crédit', 'Activité'] as const).map((tab) => (
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

          {/* Stat Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-stone-50 border border-stone-100 rounded-2xl p-4">
              <span className="text-xs text-stone-400 font-semibold block">Total acheté</span>
              <span className="text-xl font-black text-stone-900 mt-1 block">
                {selectedCustomer.totalPurchased.toLocaleString('fr-FR')} FCFA
              </span>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-2xl p-4">
              <span className="text-xs text-stone-400 font-semibold block">Total payé</span>
              <span className="text-xl font-black text-emerald-600 mt-1 block">
                {selectedCustomer.totalPaid.toLocaleString('fr-FR')} FCFA
              </span>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-2xl p-4">
              <span className="text-xs text-stone-400 font-semibold block">
                Prochaine échéance
              </span>
              <span className="text-sm font-bold text-stone-900 mt-2 block">
                {selectedCustomer.nextDueDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
