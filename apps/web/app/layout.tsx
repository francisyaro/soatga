import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'SOATGA — Gestion commercial par langage naturel',
  description: 'Plateforme SaaS multi-tenant de gestion commerciale pilotable par voix et texte pour les commerces au Burkina Faso.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-brand-bg text-stone-900 min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>
        <footer className="bg-white border-t border-gray-200 py-4 text-center text-xs text-gray-500">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
            <p>© 2026 SOATGA — Tous droits réservés. Burkina Faso.</p>
            <p className="flex items-center space-x-2 mt-2 sm:mt-0">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Système transactionnel & RLS Sécurisé • Réseau stable</span>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
