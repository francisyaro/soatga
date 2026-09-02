'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Plus,
  Trash2,
  Barcode,
  Search,
  ChevronDown,
  Check,
  Bookmark,
  Calendar,
  User,
  Wallet,
} from 'lucide-react';
import { PaymentMethod } from '@soatga/shared';

export default function NewSalePage() {
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>(PaymentMethod.CASH);
  const [items, setItems] = useState([
    {
      id: '1',
      name: 'Sac de riz 25 kg',
      category: 'Céréales',
      unit: 'sac',
      stock: 42,
      quantity: 1,
      unitPrice: 16500,
      discountPct: 0,
      totalPrice: 16500,
    },
    {
      id: '2',
      name: 'Huile 5 L',
      category: 'Épicerie',
      unit: 'bidon',
      stock: 8,
      quantity: 2,
      unitPrice: 6500,
      discountPct: 0,
      totalPrice: 13000,
    },
    {
      id: '3',
      name: 'Savon Kabakourou',
      category: 'Hygiène',
      unit: 'pièce',
      stock: 5,
      quantity: 3,
      unitPrice: 350,
      discountPct: 0,
      totalPrice: 1050,
    },
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return {
            ...item,
            quantity: newQty,
            totalPrice: newQty * item.unitPrice * (1 - item.discountPct / 100),
          };
        }
        return item;
      })
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-stone-900">Nouvelle vente</h1>
        <p className="text-sm text-stone-500 mt-0.5">Saisie rapide d&apos;une nouvelle vente</p>
      </div>

      {/* Top Header Inputs (Client, Reference, Date) */}
      <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Client Selector */}
        <div className="md:col-span-6 space-y-1.5">
          <label className="block text-xs font-bold text-stone-700">
            Client <span className="text-brand-red">*</span>
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Rechercher un client (nom ou téléphone)..."
                className="w-full pl-3.5 pr-8 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-red"
              />
              <Search className="w-4 h-4 text-stone-400 absolute right-3 top-3" />
            </div>
            <button
              type="button"
              className="bg-white hover:bg-stone-50 border border-stone-200 text-brand-red text-xs font-bold px-3 py-2.5 rounded-xl shadow-sm whitespace-nowrap"
            >
              + Nouveau client
            </button>
          </div>
        </div>

        {/* Reference */}
        <div className="md:col-span-3 space-y-1.5">
          <label className="block text-xs font-bold text-stone-700">Référence (auto)</label>
          <input
            type="text"
            defaultValue="VTE-2452"
            disabled
            className="w-full px-3.5 py-2.5 bg-stone-100 border border-stone-200 rounded-xl text-stone-600 font-medium text-sm"
          />
        </div>

        {/* Date et heure */}
        <div className="md:col-span-3 space-y-1.5">
          <label className="block text-xs font-bold text-stone-700">Date et heure</label>
          <div className="relative">
            <input
              type="text"
              defaultValue="Aujourd'hui 14:35"
              className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red"
            />
            <ChevronDown className="w-4 h-4 text-stone-400 absolute right-3 top-3" />
          </div>
        </div>
      </div>

      {/* Main Form Content (Grid: Left 8 cols, Right 4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (8 cols): Products Table & Notes */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-stone-100 pb-4">
              <h2 className="text-base font-bold text-stone-900">Produits</h2>
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-72">
                  <input
                    type="text"
                    placeholder="Rechercher un produit, alias ou scanner..."
                    className="w-full pl-3.5 pr-8 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-red"
                  />
                  <Search className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 top-2.5" />
                </div>
                <button
                  type="button"
                  className="bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold px-3 py-2 rounded-xl flex items-center space-x-1"
                >
                  <Barcode className="w-3.5 h-3.5 text-stone-500" />
                  <span>Scanner</span>
                </button>
              </div>
            </div>

            {/* Products Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="text-stone-400 font-bold uppercase border-b border-stone-100">
                    <th className="pb-3">PRODUIT</th>
                    <th className="pb-3 text-center">QTÉ</th>
                    <th className="pb-3">UNITÉ</th>
                    <th className="pb-3 text-right">PRIX UNITAIRE</th>
                    <th className="pb-3 text-center">REMISE</th>
                    <th className="pb-3 text-right">TOTAL LIGNE</th>
                    <th className="pb-3 text-center"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-800">
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className="py-3">
                        <span className="font-bold text-stone-900 block">{item.name}</span>
                        <div className="flex items-center space-x-2 text-[10px] text-stone-400">
                          <span>
                            {item.category} • {item.unit}
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold">
                            {item.stock} en stock
                          </span>
                        </div>
                      </td>
                      <td className="py-3">
                        <div className="flex items-center justify-center space-x-1 border border-stone-200 rounded-lg p-1 bg-stone-50 w-24 mx-auto">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-5 h-5 rounded hover:bg-stone-200 font-bold flex items-center justify-center text-stone-600"
                          >
                            -
                          </button>
                          <span className="font-bold text-stone-900 w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-5 h-5 rounded hover:bg-stone-200 font-bold flex items-center justify-center text-stone-600"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-3">
                        <select className="bg-stone-50 border border-stone-200 rounded-lg px-2 py-1 text-xs">
                          <option>pièce</option>
                          <option>sac</option>
                          <option>bidon</option>
                        </select>
                      </td>
                      <td className="py-3 text-right font-semibold">
                        {item.unitPrice.toLocaleString('fr-FR')} FCFA
                      </td>
                      <td className="py-3 text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <input
                            type="number"
                            defaultValue={0}
                            className="w-10 py-1 text-center bg-stone-50 border border-stone-200 rounded-lg text-xs"
                          />
                          <span className="text-stone-400">%</span>
                        </div>
                      </td>
                      <td className="py-3 text-right font-bold text-stone-900">
                        {item.totalPrice.toLocaleString('fr-FR')} FCFA
                      </td>
                      <td className="py-3 text-center">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-stone-400 hover:text-red-500 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between border-t border-stone-100 pt-4 text-xs">
              <button
                type="button"
                className="text-brand-red font-bold hover:underline flex items-center space-x-1"
              >
                <Plus className="w-4 h-4" />
                <span>Ajouter une ligne</span>
              </button>

              <button
                type="button"
                onClick={() => setItems([])}
                className="text-stone-400 hover:text-stone-700 flex items-center space-x-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Vider le panier</span>
              </button>
            </div>
          </div>

          {/* Notes Card */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-2">
            <label className="block text-xs font-bold text-stone-700">Notes</label>
            <textarea
              rows={2}
              placeholder="Ajouter une note (optionnel)..."
              className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-red"
            ></textarea>
            <div className="text-right text-[10px] text-stone-400">0 / 200</div>
          </div>
        </div>

        {/* Right Column (4 cols): Summary & Payment */}
        <div className="lg:col-span-4 space-y-6">
          {/* Card 1: Récapitulatif */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-stone-900 border-b border-stone-100 pb-3">
              Récapitulatif
            </h2>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-stone-600">
                <span>Sous-total</span>
                <span className="font-bold text-stone-900">
                  {subtotal.toLocaleString('fr-FR')} FCFA
                </span>
              </div>

              <div className="flex justify-between items-center text-stone-600">
                <span>Remise globale</span>
                <div className="flex items-center space-x-1">
                  <input
                    type="number"
                    defaultValue={0}
                    className="w-12 py-1 px-2 text-right bg-stone-50 border border-stone-200 rounded-lg text-xs"
                  />
                  <select className="bg-stone-50 border border-stone-200 rounded-lg py-1 px-1 text-xs">
                    <option>FCFA</option>
                    <option>%</option>
                  </select>
                  <span className="font-bold text-stone-900 ml-2">0 FCFA</span>
                </div>
              </div>

              <div className="border-t border-stone-100 pt-3 flex justify-between items-center">
                <span className="font-black text-stone-900 uppercase text-xs">TOTAL</span>
                <span className="text-2xl font-black text-emerald-600">
                  {subtotal.toLocaleString('fr-FR')} FCFA
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Paiement */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-stone-900">Paiement</h2>

            <div className="space-y-3">
              <label className="block text-xs font-bold text-stone-700">
                Méthode de paiement <span className="text-brand-red">*</span>
              </label>

              {/* Payment Methods Pill Selectors */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedPayment(PaymentMethod.CASH)}
                  className={`py-2 px-3 rounded-xl font-bold flex items-center justify-center space-x-1.5 border transition-all ${
                    selectedPayment === PaymentMethod.CASH
                      ? 'border-brand-red text-brand-red bg-red-50/50'
                      : 'border-stone-200 text-stone-700 bg-white hover:bg-stone-50'
                  }`}
                >
                  <Wallet className="w-3.5 h-3.5" />
                  <span>Espèces</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedPayment(PaymentMethod.ORANGE_MONEY)}
                  className={`py-2 px-3 rounded-xl font-bold flex items-center justify-center space-x-1.5 border transition-all ${
                    selectedPayment === PaymentMethod.ORANGE_MONEY
                      ? 'border-brand-red text-brand-red bg-red-50/50'
                      : 'border-stone-200 text-stone-700 bg-white hover:bg-stone-50'
                  }`}
                >
                  <span>Orange Money</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedPayment(PaymentMethod.MOOV_MONEY)}
                  className={`py-2 px-3 rounded-xl font-bold flex items-center justify-center space-x-1.5 border transition-all ${
                    selectedPayment === PaymentMethod.MOOV_MONEY
                      ? 'border-brand-red text-brand-red bg-red-50/50'
                      : 'border-stone-200 text-stone-700 bg-white hover:bg-stone-50'
                  }`}
                >
                  <span>Moov Money</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedPayment(PaymentMethod.BANK)}
                  className={`py-2 px-3 rounded-xl font-bold flex items-center justify-center space-x-1.5 border transition-all ${
                    selectedPayment === PaymentMethod.BANK
                      ? 'border-brand-red text-brand-red bg-red-50/50'
                      : 'border-stone-200 text-stone-700 bg-white hover:bg-stone-50'
                  }`}
                >
                  <span>Banque</span>
                </button>
              </div>

              {/* Montant payé */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-stone-700">
                  Montant payé <span className="text-brand-red">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue={subtotal.toString()}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-brand-red"
                  />
                  <span className="absolute right-3 top-3 text-xs font-bold text-stone-400">
                    FCFA
                  </span>
                </div>
              </div>

              {/* Échéance & Reliquat info boxes */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-3">
                  <span className="text-stone-400 font-semibold block">Échéance</span>
                  <span className="font-bold text-emerald-600 text-sm">0 FCFA</span>
                </div>
                <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-3">
                  <span className="text-stone-400 font-semibold block">Reliquat</span>
                  <span className="font-bold text-emerald-600 text-sm">0 FCFA</span>
                </div>
              </div>
            </div>

            {/* Form Submit Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                className="bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-bold py-3 px-3 rounded-xl flex items-center justify-center space-x-1.5 shadow-sm"
              >
                <Bookmark className="w-4 h-4 text-stone-500" />
                <span>Enregistrer en brouillon</span>
              </button>

              <Link
                href="/sales/VTE-2451"
                className="bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold py-3 px-3 rounded-xl flex items-center justify-center space-x-1.5 shadow-md transition-all"
              >
                <Check className="w-4 h-4" />
                <span>Valider la vente</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
