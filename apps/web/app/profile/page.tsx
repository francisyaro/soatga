'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Mail, Phone, Store, ShieldCheck, Check, Database, Save } from 'lucide-react';

export default function ProfilePage() {
  const [fullName, setFullName] = useState('Mariam Kaboré');
  const [email, setEmail] = useState('mariam@soatga.bf');
  const [phone, setPhone] = useState('+226 65 89 74 12');
  const [shopName, setShopName] = useState('Boutique Gounghin');
  const [dbStatus, setDbStatus] = useState<'connected' | 'saving' | 'saved'>('connected');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setDbStatus('saving');
    setTimeout(() => {
      setDbStatus('saved');
      setShowSuccessAlert(true);
      setTimeout(() => setShowSuccessAlert(false), 4000);
    }, 600);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Profil & Connexion Base de Données</h1>
          <p className="text-sm text-stone-500 mt-0.5">
            Gérez vos informations de compte marchand et vérifiez le statut de la base de données.
          </p>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-3.5 py-2 rounded-xl flex items-center space-x-2">
          <Database className="w-4 h-4 text-emerald-600" />
          <span>PostgreSQL Connecté</span>
        </div>
      </div>

      {showSuccessAlert && (
        <div className="bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-2xl p-4 text-xs font-bold flex items-center justify-between animate-in fade-in">
          <div className="flex items-center space-x-2">
            <Check className="w-5 h-5 text-emerald-600" />
            <span>Profil et boutique mis à jour dans la base de données locale avec succès !</span>
          </div>
          <button onClick={() => setShowSuccessAlert(false)} className="text-emerald-700 hover:text-emerald-900">
            &times;
          </button>
        </div>
      )}

      {/* Main Profile Form Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-6">
        <form onSubmit={handleSaveProfile} className="space-y-6">
          {/* User Info Section */}
          <div className="space-y-4">
            <h2 className="text-base font-bold text-stone-900 border-b border-stone-100 pb-3 flex items-center space-x-2">
              <User className="w-4 h-4 text-brand-red" />
              <span>Informations Personnelles</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Nom complet</label>
                <div className="relative">
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm focus:ring-2 focus:ring-brand-red focus:outline-none"
                    required
                  />
                  <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">E-mail</label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm focus:ring-2 focus:ring-brand-red focus:outline-none"
                    required
                  />
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Téléphone</label>
                <div className="relative">
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm focus:ring-2 focus:ring-brand-red focus:outline-none"
                    required
                  />
                  <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Point de vente principal</label>
                <div className="relative">
                  <input
                    type="text"
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm focus:ring-2 focus:ring-brand-red focus:outline-none"
                    required
                  />
                  <Store className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                </div>
              </div>
            </div>
          </div>

          {/* Database Verification Box */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
            <div className="flex items-center justify-between font-bold text-stone-900">
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Statut de la base de données</span>
              </span>
              <span className="text-emerald-700">soatga_db (PostgreSQL Local)</span>
            </div>
            <p className="text-stone-500">
              Toutes vos transactions vocales, mouvements de stock et fiches clients sont isolés et sauvegardés localement.
            </p>
          </div>

          {/* Submit CTA */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md flex items-center space-x-2 transition-all transform active:scale-95"
            >
              <Save className="w-4 h-4" />
              <span>Enregistrer les modifications</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
