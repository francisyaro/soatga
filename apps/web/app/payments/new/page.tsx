'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  Lock,
  Wallet,
  CreditCard,
  Building,
  Info,
} from 'lucide-react';
import { PaymentMethod } from '@soatga/shared';

export default function NewPaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>(PaymentMethod.CASH);
  const [amount, setAmount] = useState('46500');

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-16">
      {/* Top Back Link */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Paiement / Encaissement</h1>
          <p className="text-sm text-stone-500 mt-0.5">Enregistrez un paiement reçu d&apos;un client.</p>
        </div>

        <Link
          href="/sales/VTE-2451"
          className="bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm flex items-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour aux ventes</span>
        </Link>
      </div>

      {/* Client Header Card */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-red-100 text-brand-red font-bold text-sm flex items-center justify-center">
            MK
          </div>
          <div>
            <h2 className="font-bold text-stone-900 text-base">Mariam Kaboré</h2>
            <span className="text-xs text-stone-400">+226 65 89 74 12</span>
          </div>
        </div>

        <div>
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
            RÉFÉRENCE
          </span>
          <span className="text-sm font-bold text-stone-900 block">VTE-2449</span>
        </div>

        <div>
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
            DATE DE VENTE
          </span>
          <span className="text-sm font-semibold text-stone-900 block">Aujourd&apos;hui 10:41</span>
        </div>

        <div>
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
            MODE DE VENTE
          </span>
          <span className="text-sm font-semibold text-stone-900 block">Espèces</span>
        </div>

        <div>
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
            MONTANT DÛ
          </span>
          <span className="text-2xl font-black text-red-600">46 500 FCFA</span>
        </div>
      </div>

      {/* Form Grid (Left 7 cols, Right 5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (7 cols): Détails du paiement */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-5">
            <h2 className="text-base font-bold text-stone-900 border-b border-stone-100 pb-3">
              Détails du paiement
            </h2>

            {/* Montant encaissé & Mode de paiement */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-stone-700 mb-1">
                  Montant encaissé <span className="text-brand-red">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl font-bold text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red"
                  />
                  <span className="absolute right-3 top-3 font-bold text-stone-400">FCFA</span>
                </div>
                <span className="text-[10px] text-stone-400 mt-1 block">
                  Saisissez le montant reçu du client.
                </span>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">
                  Mode de paiement <span className="text-brand-red">*</span>
                </label>
                <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                  <button
                    type="button"
                    onClick={() => setSelectedMethod(PaymentMethod.CASH)}
                    className={`py-2 px-2 rounded-xl font-bold border transition-all ${
                      selectedMethod === PaymentMethod.CASH
                        ? 'border-brand-red text-brand-red bg-red-50/50'
                        : 'border-stone-200 text-stone-700 bg-white'
                    }`}
                  >
                    Espèces
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedMethod(PaymentMethod.ORANGE_MONEY)}
                    className={`py-2 px-2 rounded-xl font-bold border transition-all ${
                      selectedMethod === PaymentMethod.ORANGE_MONEY
                        ? 'border-brand-red text-brand-red bg-red-50/50'
                        : 'border-stone-200 text-stone-700 bg-white'
                    }`}
                  >
                    Orange Money
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedMethod(PaymentMethod.MOOV_MONEY)}
                    className={`py-2 px-2 rounded-xl font-bold border transition-all ${
                      selectedMethod === PaymentMethod.MOOV_MONEY
                        ? 'border-brand-red text-brand-red bg-red-50/50'
                        : 'border-stone-200 text-stone-700 bg-white'
                    }`}
                  >
                    Moov Money
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedMethod(PaymentMethod.BANK)}
                    className={`py-2 px-2 rounded-xl font-bold border transition-all ${
                      selectedMethod === PaymentMethod.BANK
                        ? 'border-brand-red text-brand-red bg-red-50/50'
                        : 'border-stone-200 text-stone-700 bg-white'
                    }`}
                  >
                    Banque
                  </button>
                </div>
              </div>
            </div>

            {/* Compte & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-stone-700 mb-1">
                  Compte <span className="text-brand-red">*</span>
                </label>
                <select className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 font-medium focus:outline-none focus:ring-2 focus:ring-brand-red">
                  <option>Caisse principale</option>
                  <option>Orange Money Merchant</option>
                  <option>Moov Money Merchant</option>
                  <option>Compte Bancaire BIB</option>
                </select>
                <span className="text-[10px] text-stone-400 mt-1 block">
                  Compte ou caisse où le paiement est enregistré.
                </span>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">
                  Date <span className="text-brand-red">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="02/09/2025 14:25"
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 font-medium focus:outline-none focus:ring-2 focus:ring-brand-red"
                />
              </div>
            </div>

            {/* Référence & Commentaire */}
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Référence</label>
                <input
                  type="text"
                  defaultValue="Reçu manuel"
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-red"
                />
                <span className="text-[10px] text-stone-400 mt-1 block">
                  Numéro de reçu, transaction ou référence externe (optionnel).
                </span>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Commentaire</label>
                <textarea
                  rows={2}
                  defaultValue="Paiement en espèces reçu au comptoir."
                  className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-red"
                ></textarea>
                <span className="text-[10px] text-stone-400 mt-1 block">Note interne (optionnel).</span>
              </div>
            </div>

            {/* Footer Banner */}
            <div className="bg-amber-50/60 border border-amber-200/60 rounded-xl p-3 text-xs text-amber-900 font-semibold flex items-center space-x-2">
              <Info className="w-4 h-4 text-amber-700" />
              <span>Vente: VTE-2449 • Montant total: 46 500 FCFA</span>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Résumé du paiement */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-5">
            <h2 className="text-base font-bold text-stone-900 border-b border-stone-100 pb-3">
              Résumé du paiement
            </h2>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-stone-600">
                <span>Montant dû</span>
                <span className="font-bold text-red-600">46 500 FCFA</span>
              </div>

              <div className="flex justify-between text-stone-600">
                <span>Montant encaissé</span>
                <span className="font-bold text-emerald-600">46 500 FCFA</span>
              </div>

              <div className="border-t border-stone-100 pt-3 flex justify-between items-center">
                <span className="font-bold text-stone-900">Reliquat après paiement</span>
                <span className="text-2xl font-black text-emerald-600">0 FCFA</span>
              </div>
            </div>

            {/* Success Box */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-800 font-semibold flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Le paiement couvrira intégralement la vente.</span>
            </div>

            {/* Action CTA */}
            <div className="pt-2 space-y-2 text-center">
              <Link
                href="/sales/VTE-2451"
                className="w-full bg-brand-red hover:bg-brand-red-hover text-white py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 shadow-md transition-all"
              >
                <Lock className="w-4 h-4" />
                <span>Confirmer l&apos;encaissement</span>
              </Link>
              <p className="text-[11px] text-stone-400">
                Cette action enregistrera le paiement et mettra à jour le statut de la vente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
