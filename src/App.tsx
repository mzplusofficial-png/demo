/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Countdown from './components/Countdown';
import PlatformPreview from './components/PlatformPreview';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Decorative cyber grid or glowing lines */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.03),transparent_60%)] pointer-events-none" />
      
      {/* Main page content layout */}
      <main className="relative z-10">
        {/* Compact Countdown banner at the very top */}
        <Countdown />

        {/* 1. Hero Section */}
        <Hero />

        {/* Decorative Divider */}
        <div className="w-full flex justify-center py-6">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />
        </div>

        {/* 3. Aperçu de la plateforme Section */}
        <PlatformPreview />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

