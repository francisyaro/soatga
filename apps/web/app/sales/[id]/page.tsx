'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MoreHorizontal,
  Mail,
  Plus,
  RotateCcw,
  CheckCircle2,
  PackageCheck,
  CreditCard,
  Send,
  ChevronRight,
  Wallet,
} from 'lucide-react';

export default function SaleDetailPage() {
  const [activeTab, setActiveTab] = useState<'apercu' | 'paiements' | 'credit' | 'activite'>('apercu');

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-xs text-stone-500">
        <Link href="/sales" className="hover:text-stone-800">
          Ventes
        </Link>
        <ChevronRight className="w-3 h-3 text-stone-400" />
        <span className="font-semibold text-stone-800">Détail vente</span>
      </div>

      {/* Main Header Bar */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm flex flex-wrap items-center justify-between gap-6">
        <div>
          <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">
            RÉFÉRENCE
          </span>
          <h1 className="text-2xl font-black text-stone-900 mt-0.5">VTE-2451</h1>
        </div>

        <div>
          <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">
            CLIENT
          </span>
          <span className="text-base font-bold text-stone-900 block">Boutique Sanogo</span>
          <span className="text-xs text-stone-500">+226 70 12 34 56</span>
        </div>

        <div>
          <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">
            DATE ET HEURE
          </span>
          <span className="text-sm font-semibold text-stone-900 block">Aujourd&apos;hui 14:20</span>
          <span className="text-xs text-stone-500">Mercredi 2 septembre 2025</span>
        </div>

        <div>
          <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-1">
            STATUT
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
            Payée
          </span>
        </div>

        <div>
          <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">
            MONTANT TOTAL
          </span>
          <span className="text-2xl font-black text-emerald-600">125 000 FCFA</span>
        </div>

        <div>
          <button className="p-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-stone-200 flex space-x-8 text-sm font-semibold">
        {(['apercu', 'paiements', 'credit', 'activite'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 capitalize transition-all border-b-2 ${
              activeTab === tab
                ? 'border-brand-red text-brand-red'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            {tab === 'apercu'
              ? 'Aperçu'
              : tab === 'paiements'
              ? 'Paiements'
              : tab === 'credit'
              ? 'Crédit'
              : 'Activité'}
          </button>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Card 1: Articles vendus */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-stone-900 border-b border-stone-100 pb-3">
              Articles vendus
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-xs font-bold text-stone-400 uppercase tracking-wider border-b border-stone-100">
                    <th className="pb-3 font-semibold">PRODUIT</th>
                    <th className="pb-3 font-semibold">CATÉGORIE</th>
                    <th className="pb-3 font-semibold text-center">QTÉ</th>
                    <th className="pb-3 font-semibold text-right">PRIX UNIT.</th>
                    <th className="pb-3 font-semibold text-right">TOTAL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-50 text-stone-800">
                  <tr>
                    <td className="py-3">
                      <span className="font-semibold block">Huile 5 L</span>
                      <span className="text-xs text-stone-400">Réf. PRD-0002</span>
                    </td>
                    <td className="py-3 text-stone-500">Épicerie</td>
                    <td className="py-3 text-center font-semibold">2</td>
                    <td className="py-3 text-right">6 500 FCFA</td>
                    <td className="py-3 text-right font-bold">13 000 FCFA</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <span className="font-semibold block">Sac de riz 25 kg</span>
                      <span className="text-xs text-stone-400">Réf. PRD-0001</span>
                    </td>
                    <td className="py-3 text-stone-500">Céréales</td>
                    <td className="py-3 text-center font-semibold">5</td>
                    <td className="py-3 text-right">16 500 FCFA</td>
                    <td className="py-3 text-right font-bold">82 500 FCFA</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <span className="font-semibold block">Savon Kabakourou</span>
                      <span className="text-xs text-stone-400">Réf. PRD-0004</span>
                    </td>
                    <td className="py-3 text-stone-500">Hygiène</td>
                    <td className="py-3 text-center font-semibold">5</td>
                    <td className="py-3 text-right">350 FCFA</td>
                    <td className="py-3 text-right font-bold">1 750 FCFA</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <span className="font-semibold block">Bidon d&apos;eau 10 L</span>
                      <span className="text-xs text-stone-400">Réf. PRD-0005</span>
                    </td>
                    <td className="py-3 text-stone-500">Boissons</td>
                    <td className="py-3 text-center font-semibold">4</td>
                    <td className="py-3 text-right">1 200 FCFA</td>
                    <td className="py-3 text-right font-bold">4 800 FCFA</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Totals Summary */}
            <div className="border-t border-stone-100 pt-4 max-w-xs ml-auto space-y-2 text-sm">
              <div className="flex justify-between text-stone-600">
                <span>Sous-total</span>
                <span className="font-semibold text-stone-900">102 050 FCFA</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Remise</span>
                <span className="font-semibold text-stone-900">0 FCFA</span>
              </div>
              <div className="flex justify-between text-base font-black text-stone-900 border-t border-stone-200 pt-2">
                <span>Total</span>
                <span className="text-emerald-600">125 000 FCFA</span>
              </div>
            </div>
          </div>

          {/* Bottom Grid (2 columns: Paiement & Crédit) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 2: Paiement */}
            <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-4">
              <h2 className="text-base font-bold text-stone-900 border-b border-stone-100 pb-3">
                Paiement
              </h2>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 uppercase font-semibold">MODE DE PAIEMENT</span>
                  <span className="font-bold text-amber-600 flex items-center space-x-1">
                    <Wallet className="w-3.5 h-3.5" />
                    <span>Orange Money</span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 uppercase font-semibold">STATUT</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-[11px]">
                    Payé
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 uppercase font-semibold">MONTANT PAYÉ</span>
                  <span className="font-bold text-stone-900 text-sm">125 000 FCFA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 uppercase font-semibold">RÉFÉRENCE TRANSACTION</span>
                  <span className="font-mono text-stone-600">OM-250902-142012</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 uppercase font-semibold">REÇU</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-[11px]">
                    Émis
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Crédit */}
            <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-sm">Aucun reliquat</h3>
                <p className="text-xs text-stone-500">Le client n&apos;a aucun montant en attente.</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-xs border border-emerald-100">
                Compte à jour
              </span>
            </div>
          </div>
        </div>

        {/* Right Column (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Card 1: Actions */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-3">
            <h2 className="text-base font-bold text-stone-900">Actions</h2>

            <button
              type="button"
              className="w-full bg-brand-red hover:bg-brand-red-hover text-white py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 shadow-sm transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Envoyer le reçu</span>
            </button>

            <button
              type="button"
              className="w-full bg-white hover:bg-stone-50 text-brand-red border border-brand-red py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Enregistrer un paiement</span>
            </button>

            <button
              type="button"
              className="w-full bg-red-50 hover:bg-red-100 text-brand-red py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Annuler la vente</span>
            </button>
          </div>

          {/* Card 2: Activité */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-stone-900">Activité</h2>

            <div className="relative pl-6 space-y-5 text-xs before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-stone-200">
              {/* Event 1 */}
              <div className="relative">
                <span className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3" />
                </span>
                <div className="flex justify-between">
                  <span className="font-bold text-stone-900">Vente confirmée</span>
                  <span className="text-stone-400">14:20</span>
                </div>
                <p className="text-stone-500 mt-0.5">La vente VTE-2451 a été créée.</p>
              </div>

              {/* Event 2 */}
              <div className="relative">
                <span className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                  <CreditCard className="w-3 h-3" />
                </span>
                <div className="flex justify-between">
                  <span className="font-bold text-stone-900">Paiement reçu</span>
                  <span className="text-stone-400">14:21</span>
                </div>
                <p className="text-stone-500 mt-0.5">125 000 FCFA via Orange Money.</p>
              </div>

              {/* Event 3 */}
              <div className="relative">
                <span className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center">
                  <PackageCheck className="w-3 h-3" />
                </span>
                <div className="flex justify-between">
                  <span className="font-bold text-stone-900">Stock mis à jour</span>
                  <span className="text-stone-400">14:21</span>
                </div>
                <p className="text-stone-500 mt-0.5">Les quantités en stock ont été ajustées.</p>
              </div>

              {/* Event 4 */}
              <div className="relative">
                <span className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-sky-500 text-white flex items-center justify-center">
                  <Send className="w-3 h-3" />
                </span>
                <div className="flex justify-between">
                  <span className="font-bold text-stone-900">Reçu envoyé</span>
                  <span className="text-stone-400">14:22</span>
                </div>
                <p className="text-stone-500 mt-0.5">Reçu envoyé à Boutique Sanogo.</p>
              </div>
            </div>

            <button
              type="button"
              className="w-full py-2.5 text-center text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-50 hover:bg-stone-100 rounded-xl border border-stone-200 transition-all"
            >
              Voir toute l&apos;activité
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
