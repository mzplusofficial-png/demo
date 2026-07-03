/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-10 px-4 mt-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo and Name */}
        <div className="flex items-center gap-2.5">
          <span className="font-sans font-black text-lg tracking-tighter text-white">
            MZ<span className="text-cyan-400 font-bold ml-0.5">+</span>
          </span>
          <span className="text-xs text-gray-600 font-mono">| Élite Financière</span>
        </div>

        {/* Protection / Confidentiality banner */}
        <div className="flex items-center gap-2 text-xs text-gray-500 font-mono bg-white/[0.02] border border-white/5 rounded-full px-4 py-1.5">
          <Shield className="w-3.5 h-3.5 text-cyan-500/80" />
          <span>Contenu hautement confidentiel réservé aux membres qualifiés</span>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-600 font-sans text-center md:text-right">
          &copy; {new Date().getFullYear()} MZ+. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
