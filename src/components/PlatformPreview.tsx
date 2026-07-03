/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  GraduationCap, 
  Users, 
  Lock, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  PlayCircle,
  Clock
} from 'lucide-react';
import { PreviewSection } from '../types';

export default function PlatformPreview() {
  const [activeTab, setActiveTab] = useState<string>('academy');

  const sections: PreviewSection[] = [
    {
      id: 'academy',
      title: 'MZ+ Académie',
      tagline: 'L\'Ingénierie de l\'Ascension Financière',
      description: 'Découvrez les stratégies de levier modernes enseignées par des mentors de premier plan. Apprenez le e-commerce de nouvelle génération, l\'immobilier d\'élite, la tokenisation et l\'intelligence artificielle appliquée au business.',
      icon: 'GraduationCap',
      metrics: [
        { label: 'Formateurs Certifiés', value: '12+' },
        { label: 'Heures de Formation', value: '150h+' },
        { label: 'Note Moyenne', value: '4.9/5' }
      ],
      features: [
        'Masterclasses hebdomadaires en direct',
        'Études de cas réels de multi-millionnaires',
        'Ressources de code & prompts IA exclusifs',
        'Accompagnement personnalisé étape par étape'
      ],
      visualType: 'academy'
    },
    {
      id: 'trading',
      title: 'MZ+ Wealth & Algorithmes',
      tagline: 'L\'Intelligence Artificielle de Trading',
      description: 'Accédez à nos algorithmes de trading automatique de pointe et copiez les transactions d\'investisseurs chevronnés en temps réel. Suivez vos performances grâce à une interface de pointe hyper-réactive.',
      icon: 'TrendingUp',
      metrics: [
        { label: 'Performance Globale', value: '+34.2%', change: '+4.8% ce mois' },
        { label: 'Actifs Sous Algorithme', value: '7.8M €' },
        { label: 'Temps de Réponse', value: '3.4ms' }
      ],
      features: [
        'Algorithmes d\'arbitrage à haute fréquence',
        'Copy-trading en un clic de manière sécurisée',
        'Alertes de marchés instantanées sur Telegram',
        'Gestion des risques automatisée et stop-loss avancé'
      ],
      visualType: 'chart'
    },
    {
      id: 'syndicate',
      title: 'MZ+ Club Syndicate',
      tagline: 'Le Réseau Privé des Décideurs',
      description: 'Rejoignez le cercle restreint de l\'écosystème MZ+. Échangez lors de séminaires physiques privés et co-investissez sur des opportunités sélectionnées pour leur rendement asymétrique.',
      icon: 'Users',
      metrics: [
        { label: 'Membres Actifs', value: '450' },
        { label: 'Deals Réalisés', value: '14' },
        { label: 'Ticket Moyen Co-Invest', value: '25k €' }
      ],
      features: [
        'Accès VIP aux opportunités de co-investissement',
        'Salons d\'échange privés haut de gamme',
        'Rencontres physiques internationales (Dubaï, Paris)',
        'Accompagnement juridique & fiscal dédié'
      ],
      visualType: 'syndicate'
    }
  ];

  const currentSection = sections.find(s => s.id === activeTab) || sections[0];

  const renderTabIcon = (iconName: string, isActive: boolean) => {
    const className = `w-5 h-5 transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'text-gray-500 group-hover:text-cyan-300'}`;
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className={className} />;
      case 'TrendingUp': return <TrendingUp className={className} />;
      case 'Users': return <Users className={className} />;
      default: return <GraduationCap className={className} />;
    }
  };

  return (
    <section id="preview-section" className="relative py-20 px-4 max-w-7xl mx-auto flex flex-col items-center">
      {/* Softer, nuanced glowing background circles */}
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/[0.02] blur-[150px] rounded-full pointer-events-none" />

      {/* Decorative header lines */}
      <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mb-6" />

      {/* Title */}
      <div className="text-center mb-16 relative z-10 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-white mb-4">
          Aperçu de la Plateforme
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          Explorez l'interface exclusive réservée aux membres de MZ+. Une expérience conçue pour catalyser votre réussite financière.
        </p>
      </div>

      {/* Interactive Hub Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 items-stretch">
        
        {/* Navigation Sidebar Controls - Col span 4 */}
        <div className="lg:col-span-4 flex flex-col gap-2.5 justify-center">
          {sections.map((section) => {
            const isActive = activeTab === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`group w-full text-left p-4.5 rounded-xl border transition-all duration-300 flex items-start gap-4 relative overflow-hidden cursor-pointer ${
                  isActive 
                    ? 'bg-slate-900/60 border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.04)]' 
                    : 'bg-slate-950/20 border-white/[0.03] hover:border-cyan-500/10 hover:bg-slate-900/20'
                }`}
              >
                {/* Subtle side glowing line instead of raw thick bar */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 to-blue-500" />
                )}
                
                {/* Softened Icon block */}
                <div className={`p-2.5 rounded-lg border transition-all duration-300 ${
                  isActive 
                    ? 'bg-cyan-950/40 border-cyan-500/20 text-cyan-400' 
                    : 'bg-white/[0.02] border-white/5 text-gray-500 group-hover:border-cyan-500/10'
                }`}>
                  {renderTabIcon(section.icon, isActive)}
                </div>

                {/* Text Block */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`font-sans font-semibold text-sm md:text-base tracking-wide transition-colors ${
                      isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                    }`}>
                      {section.title}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 animate-pulse" />
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-1 leading-relaxed">
                    {section.tagline}
                  </p>
                </div>

                <div className="self-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-gray-500'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Interface Preview Screen - Col span 8 */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="w-full rounded-2xl border border-white/[0.05] bg-slate-950/80 p-5 md:p-7 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col h-full min-h-[460px] justify-between"
            >
              {/* Subtle card lighting border */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />
              
              {/* Fake Dashboard Header with softer tones */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 bg-white/[0.02] px-2 py-0.5 rounded border border-white/5">
                    secure_protocol://mz-plus.vip/platform
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300 bg-cyan-950/20 px-2.5 py-0.5 rounded-full border border-cyan-500/10">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
                  <span>PREVIEW ACTIF</span>
                </div>
              </div>

              {/* Central Content Split */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start flex-1 mb-5">
                
                {/* Details Section */}
                <div className="md:col-span-6 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 bg-slate-900/60 px-2.5 py-0.5 rounded border border-cyan-500/10 inline-block mb-3 font-semibold">
                      {currentSection.tagline}
                    </span>
                    <h3 className="text-lg md:text-xl font-sans font-black text-white tracking-tight mb-2">
                      {currentSection.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed mb-5">
                      {currentSection.description}
                    </p>
                  </div>

                  {/* Bullet features list */}
                  <div className="space-y-2">
                    {currentSection.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/80 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Graphics Mockups Section - highly polished */}
                <div className="md:col-span-6 bg-slate-900/40 rounded-xl border border-white/[0.03] p-4 flex flex-col justify-center h-full min-h-[230px] relative">
                  
                  {/* Visual: ACADEMY COURSE MOCK */}
                  {currentSection.visualType === 'academy' && (
                    <div className="space-y-3.5 relative z-10 w-full">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono text-gray-500 uppercase">Cours en cours</span>
                        <span className="text-[9px] font-mono text-cyan-300 bg-cyan-950/20 px-2 py-0.5 rounded border border-cyan-500/10">Semaine 1</span>
                      </div>
                      
                      <div className="p-2.5 bg-slate-950/60 rounded-lg border border-white/5 flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                          <PlayCircle className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-white truncate">01. Les leviers asymétriques</p>
                          <p className="text-[9px] text-gray-500">Par J. Harrison (Mentorat MZ+)</p>
                        </div>
                      </div>

                      <div className="p-2.5 bg-slate-950/40 rounded-lg border border-white/5 space-y-1.5">
                        <div className="flex justify-between text-[9px] font-mono text-gray-400">
                          <span>Progression</span>
                          <span>75%</span>
                        </div>
                        <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full w-3/4" />
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/5 space-y-1 text-[10px] text-gray-400">
                        <span className="text-[8px] font-mono text-gray-500 uppercase block mb-1">PROCHAINEMENT</span>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-cyan-500/40" /> IA & Business Automation</span>
                          <span className="text-[8px] font-mono text-gray-600">Verrouillé</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Visual: ALGORITHMIC TRADING CHART */}
                  {currentSection.visualType === 'chart' && (
                    <div className="space-y-3.5 relative z-10 w-full">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-[9px] font-mono text-gray-500 uppercase">Portefeuille</p>
                          <p className="text-lg font-mono font-bold text-white tracking-tight">142 849.50 €</p>
                        </div>
                        <span className="text-[10px] font-mono font-semibold text-green-400 bg-green-950/20 border border-green-500/10 px-1.5 py-0.5 rounded flex items-center gap-1">
                          +34.2%
                        </span>
                      </div>

                      {/* Sparkline Glowy Chart Vector representation */}
                      <div className="h-24 relative flex items-end">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50">
                          <defs>
                            <linearGradient id="chart-glow-soft" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#0891b2" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M 0 45 Q 15 35 25 38 T 50 20 T 75 10 T 100 5 L 100 50 L 0 50 Z"
                            fill="url(#chart-glow-soft)"
                          />
                          <path
                            d="M 0 45 Q 15 35 25 38 T 50 20 T 75 10 T 100 5"
                            fill="none"
                            stroke="#06b6d4"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <circle cx="100" cy="5" r="1.5" fill="#22d3ee" />
                        </svg>
                      </div>

                      <div className="flex items-center justify-between text-[8px] font-mono text-gray-600">
                        <span>MAI</span>
                        <span>JUIN</span>
                        <span>JUILLET</span>
                      </div>
                    </div>
                  )}

                  {/* Visual: PRIVATE SYNDICATE DEALS */}
                  {currentSection.visualType === 'syndicate' && (
                    <div className="space-y-3 relative z-10 w-full">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono text-gray-500 uppercase">Opportunités Syndiquées</span>
                        <span className="text-[9px] font-mono text-yellow-400/80 bg-yellow-950/10 px-2 py-0.5 rounded border border-yellow-500/10">
                          VIP ONLY
                        </span>
                      </div>

                      <div className="space-y-2">
                        {/* Project 1 */}
                        <div className="p-2.5 bg-slate-950/60 rounded-lg border border-white/5 space-y-1.5">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-xs font-semibold text-white">Villas • Dubaï Palm</p>
                              <p className="text-[8px] font-mono text-gray-500">Rendement : 12.4%/an</p>
                            </div>
                            <span className="text-[8px] font-mono text-cyan-400 bg-cyan-950/30 px-1.5 py-0.5 rounded border border-cyan-500/10">Immo</span>
                          </div>
                          <div className="w-full bg-white/5 h-0.5 rounded-full overflow-hidden">
                            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-[89%]" />
                          </div>
                        </div>

                        {/* Project 2 */}
                        <div className="p-2.5 bg-slate-950/60 rounded-lg border border-white/5 space-y-1.5">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-xs font-semibold text-white">Arbitrage IA (Seed Round)</p>
                              <p className="text-[8px] font-mono text-gray-500">Valo : 4.2M €</p>
                            </div>
                            <span className="text-[8px] font-mono text-cyan-400 bg-cyan-950/30 px-1.5 py-0.5 rounded border border-cyan-500/10">Venture</span>
                          </div>
                          <div className="w-full bg-white/5 h-0.5 rounded-full overflow-hidden">
                            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-[64%]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Highlight Metrics */}
              <div className="grid grid-cols-3 gap-3 border-t border-white/5 pt-4">
                {currentSection.metrics.map((metric, index) => (
                  <div key={index} className="text-center md:text-left">
                    <span className="block text-[9px] md:text-xs text-gray-500 uppercase tracking-wider font-mono">
                      {metric.label}
                    </span>
                    <div className="flex flex-col md:flex-row md:items-baseline md:gap-1.5 mt-0.5">
                      <span className="text-sm md:text-lg font-mono font-bold text-white tracking-tight">
                        {metric.value}
                      </span>
                      {metric.change && (
                        <span className="text-[8px] font-mono text-green-400/80">
                          {metric.change}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
