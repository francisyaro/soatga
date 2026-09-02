'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  Store,
  Package,
  Users,
  CheckCircle2,
  UploadCloud,
  Plus,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(3);

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-16">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-black text-stone-900">Onboarding</h1>
        <p className="text-sm text-stone-500 mt-1">
          Configurez votre compte marchand en quelques étapes simples.
        </p>
      </div>

      {/* Stepper */}
      <div className="flex items-center justify-between bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm overflow-x-auto">
        {/* Step 1 */}
        <div className="flex items-center space-x-3 min-w-max">
          <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-stone-900 block">Commerce</span>
            <span className="text-[11px] text-stone-400">Vos informations</span>
          </div>
        </div>

        <div className="w-12 h-0.5 bg-stone-200 shrink-0"></div>

        {/* Step 2 */}
        <div className="flex items-center space-x-3 min-w-max">
          <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
            <Store className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-stone-900 block">Boutique</span>
            <span className="text-[11px] text-stone-400">Votre point de vente</span>
          </div>
        </div>

        <div className="w-12 h-0.5 bg-stone-200 shrink-0"></div>

        {/* Step 3 (Active) */}
        <div className="flex items-center space-x-3 min-w-max">
          <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-sm shadow-md shadow-brand-red/30">
            <Package className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-brand-red block">Catalogue</span>
            <span className="text-[11px] text-stone-400">Produits initiaux</span>
          </div>
        </div>

        <div className="w-12 h-0.5 bg-stone-200 shrink-0"></div>

        {/* Step 4 */}
        <div className="flex items-center space-x-3 min-w-max">
          <div className="w-10 h-10 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center font-bold text-sm">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-stone-500 block">Équipe</span>
            <span className="text-[11px] text-stone-400">Inviter des membres</span>
          </div>
        </div>

        <div className="w-12 h-0.5 bg-stone-200 shrink-0"></div>

        {/* Step 5 */}
        <div className="flex items-center space-x-3 min-w-max">
          <div className="w-10 h-10 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center font-bold text-sm">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-stone-500 block">Terminé</span>
            <span className="text-[11px] text-stone-400">Compte prêt</span>
          </div>
        </div>
      </div>

      {/* Main Form Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (6 cols): Informations Commerce & Boutique */}
        <div className="lg:col-span-6 space-y-6">
          {/* Card 1: Informations sur le commerce */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex items-center space-x-2 border-b border-stone-100 pb-3">
              <Building2 className="w-5 h-5 text-amber-600" />
              <h2 className="text-base font-bold text-stone-900">
                Informations sur le commerce
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Nom du commerce
                </label>
                <input
                  type="text"
                  defaultValue="Alimentation Kara"
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-red text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Secteur d&apos;activité
                </label>
                <select className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-red text-sm">
                  <option>Épicerie & Alimentation</option>
                  <option>Quincaillerie & Matériaux</option>
                  <option>Boutique de Vêtements</option>
                  <option>Pharmacie / Parapharmacie</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Téléphone principal
                </label>
                <div className="flex rounded-xl overflow-hidden border border-stone-200 bg-stone-50">
                  <span className="px-3 py-2.5 bg-stone-100 text-stone-600 text-xs font-bold border-r border-stone-200 flex items-center space-x-1">
                    <span>🇧🇫</span>
                    <span>+226</span>
                  </span>
                  <input
                    type="text"
                    defaultValue="70 12 34 56"
                    className="w-full px-3 py-2.5 bg-stone-50 text-stone-900 focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Devise
                </label>
                <select className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-red text-sm">
                  <option>FCFA</option>
                </select>
              </div>
            </div>
          </div>

          {/* Card 2: Informations sur la boutique */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex items-center space-x-2 border-b border-stone-100 pb-3">
              <Store className="w-5 h-5 text-amber-600" />
              <h2 className="text-base font-bold text-stone-900">Informations sur la boutique</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Nom de la boutique
                </label>
                <input
                  type="text"
                  defaultValue="Alimentation Kara - Ouaga 1200"
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-red text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Ville</label>
                <input
                  type="text"
                  defaultValue="Ouagadougou"
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-red text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Quartier / Zone
                </label>
                <input
                  type="text"
                  defaultValue="1200 Logements"
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-red text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Adresse précise (optionnel)
                </label>
                <input
                  type="text"
                  defaultValue="En face de l'école Yennenga"
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-red text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (6 cols): Catalogue & Inviter Équipe */}
        <div className="lg:col-span-6 space-y-6">
          {/* Card 3: Catalogue de produits initiaux */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex items-center space-x-2 border-b border-stone-100 pb-3">
              <Package className="w-5 h-5 text-amber-600" />
              <div>
                <h2 className="text-base font-bold text-stone-900">
                  Catalogue de produits initiaux
                </h2>
                <p className="text-xs text-stone-500">Ajoutez quelques produits pour bien démarrer.</p>
              </div>
            </div>

            {/* Drag & Drop Box */}
            <div className="border-2 border-dashed border-stone-200 rounded-2xl p-8 text-center space-y-3 bg-stone-50/50 hover:bg-stone-50 transition-all">
              <div className="w-12 h-12 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mx-auto">
                <UploadCloud className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-sm">Importez votre catalogue</h3>
                <p className="text-xs text-stone-500 mt-0.5">Glissez-déposez un fichier CSV ou Excel</p>
              </div>
              <button
                type="button"
                className="bg-white border border-stone-300 text-stone-800 text-xs font-semibold px-4 py-2 rounded-xl hover:bg-stone-50 shadow-sm"
              >
                Choisir un fichier
              </button>
              <p className="text-[10px] text-stone-400">Formats supportés: .csv, .xlsx • Taille max: 5 Mo</p>
            </div>

            <div className="relative text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-stone-200"></div>
              </div>
              <span className="relative bg-white px-3 text-xs text-stone-400 font-medium">ou</span>
            </div>

            <button
              type="button"
              className="w-full bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 py-3 rounded-xl font-semibold text-xs flex items-center justify-center space-x-1.5 shadow-sm transition-all"
            >
              <Plus className="w-4 h-4 text-brand-red" />
              <span>AJOUTER DES PRODUITS MANUELLEMENT</span>
            </button>
          </div>

          {/* Card 4: Inviter votre équipe (optionnel) */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex items-center space-x-2 border-b border-stone-100 pb-3">
              <Users className="w-5 h-5 text-amber-600" />
              <div>
                <h2 className="text-base font-bold text-stone-900">
                  Inviter votre équipe (optionnel)
                </h2>
                <p className="text-xs text-stone-500">
                  Ajoutez des membres pour vous aider à gérer votre boutique.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Email ou numéro de téléphone"
                className="flex-1 px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red"
              />
              <select className="px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red">
                <option>Vendeur</option>
                <option>Gérant</option>
                <option>Caissier</option>
              </select>
              <button
                type="button"
                className="bg-brand-red hover:bg-brand-red-hover text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-all"
              >
                Inviter
              </button>
            </div>

            <p className="text-[11px] text-stone-400">Vous pourrez inviter d&apos;autres membres plus tard.</p>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-stone-200">
        <button
          type="button"
          className="bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-sm font-semibold px-6 py-3 rounded-xl flex items-center space-x-2 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour</span>
        </button>

        <Link
          href="/voice/draft"
          className="bg-brand-red hover:bg-brand-red-hover text-white text-sm font-semibold px-8 py-3 rounded-xl flex items-center space-x-2 shadow-md transition-all transform active:scale-95"
        >
          <span>Continuer</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
