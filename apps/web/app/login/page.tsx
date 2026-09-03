'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { User, Lock, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [useOtp, setUseOtp] = useState(false);
  const [identifier, setIdentifier] = useState('francisyaro@soatga.bf');
  const [password, setPassword] = useState('••••••••');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(identifier, password);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-sm border border-stone-200/80 space-y-6 text-center">
        {/* Official Brand Logo Icon */}
        <div className="mx-auto w-16 h-16 relative flex items-center justify-center">
          <Image
            src="/icon.png"
            alt="SOATGA Icon"
            width={64}
            height={64}
            className="object-contain"
            priority
          />
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
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              Téléphone ou e-mail
            </label>
            <div className="relative rounded-xl shadow-xs">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                <User className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Entrez votre téléphone ou e-mail"
                className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          {!useOtp && (
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Mot de passe
              </label>
              <div className="relative rounded-xl shadow-xs">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Entrez votre mot de passe"
                  className="w-full pl-11 pr-11 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
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
          <div className="flex items-center justify-between text-xs font-semibold">
            <label className="flex items-center space-x-2 text-stone-600 cursor-pointer">
              <input
                type="checkbox"
                checked={useOtp}
                onChange={(e) => setUseOtp(e.target.checked)}
                className="rounded border-stone-300 text-brand-red focus:ring-brand-red"
              />
              <span>Recevoir un code OTP à la place</span>
            </label>
            <a href="#" className="font-bold text-brand-red hover:underline">
              Mot de passe oublié ?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-brand-red hover:bg-brand-red-hover text-white font-bold rounded-xl shadow-md transition-all transform active:scale-98 text-sm cursor-pointer"
          >
            Se connecter
          </button>
        </form>

        <div className="border-t border-stone-100 pt-4">
          <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-emerald-600">
            <ShieldCheck className="w-4 h-4" />
            <span>Connexion sécurisée • Réseau stable</span>
          </div>
        </div>
      </div>
    </div>
  );
}
