'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  User,
  Mail,
  Phone,
  Store,
  ShieldCheck,
  Check,
  Database,
  Save,
  Lock,
  LogOut,
  Key,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function ProfilePage() {
  const { user, initials, updateProfile, updatePassword, logout, activeShop } = useAuth();

  const [fullName, setFullName] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [shopName, setShopName] = useState(user.shopName);

  // Change Password fields
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passError, setPassError] = useState<string | null>(null);
  const [passSuccess, setPassSuccess] = useState(false);
  const [profileSuccess, setProfileSuccess] = useState(false);

  useEffect(() => {
    setFullName(user.fullName);
    setEmail(user.email);
    setPhone(user.phone);
    setShopName(user.shopName);
  }, [user]);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      fullName,
      email,
      phone,
      shopName,
    });
    setProfileSuccess(true);
    setTimeout(() => setProfileSuccess(false), 4000);
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPassError(null);
    setPassSuccess(false);

    if (newPassword.length < 6) {
      setPassError('Le nouveau mot de passe doit contenir au moins 6 caractères.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setPassError('Les deux nouveaux mots de passe ne correspondent pas.');
      return;
    }

    await updatePassword(currentPassword, newPassword);
    setPassSuccess(true);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setPassSuccess(false), 4000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-2xl bg-stone-900 text-white font-black text-xl flex items-center justify-center shadow-md">
            {initials}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-stone-900">{user.fullName}</h1>
            <p className="text-xs text-stone-500">{user.role} • {activeShop}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-3.5 py-2 rounded-xl flex items-center space-x-2">
            <Database className="w-4 h-4 text-emerald-600" />
            <span>PostgreSQL Connecté</span>
          </div>

          <button
            type="button"
            onClick={logout}
            className="bg-white hover:bg-stone-50 border border-stone-200 text-red-600 text-xs font-bold px-3.5 py-2 rounded-xl flex items-center space-x-1.5 shadow-xs transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span>Se déconnecter</span>
          </button>
        </div>
      </div>

      {/* Success Alert Profile */}
      {profileSuccess && (
        <div className="bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-2xl p-4 text-xs font-bold flex items-center space-x-2 shadow-sm animate-in fade-in">
          <Check className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>
            Profil mis à jour ! Votre nom et vos initiales (<strong>{initials}</strong>) ont été enregistrés et synchronisés dans la base de données.
          </span>
        </div>
      )}

      {/* Success Alert Password */}
      {passSuccess && (
        <div className="bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-2xl p-4 text-xs font-bold flex items-center space-x-2 shadow-sm animate-in fade-in">
          <Check className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Votre mot de passe a été mis à jour avec succès dans PostgreSQL !</span>
        </div>
      )}

      {/* Main Profile Form Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-6">
        <form onSubmit={handleSaveProfile} className="space-y-6">
          {/* User Info Section */}
          <div className="space-y-4">
            <h2 className="text-base font-bold text-stone-900 border-b border-stone-100 pb-3 flex items-center space-x-2">
              <User className="w-4 h-4 text-brand-red" />
              <span>Informations Personnelles du Commerçant</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Nom complet</label>
                <div className="relative">
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 font-semibold text-sm focus:ring-2 focus:ring-brand-red focus:outline-none"
                    required
                  />
                  <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Adresse E-mail</label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 font-semibold text-sm focus:ring-2 focus:ring-brand-red focus:outline-none"
                    required
                  />
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Numéro de Téléphone</label>
                <div className="relative">
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 font-semibold text-sm focus:ring-2 focus:ring-brand-red focus:outline-none"
                    required
                  />
                  <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Point de Vente Principal</label>
                <div className="relative">
                  <input
                    type="text"
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 font-semibold text-sm focus:ring-2 focus:ring-brand-red focus:outline-none"
                    required
                  />
                  <Store className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                </div>
              </div>
            </div>
          </div>

          {/* Database Verification Status */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
            <div className="flex items-center justify-between font-bold text-stone-900">
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Connexion Base de Données</span>
              </span>
              <span className="text-emerald-700 font-mono">soatga_db (PostgreSQL Local)</span>
            </div>
            <p className="text-stone-500">
              La modification de votre nom met à jour les initiales (<strong>{initials}</strong>) et le profil utilisateur enregistrés dans la base de données.
            </p>
          </div>

          {/* Submit Profile CTA */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md flex items-center space-x-2 transition-all transform active:scale-95 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Enregistrer le Profil</span>
            </button>
          </div>
        </form>
      </div>

      {/* Change Password Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-6">
        <form onSubmit={handleChangePassword} className="space-y-5">
          <h2 className="text-base font-bold text-stone-900 border-b border-stone-100 pb-3 flex items-center space-x-2">
            <Key className="w-4 h-4 text-amber-600" />
            <span>Sécurité & Changement de Mot de Passe</span>
          </h2>

          {passError && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 text-xs font-bold">
              {passError}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Mot de passe actuel</label>
              <div className="relative">
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm focus:ring-2 focus:ring-brand-red focus:outline-none"
                  required
                />
                <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Nouveau mot de passe</label>
              <div className="relative">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm focus:ring-2 focus:ring-brand-red focus:outline-none"
                  required
                />
                <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Confirmer le nouveau</label>
              <div className="relative">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm focus:ring-2 focus:ring-brand-red focus:outline-none"
                  required
                />
                <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md flex items-center space-x-2 transition-all transform active:scale-95 cursor-pointer"
            >
              <Lock className="w-4 h-4" />
              <span>Changer le Mot de Passe</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
