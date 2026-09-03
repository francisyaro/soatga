import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { BottomNav } from '@/components/BottomNav';
import { AuthProvider } from '@/context/AuthContext';

export const metadata: Metadata = {
  title: 'SOATGA — Gestion commerciale par langage naturel',
  description:
    'Plateforme SaaS multi-tenant de gestion commerciale pilotable par voix et texte pour les commerces au Burkina Faso.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'SOATGA',
  },
};

export const viewport: Viewport = {
  themeColor: '#d9381e',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-brand-bg text-stone-900 min-h-screen flex flex-col antialiased pb-16 lg:pb-0">
        <AuthProvider>
          <Navbar />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </main>
          <BottomNav />
          <footer className="bg-white border-t border-stone-200 py-4 text-center text-xs text-stone-500 hidden lg:block">
            <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
              <p>© 2026 SOATGA — Tous droits réservés. Burkina Faso.</p>
              <p className="flex items-center space-x-2 mt-2 sm:mt-0">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Système transactionnel & RLS Sécurisé • Réseau stable</span>
              </p>
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
