/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, ShieldCheck, Flame } from 'lucide-react';
import { CountdownTime } from '../types';

export default function Countdown() {
  // Target: Saturday, July 4th, 2026, at 20:00:00 GMT+1
  const targetDate = new Date(Date.UTC(2026, 6, 4, 19, 0, 0));

  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - Date.now();
      
      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isCompleted: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isCompleted: false,
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNum = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="w-full bg-slate-950/80 border-b border-cyan-500/10 backdrop-blur-md relative z-50">
      {/* Decorative subtle ambient line glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Info label & Target Date */}
        <div className="flex items-center gap-2.5 text-center md:text-left">
          <div className="hidden sm:flex p-1.5 rounded-lg bg-cyan-950/50 border border-cyan-500/20 text-cyan-400">
            <Flame className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-[11px] font-mono tracking-widest text-cyan-400/80 uppercase font-bold">
                LANCEMENT DE L'OPPORTUNITÉ MZ+
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            </div>
            <p className="text-[11px] text-gray-400 font-sans mt-0.5">
              Ouverture officielle : <span className="text-white font-medium">Samedi 4 Juillet à 20h00 (GMT+1)</span>
            </p>
          </div>
        </div>

        {/* Compact Counters */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Day */}
          <div className="flex items-center">
            <div className="bg-slate-900/90 px-2.5 py-1 rounded-lg border border-white/5 flex flex-col items-center min-w-[42px] sm:min-w-[46px]">
              <span className="text-sm sm:text-base font-mono font-bold text-gray-100 tracking-tight">
                {formatNum(timeLeft.days)}
              </span>
            </div>
            <span className="text-[10px] font-mono uppercase text-gray-500 ml-1">j</span>
          </div>

          <span className="text-gray-700 font-mono">:</span>

          {/* Hour */}
          <div className="flex items-center">
            <div className="bg-slate-900/90 px-2.5 py-1 rounded-lg border border-white/5 flex flex-col items-center min-w-[42px] sm:min-w-[46px]">
              <span className="text-sm sm:text-base font-mono font-bold text-gray-100 tracking-tight">
                {formatNum(timeLeft.hours)}
              </span>
            </div>
            <span className="text-[10px] font-mono uppercase text-gray-500 ml-1">h</span>
          </div>

          <span className="text-gray-700 font-mono">:</span>

          {/* Minute */}
          <div className="flex items-center">
            <div className="bg-slate-900/90 px-2.5 py-1 rounded-lg border border-white/5 flex flex-col items-center min-w-[42px] sm:min-w-[46px]">
              <span className="text-sm sm:text-base font-mono font-bold text-gray-100 tracking-tight">
                {formatNum(timeLeft.minutes)}
              </span>
            </div>
            <span className="text-[10px] font-mono uppercase text-gray-500 ml-1">m</span>
          </div>

          <span className="text-gray-700 font-mono">:</span>

          {/* Second */}
          <div className="flex items-center">
            <div className="bg-cyan-950/40 px-2.5 py-1 rounded-lg border border-cyan-500/25 flex flex-col items-center min-w-[42px] sm:min-w-[46px] shadow-[0_0_10px_rgba(6,182,212,0.1)]">
              <span className="text-sm sm:text-base font-mono font-bold text-cyan-400 tracking-tight animate-pulse">
                {formatNum(timeLeft.seconds)}
              </span>
            </div>
            <span className="text-[10px] font-mono uppercase text-cyan-400/80 ml-1 font-bold">s</span>
          </div>

        </div>

        {/* Live sync details / status message */}
        <div className="hidden lg:flex items-center gap-1.5 text-[10px] font-mono text-gray-500">
          <Clock className="w-3.5 h-3.5 text-gray-600" />
          <span>Synchronisé GMT+1</span>
        </div>

      </div>
    </div>
  );
}
