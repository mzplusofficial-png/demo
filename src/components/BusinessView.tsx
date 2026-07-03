/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  X, 
  Lock, 
  Flame, 
  ShieldCheck,
  Zap
} from 'lucide-react';

interface BusinessViewProps {
  onBack: () => void;
}

export default function BusinessView({ onBack }: BusinessViewProps) {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [activeOption, setActiveOption] = useState<{
    id: number;
    title: string;
    subtitle: string;
    emoji: string;
    shortDescription: string;
    details: string[];
  } | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeModal(true);
    }, 2500); // Elegant delay allowing the dashboard elements to load smoothly first
    return () => clearTimeout(timer);
  }, []);

  const businessOptions = [
    {
      id: 1,
      title: "Affiliation d'Élite",
      subtitle: "Effet de Levier Relationnel",
      emoji: "🔗",
      shortDescription: "Génère des revenus en recommandant les opportunités MZ+",
      details: [
        "Plan de commissionnement direct et indirect sur plusieurs niveaux.",
        "Suivi en temps réel de vos affiliés et commissions via un tableau de bord chiffré.",
        "Ressources marketing premium et tunnels de conversion haute performance fournis gratuitement."
      ]
    },
    {
      id: 2,
      title: "Programme de récompenses",
      subtitle: "Rente & Partage de Valeur",
      emoji: "🏆",
      shortDescription: "Sois récompensé selon ton activité et ton engagement",
      details: [
        "Indexation directe sur la croissance et le chiffre d'affaires global de l'écosystème MZ+.",
        "Versement automatisé chaque début de mois en stablecoins sécurisés.",
        "Possibilité de passer des grades fondateurs pour multiplier vos coefficients de rémunération."
      ]
    },
    {
      id: 3,
      title: "Solde de tes Gains",
      subtitle: "Suivi des Commissions & Retraits",
      emoji: "💰",
      shortDescription: "Suis tes gains accumulés et planifie tes retraits sécurisés",
      details: [
        "Solde disponible mis à jour en temps réel à chaque transaction d'affiliation réussie.",
        "Retrait minimal flexible dès $50 USD directement vers vos portefeuilles crypto de choix.",
        "Historique chiffré complet de toutes vos entrées de fonds d'affaires pour une transparence totale."
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen py-12 px-4 relative overflow-hidden bg-slate-950 text-white selection:bg-cyan-500 selection:text-black">
      {/* Immersive cybernetic deep navy grid & light glow background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.015)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-900/[0.07] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/[0.05] blur-[120px] rounded-full pointer-events-none" />

      {/* Top dashboard mini header */}
      <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center gap-4 mb-14 border-b border-white/5 pb-6 relative z-10">
        {/* Elegant Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="group inline-flex items-center gap-2.5 text-xs font-mono text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
          <span>RETOUR AU RAMP DE LANCEMENT</span>
        </motion.button>

        {/* Real-time Pro Dashboard Status Tags */}
        <div className="flex items-center gap-4 text-[10px] font-mono text-gray-500">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-950/20 border border-cyan-500/10">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400/90">PILOTE : PRÊT À L'ACTION</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.02] border border-white/5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>SÉCURISÉ AES-256</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* High-Impact "Action" Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Business Badge */}
            <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-950 to-blue-950 border border-cyan-500/35 rounded-full px-4 py-1.5 mb-5 text-[10px] font-mono text-cyan-400 font-black tracking-widest uppercase shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <Zap className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
              <span>MZ+ BUSINESS TERMINAL (150 PLACES)</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight mb-4 leading-none uppercase">
              💼 <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400">FAIS LE PREMIER PAS</span>
            </h1>

            <div className="bg-cyan-950/20 border border-cyan-500/10 px-5 py-2.5 rounded-xl mb-4 shadow-[0_0_30px_rgba(6,182,212,0.03)] inline-block">
              <p className="text-xs sm:text-sm font-mono tracking-widest text-cyan-400 uppercase font-black">
                💡 ICI, ON NE REGARDE PAS DES COURS, ON AGIT !
              </p>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm max-w-lg font-light leading-relaxed mt-2">
              Clique sur l'un des cercles horizontaux pour afficher les détails du programme et sécuriser ton droit d'accès.
            </p>
          </motion.div>
        </div>

        {/* Dynamic Horizontal Small Minimal Circles Row */}
        <div className="flex flex-row flex-wrap items-start justify-center gap-6 sm:gap-10 py-10">
          
          {businessOptions.map((option, index) => {
            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15, type: 'spring', damping: 20 }}
                onClick={() => setActiveOption(option)}
                className="group flex flex-col items-center cursor-pointer select-none"
              >
                {/* Small circular container representer by an emoji */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center relative transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] shadow-lg">
                  {/* Decorative rotating dashed border on hover */}
                  <div className="absolute inset-1 rounded-full border border-dashed border-cyan-500/[0.08] group-hover:border-cyan-400/30 transition-colors pointer-events-none" />
                  
                  {/* Glowing halo in hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  {/* Micro padlock indicator */}
                  <div className="absolute -top-1.5 -right-1.5 bg-slate-950 border border-red-500/30 text-red-400 w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-mono font-bold shadow-md">
                    <Lock className="w-2.5 h-2.5" />
                  </div>

                  {/* Large high-impact EMOJI representing the system */}
                  <span className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-110">
                    {option.emoji}
                  </span>
                </div>

                {/* Minimalist aligned details */}
                <div className="mt-4 text-center max-w-[160px] sm:max-w-[200px]">
                  <h3 className="text-xs font-mono font-extrabold text-cyan-400 uppercase tracking-wider mb-1">
                    {option.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-400 font-light leading-snug">
                    {option.shortDescription}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Dashboard visual stats decoration below circles */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto py-6 border-t border-white/5 text-center font-mono">
          <div className="p-3 bg-white/[0.01] rounded-xl border border-white/5">
            <div className="text-[10px] text-gray-500 mb-1">PROGRAMME</div>
            <div className="text-xs font-bold text-white">MZ+ FONDATION</div>
          </div>
          <div className="p-3 bg-white/[0.01] rounded-xl border border-white/5">
            <div className="text-[10px] text-gray-500 mb-1">MÉTHODES DE RETRAIT</div>
            <div className="text-xs font-bold text-cyan-400">CRYPTO STABLECOINS</div>
          </div>
          <div className="p-3 bg-white/[0.01] rounded-xl border border-white/5">
            <div className="text-[10px] text-gray-500 mb-1">PLACES RESTANTES</div>
            <div className="text-xs font-bold text-red-400">150 MAXIMUM</div>
          </div>
          <div className="p-3 bg-white/[0.01] rounded-xl border border-white/5">
            <div className="text-[10px] text-gray-500 mb-1">COMMISSIONS RECURRENTES</div>
            <div className="text-xs font-bold text-white">ACTIVABLES</div>
          </div>
        </div>

        {/* Disclaimer / Footnote */}
        <div className="text-center mt-8 max-w-md mx-auto py-4">
          <p className="text-[11px] text-gray-500 font-sans tracking-wide leading-relaxed font-light">
            ✨ Tous vos leviers de gains et outils de tracking affiliés s'initialiseront une fois le lancement officiel activé.
          </p>
        </div>

      </div>

      {/* High-End Immersive "Not Started Yet" Informative Modal Overlay */}
      <AnimatePresence>
        {activeOption && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            {/* Backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/92 backdrop-blur-md"
              onClick={() => setActiveOption(null)}
            />

            {/* Neuromarketing Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-slate-950 border border-cyan-500/25 rounded-2xl p-6 md:p-8 text-center shadow-[0_0_50px_rgba(6,182,212,0.25)] z-10 flex flex-col overflow-hidden"
            >
              {/* Subtle light lines */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-cyan-500/5 blur-[50px] rounded-full pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setActiveOption(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Icon / status indicator */}
              <div className="mx-auto mb-5 w-12 h-12 rounded-full bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                {activeOption.emoji}
              </div>

              {/* Big Expectation Title */}
              <h3 className="text-xl md:text-2xl font-sans font-black text-white tracking-tight leading-tight mb-2">
                🔒 Accès réservé aux membres MZ+
              </h3>
              
              <p className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-black mb-4">
                💎 ACTIVER : {activeOption.title}
              </p>

              {/* High desire neuromarketing text */}
              <div className="space-y-4 text-gray-300 text-xs md:text-sm leading-relaxed mb-6 text-left font-light">
                <p className="font-normal text-gray-200 text-center">
                  Le programme <strong className="text-cyan-400 font-extrabold">{activeOption.title}</strong> sera accessible immédiatement lors de votre intégration post-lancement.
                </p>
                
                {/* List of high-end details */}
                <div className="space-y-2 py-2 border-y border-white/5 my-4">
                  {activeOption.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex gap-2.5 items-start text-xs text-gray-300">
                      <span className="text-cyan-400 text-xs mt-0.5">✦</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/10 flex items-start gap-2.5 text-cyan-300 font-sans font-normal">
                  <span className="text-sm shrink-0">⚠️</span>
                  <span>
                    Les places d'accès prioritaires sont limitées à <strong className="text-white font-black underline decoration-cyan-500/50">150 membres</strong> afin de garantir un effet de levier optimal.
                  </span>
                </div>

                <p className="text-gray-400 text-center text-xs">
                  Si tu souhaites activer ces opportunités d'affaires exclusives, tu dois impérativement réserver ta place parmi les <strong className="text-cyan-400 font-extrabold">150 premiers membres</strong>.
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  setActiveOption(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-sans font-black tracking-wide shadow-lg hover:scale-[1.01] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 text-xs"
              >
                <span>🚀 Réserver ma place parmi les 150</span>
              </button>
            </motion.div>
          </div>
        )}

        {/* Immersive first-time welcome popup - High emotional impact neuromarketing greeting */}
        {showWelcomeModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
              onClick={() => setShowWelcomeModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 28, stiffness: 150 }}
              className="relative w-full max-w-lg bg-slate-950/95 border border-cyan-500/25 rounded-2xl p-6 md:p-8 text-center shadow-[0_0_60px_rgba(6,182,212,0.2)] z-10 overflow-hidden"
            >
              {/* Decorative premium elements */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/[0.03] blur-[70px] rounded-full pointer-events-none" />

              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-cyan-950/60 border border-cyan-500/35 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.15)] animate-pulse">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>

              <h2 className="text-[9px] font-mono tracking-[0.2em] text-cyan-400 uppercase font-bold mb-3">
                💼 MZ+ BUSINESS HUB
              </h2>

              <p className="text-lg sm:text-xl md:text-2xl font-sans font-black text-white leading-snug tracking-tight mb-6">
                "C’est ici que vous allez appliquer toutes les stratégies et méthodes que nous allons vous fournir afin de générer vos revenus."
              </p>

              <button
                onClick={() => setShowWelcomeModal(false)}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-sans font-black tracking-wider text-xs shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:scale-[1.01] active:scale-95 transition-all duration-300 cursor-pointer"
              >
                ACCÉDER AUX OPPORTUNITÉS BUSINESS
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
