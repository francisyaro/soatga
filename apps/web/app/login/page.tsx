'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Lock, Eye, EyeOff, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [useOtp, setUseOtp] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/voice/draft';
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6 text-center">
        {/* Red Icon Badge */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-brand-red flex items-center justify-center text-white shadow-md shadow-brand-red/20">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
          </svg>
        </div>

        {/* Heading */}
        <div>
          <h2 className="text-2xl font-bold text-stone-900">
            Connectez-vous à votre boutique
          </h2>
          <p className="mt-1 text-sm text-stone-500">
            Bienvenue ! Veuillez vous connecter pour continuer.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          {/* Identifier Input */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              Téléphone ou e-mail
            </label>
            <div className="relative rounded-xl shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                <User className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Entrez votre téléphone ou e-mail"
                className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent text-sm transition-all"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          {!useOtp && (
            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                Mot de passe
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Entrez votre mot de passe"
                  className="w-full pl-11 pr-11 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent text-sm transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-400 hover:text-stone-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          )}

          {/* Checkbox and Forgot password link */}
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center space-x-2 text-stone-600 cursor-pointer">
              <input
                type="checkbox"
                checked={useOtp}
                onChange={(e) => setUseOtp(e.target.checked)}
                className="rounded border-stone-300 text-brand-red focus:ring-brand-red"
              />
              <span>Recevoir un code OTP à la place</span>
            </label>
            <a href="#" className="font-semibold text-brand-red hover:underline">
              Mot de passe oublié ?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-brand-red hover:bg-brand-red-hover text-white font-semibold rounded-xl shadow-md transition-all transform active:scale-98 text-sm"
          >
            Se connecter
          </button>
        </form>

        <div className="border-t border-stone-100 pt-4">
          <div className="flex items-center justify-center space-x-2 text-xs font-medium text-emerald-600">
            <ShieldCheck className="w-4 h-4" />
            <span>Connexion sécurisée • Réseau stable</span>
          </div>
        </div>
      </div>
    </div>
  );
}
