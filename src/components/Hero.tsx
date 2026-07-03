/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const handleScrollToPreview = () => {
    const previewElement = document.getElementById('preview-section');
    if (previewElement) {
      previewElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-20 pb-16 px-4 max-w-6xl mx-auto overflow-hidden">
      {/* Softened, sophisticated multi-layered ambient glow background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/[0.06] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-blue-600/[0.04] blur-[130px] rounded-full pointer-events-none" />

      {/* Hero Content Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } }
        }}
        className="text-center relative z-10 flex flex-col items-center"
      >
        {/* BRAND LOGO BADGE - Luxury Minimalist Style */}
        <motion.div 
          variants={itemVariants}
          className="mb-8 animate-fade-in"
        >
          <div className="relative inline-flex items-center gap-1 px-7 py-3 rounded-full border border-white/10 bg-slate-950/80 backdrop-blur-md shadow-[0_0_40px_rgba(6,182,212,0.06)] group hover:border-cyan-500/20 transition-all duration-300">
            {/* Ambient logo flare */}
            <div className="absolute inset-0 w-full h-full rounded-full bg-cyan-500/2 blur-md group-hover:bg-cyan-500/5 transition-all duration-300 pointer-events-none" />
            <span className="font-sans font-black text-2xl md:text-3xl tracking-tighter text-white">
              MZ<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 inline-block align-middle ml-0.5 font-bold filter drop-shadow-[0_0_4px_rgba(34,211,238,0.4)]">+</span>
            </span>
          </div>
        </motion.div>

        {/* SMALL INTRO BADGE - Elegant Gray/Teal border */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center gap-2 bg-slate-950/60 border border-cyan-500/10 rounded-full px-4 py-1.5 mb-6 text-[11px] md:text-xs font-mono text-cyan-300/90 tracking-wider uppercase"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400/80 animate-pulse" />
          <span>L'ÉLITE FINANCIÈRE DE NOUVELLE GÉNÉRATION</span>
        </motion.div>

        {/* GRAND TITRE - High-End Typography */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight text-white max-w-5xl leading-[1.12] mb-6"
        >
          L'opportunité conçue pour créer les{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 filter drop-shadow-[0_0_20px_rgba(103,232,249,0.15)]">
            futurs millionnaires
          </span>{' '}
          de cette génération.
        </motion.h1>

        {/* SOUS-TITRE INSPIRANT - Softer gray colors */}
        <motion.p 
          variants={itemVariants}
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-sans"
        >
          Fusionnez avec un écosystème asymétrique de pointe combinant le savoir des décisionnaires les plus fortunés et l'intelligence algorithmique du trading de précision.
        </motion.p>

        {/* MAIN CALL TO ACTION - Luxury Gradient Button */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 relative"
        >
          <button
            onClick={handleScrollToPreview}
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-sans font-bold tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:shadow-[0_0_35px_rgba(6,182,212,0.35)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-2.5"
          >
            Voir l'aperçu
            <ArrowDown className="w-4 h-4 text-slate-950 group-hover:translate-y-0.5 transition-transform duration-300" />
          </button>
        </motion.div>

        {/* Muted luxury badge - elegant layout */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 flex items-center justify-center gap-6"
        >
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">ÉCOSYSTÈME</span>
            <span className="text-xs font-semibold text-gray-300 mt-1">100% Hermétique</span>
          </div>
          <div className="w-[1px] h-8 bg-white/5" />
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">ALGORITHME</span>
            <span className="text-xs font-semibold text-cyan-400/80 mt-1">Gains Optimisés</span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
