'use client';

import React from 'react';
import Link from 'next/link';
import {
  Check,
  CheckCircle2,
  Pencil,
  X,
  ArrowLeft,
  Lock,
  User,
  Package,
  Hash,
  Tag,
  Calculator,
  CreditCard,
  Calendar,
  Layers,
  Wallet,
} from 'lucide-react';

export default function VoiceDraftPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Top Breadcrumb Back */}
      <div>
        <Link
          href="/voice"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-stone-500 hover:text-stone-800 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Revenir à SOATGA Voice</span>
        </Link>
      </div>

      {/* Header Title */}
      <div>
        <h1 className="text-2xl font-bold text-stone-900">Brouillon transactionnel</h1>
        <p className="text-sm text-stone-500 mt-0.5">
          Vérifiez et confirmez les informations extraites par SOATGA
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Audio Transcription Card */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-stone-700 font-semibold text-sm">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                <span>Transcription (SOATGA Voice)</span>
              </div>
              <span className="text-xs font-medium text-stone-400">14:32</span>
            </div>

            <div className="bg-stone-50 rounded-xl p-4 border border-stone-100 text-stone-800 italic text-sm leading-relaxed">
              « J&apos;ai vendu dix sacs de ciment à Abdou à 6 500 francs. Il a payé 40 000 francs par Orange Money et paiera le reste vendredi. »
            </div>
          </div>

          {/* Extracted Information Card */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-stone-900 border-b border-stone-100 pb-3">
              Informations extraites
            </h2>

            <div className="space-y-3 text-sm">
              {/* Row 1: Client */}
              <div className="flex items-center justify-between py-2 border-b border-stone-50">
                <div className="flex items-center space-x-3 text-stone-600">
                  <User className="w-4 h-4 text-stone-400" />
                  <span className="font-medium text-stone-500">Client</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-stone-900">Abdou Ouédraogo</span>
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                    <Check className="w-3 h-3" />
                    <span>Client identifié</span>
                  </span>
                </div>
              </div>

              {/* Row 2: Produit */}
              <div className="flex items-center justify-between py-2 border-b border-stone-50">
                <div className="flex items-center space-x-3 text-stone-600">
                  <Package className="w-4 h-4 text-stone-400" />
                  <span className="font-medium text-stone-500">Produit</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-stone-900">Ciment CIMFASO 50 kg</span>
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                    <Check className="w-3 h-3" />
                    <span>Produit reconnu</span>
                  </span>
                </div>
              </div>

              {/* Row 3: Quantité */}
              <div className="flex items-center justify-between py-2 border-b border-stone-50">
                <div className="flex items-center space-x-3 text-stone-600">
                  <Hash className="w-4 h-4 text-stone-400" />
                  <span className="font-medium text-stone-500">Quantité</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-stone-900">10 sacs</span>
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                    <Check className="w-3 h-3" />
                    <span>Quantité valide</span>
                  </span>
                </div>
              </div>

              {/* Row 4: Prix unitaire */}
              <div className="flex items-center justify-between py-2 border-b border-stone-50">
                <div className="flex items-center space-x-3 text-stone-600">
                  <Tag className="w-4 h-4 text-stone-400" />
                  <span className="font-medium text-stone-500">Prix unitaire</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-stone-900">6 500 FCFA</span>
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                    <Check className="w-3 h-3" />
                    <span>Prix cohérent</span>
                  </span>
                </div>
              </div>

              {/* Row 5: Total */}
              <div className="flex items-center justify-between py-2 border-b border-stone-50">
                <div className="flex items-center space-x-3 text-stone-600">
                  <Calculator className="w-4 h-4 text-stone-400" />
                  <span className="font-medium text-stone-500">Total</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-stone-900">65 000 FCFA</span>
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                    <Check className="w-3 h-3" />
                    <span>Calcul correct</span>
                  </span>
                </div>
              </div>

              {/* Row 6: Paiement */}
              <div className="flex items-center justify-between py-2 border-b border-stone-50">
                <div className="flex items-center space-x-3 text-stone-600">
                  <CreditCard className="w-4 h-4 text-stone-400" />
                  <span className="font-medium text-stone-500">Paiement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-stone-900">40 000 FCFA</span>
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                    <Check className="w-3 h-3" />
                    <span>Paiement détecté</span>
                  </span>
                </div>
              </div>

              {/* Row 7: Mode de paiement */}
              <div className="flex items-center justify-between py-2 border-b border-stone-50">
                <div className="flex items-center space-x-3 text-stone-600">
                  <Wallet className="w-4 h-4 text-stone-400" />
                  <span className="font-medium text-stone-500">Mode de paiement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-amber-600">Orange Money</span>
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                    <Check className="w-3 h-3" />
                    <span>Mode reconnu</span>
                  </span>
                </div>
              </div>

              {/* Row 8: Reliquat */}
              <div className="flex items-center justify-between py-2 border-b border-stone-50">
                <div className="flex items-center space-x-3 text-stone-600">
                  <Calculator className="w-4 h-4 text-stone-400" />
                  <span className="font-medium text-stone-500">Reliquat</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-stone-900">25 000 FCFA</span>
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                    <Check className="w-3 h-3" />
                    <span>Calcul correct</span>
                  </span>
                </div>
              </div>

              {/* Row 9: Échéance */}
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3 text-stone-600">
                  <Calendar className="w-4 h-4 text-stone-400" />
                  <span className="font-medium text-stone-500">Échéance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-stone-900">Vendredi</span>
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                    <Check className="w-3 h-3" />
                    <span>Échéance détectée</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Impact sur votre activité Card */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-stone-900 border-b border-stone-100 pb-3">
              Impact sur votre activité
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {/* Stock Impact Box */}
              <div className="bg-red-50 border border-red-100 rounded-xl p-3.5 space-y-1">
                <span className="text-xs text-stone-500 font-medium block">
                  Stock (Ciment CIMFASO 50 kg)
                </span>
                <span className="text-xl font-bold text-brand-red block">-10 sacs</span>
                <span className="text-[11px] text-stone-500 block">Nouveau stock estimé: 32 sacs</span>
              </div>

              {/* Caisse Impact Box */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3.5 space-y-1">
                <span className="text-xs text-stone-500 font-medium block">Caisse</span>
                <span className="text-xl font-bold text-emerald-600 block">+40 000 FCFA</span>
                <span className="text-[11px] text-stone-500 block">
                  Nouveau solde estimé: 358 700 FCFA
                </span>
              </div>
            </div>
          </div>

          {/* Indicateurs de confiance Card */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-stone-900 border-b border-stone-100 pb-3">
              Indicateurs de confiance
            </h2>

            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900 block">Prix cohérent</span>
                  <span className="text-stone-500">
                    Le prix unitaire (6 500 FCFA) correspond à la référence du produit.
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900 block">Client identifié</span>
                  <span className="text-stone-500">
                    Le client Abdou Ouédraogo existe dans votre base.
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900 block">Aucune anomalie détectée</span>
                  <span className="text-stone-500">
                    Les informations semblent complètes et cohérentes.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Card: Que souhaitez-vous faire ? */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-stone-900">Que souhaitez-vous faire ?</h2>

            <div className="grid grid-cols-3 gap-3">
              {/* Confirmer */}
              <Link
                href="/sales/VTE-2451"
                className="bg-brand-red hover:bg-brand-red-hover text-white py-3 px-3 rounded-xl font-semibold text-xs flex flex-col items-center justify-center space-y-1 shadow-sm transition-all transform active:scale-95"
              >
                <Check className="w-4 h-4" />
                <span>Confirmer</span>
                <span className="text-[9px] opacity-80 font-normal">Enregistrer la vente</span>
              </Link>

              {/* Corriger */}
              <button
                type="button"
                className="bg-amber-50 hover:bg-amber-100 text-stone-800 border border-amber-200/60 py-3 px-3 rounded-xl font-semibold text-xs flex flex-col items-center justify-center space-y-1 transition-all"
              >
                <Pencil className="w-4 h-4 text-stone-700" />
                <span>Corriger</span>
                <span className="text-[9px] text-stone-500 font-normal">Modifier les infos</span>
              </button>

              {/* Annuler */}
              <button
                type="button"
                className="bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 py-3 px-3 rounded-xl font-semibold text-xs flex flex-col items-center justify-center space-y-1 transition-all"
              >
                <X className="w-4 h-4 text-stone-500" />
                <span>Annuler</span>
                <span className="text-[9px] text-stone-400 font-normal">Abandonner brouillon</span>
              </button>
            </div>

            <div className="pt-2 text-center">
              <span className="text-[11px] text-stone-400 inline-flex items-center space-x-1">
                <Lock className="w-3 h-3" />
                <span>Aucune donnée ne sera enregistrée sans votre confirmation.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
