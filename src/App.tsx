/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import PlatformPreview from './components/PlatformPreview';
import AcademyView from './components/AcademyView';
import BusinessView from './components/BusinessView';
import CommunityView from './components/CommunityView';
import IntroModal from './components/IntroModal';

export default function App() {
  const [view, setView] = useState<'home' | 'academy' | 'business' | 'community'>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Scroll smoothly to preview section on the home page
    setTimeout(() => {
      const previewElement = document.getElementById('preview-section');
      if (previewElement) {
        previewElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const handleSelectAcademy = () => {
    setView('academy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBusiness = () => {
    setView('business');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCommunity = () => {
    setView('community');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Decorative cyber grid or glowing lines */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.02),transparent_60%)] pointer-events-none" />
      
      {/* Main page content layout */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <main key="home">
              {/* 1. Compte à Rebours Section (Sticky top warning bar on home view to remind members of the 150 places limit) */}
              <Countdown />

              {/* 2. Hero Section */}
              <Hero onShowPreviewClick={handleShowModal} />

              {/* Decorative Divider */}
              <div className="w-full flex justify-center py-6">
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />
              </div>

              {/* 3. Aperçu de la plateforme Section */}
              <PlatformPreview 
                onSelectAcademy={handleSelectAcademy} 
                onSelectBusiness={handleSelectBusiness} 
                onSelectCommunity={handleSelectCommunity}
              />
            </main>
          ) : view === 'academy' ? (
            <main key="academy">
              {/* Immersive high-end Academy Plateforme View */}
              <AcademyView onBack={handleBackToHome} />
            </main>
          ) : view === 'business' ? (
            <main key="business">
              {/* Immersive high-end Business Plateforme View */}
              <BusinessView onBack={handleBackToHome} />
            </main>
          ) : (
            <main key="community">
              {/* Immersive high-end Community Plateforme View */}
              <CommunityView onBack={handleBackToHome} />
            </main>
          )}
        </AnimatePresence>
      </main>

      {/* Intro pop-up with fluid entry animations */}
      <AnimatePresence>
        {isModalOpen && (
          <IntroModal isOpen={isModalOpen} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </div>
  );
}
