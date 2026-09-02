'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Plus,
  Search,
  Package,
  AlertTriangle,
  Tag,
  Clock,
  Mic,
} from 'lucide-react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<'Toutes' | 'Céréales' | 'Épicerie' | 'Hygiène' | 'Boissons'>('Toutes');
  const [selectedProductId, setSelectedProductId] = useState('2');
  const [activeTab, setActiveTab] = useState<'Aperçu' | 'Stock' | 'Prix' | 'Alias' | 'Historique'>('Aperçu');

  const products = [
    {
      id: '1',
      name: 'Sac de riz 25 kg',
      category: 'Céréales',
      unit: 'sac',
      price: 16500,
      stock: 42,
      minAlert: 10,
      isLowStock: false,
    },
    {
      id: '2',
      name: 'Huile 5 L',
      category: 'Épicerie',
      unit: 'bidon',
      price: 6500,
      stock: 8,
      minAlert: 12,
      isLowStock: true,
    },
    {
      id: '3',
      name: 'Sucre 1 kg',
      category: 'Épicerie',
      unit: 'paquet',
      price: 800,
      stock: 120,
      minAlert: 20,
      isLowStock: false,
    },
    {
      id: '4',
      name: 'Savon Kabakourou',
      category: 'Hygiène',
      unit: 'pièce',
      price: 350,
      stock: 5,
      minAlert: 10,
      isLowStock: true,
    },
    {
      id: '5',
      name: 'Bidon d\'eau 10 L',
      category: 'Boissons',
      unit: 'bidon',
      price: 1200,
      stock: 64,
      minAlert: 15,
      isLowStock: false,
    },
  ];

  const selectedProduct = products.find((p) => p.id === selectedProductId) || products[1];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Produits</h1>
          <p className="text-sm text-stone-500 mt-0.5">5 références</p>
        </div>

        <button
          type="button"
          className="bg-brand-red hover:bg-brand-red-hover text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm flex items-center space-x-2 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Ajouter</span>
        </button>
      </div>

      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Rechercher un produit ou un alias..."
          className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-red shadow-sm"
        />
        <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
      </div>

      {/* Filter Pills */}
      <div className="flex items-center space-x-2 text-xs font-semibold overflow-x-auto pb-1">
        {(['Toutes', 'Céréales', 'Épicerie', 'Hygiène', 'Boissons'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full transition-all ${
              selectedCategory === cat
                ? 'bg-brand-red text-white shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Split Layout: Left Product List (4 cols), Right Product Details (8 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Product Cards List */}
        <div className="lg:col-span-4 space-y-3">
          {products.map((product) => {
            const isSelected = product.id === selectedProductId;
            return (
              <div
                key={product.id}
                onClick={() => setSelectedProductId(product.id)}
                className={`bg-white rounded-2xl p-4 border transition-all cursor-pointer shadow-sm flex justify-between items-center ${
                  isSelected
                    ? 'border-brand-red ring-1 ring-brand-red bg-red-50/20'
                    : 'border-stone-200/80 hover:border-stone-300'
                }`}
              >
                <div>
                  <h3 className="font-bold text-stone-900 text-sm">{product.name}</h3>
                  <span className="text-xs text-stone-400">
                    {product.category} • {product.unit}
                  </span>
                </div>

                <div className="text-right">
                  <span className="font-bold text-stone-900 text-sm block">
                    {product.price.toLocaleString('fr-FR')} FCFA
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full inline-block mt-0.5 ${
                      product.isLowStock
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {product.stock} en stock
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Selected Product Details Card */}
        <div className="lg:col-span-8 bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-5">
          {/* Product Header */}
          <div className="flex justify-between items-start border-b border-stone-100 pb-4">
            <div>
              <h2 className="text-xl font-bold text-stone-900">{selectedProduct.name}</h2>
              <span className="text-xs text-stone-500 font-medium">{selectedProduct.category}</span>
            </div>

            {selectedProduct.isLowStock && (
              <span className="px-3 py-1 bg-amber-100 text-amber-800 font-semibold text-xs rounded-full border border-amber-200">
                Stock faible
              </span>
            )}
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-stone-100 flex space-x-6 text-xs font-bold">
            {(['Aperçu', 'Stock', 'Prix', 'Alias', 'Historique'] as const).map((tab) => (
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
              <span className="text-xs text-stone-400 font-semibold block">Prix de vente</span>
              <span className="text-xl font-black text-stone-900 mt-1 block">
                {selectedProduct.price.toLocaleString('fr-FR')} FCFA
              </span>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-2xl p-4">
              <span className="text-xs text-stone-400 font-semibold block">Stock</span>
              <span className="text-xl font-black text-stone-900 mt-1 block">
                {selectedProduct.stock}
              </span>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-2xl p-4">
              <span className="text-xs text-stone-400 font-semibold block">Seuil d&apos;alerte</span>
              <span className="text-xl font-black text-stone-900 mt-1 block">
                {selectedProduct.minAlert}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
