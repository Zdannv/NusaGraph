
"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  Zap, 
  History, 
  ChevronRight, 
  MapPin, 
  Mountain,
  Flag,
  X
} from 'lucide-react';
import { Node } from '@/data/mockGraph';
import { Button } from '@/components/ui/button';
import { BatteryIndicator } from '@/components/ui/battery-indicator';
import { ScrollArea } from '@/components/ui/scroll-area';

interface NusaQuestDashboardProps {
  questTarget: Node | null;
  questCurrentNode: Node | null;
  questEnergy: number;
  questPath: Node[];
  isJournalVisible: boolean;
  onToggleJournal: () => void;
  onCloseJournal: () => void;
}

export function NusaQuestDashboard({
  questTarget,
  questCurrentNode,
  questEnergy,
  questPath,
  isJournalVisible,
  onToggleJournal,
  onCloseJournal,
}: NusaQuestDashboardProps) {
  return (
    <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Top Left: Mission Card */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-6 left-6 w-64 pointer-events-auto"
      >
        <div className="bg-[#1a1815]/90 backdrop-blur-md p-5 rounded-xl border border-amber-600/30 shadow-2xl batik-overlay relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-red-800/10 rotate-45 translate-x-8 -translate-y-8 border-b border-red-800/20" />
          
          <h2 className="font-headline text-xs text-amber-500 mb-4 flex items-center gap-2 font-bold uppercase tracking-[0.2em]">
            <Target className="w-4 h-4 fill-amber-500/20" />
            MISI EKSPLORASI
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-neutral-900 rounded-lg overflow-hidden border-2 border-amber-600/40 gold-glow shrink-0">
                <img src={questTarget?.image_url} alt={questTarget?.name} className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-amber-600 uppercase font-bold tracking-tighter mb-0.5">Target Tujuan</div>
                <div className="text-stone-100 font-headline font-bold text-sm truncate">{questTarget?.name}</div>
                <div className="flex items-center gap-1 text-[9px] text-stone-400">
                   <MapPin className="w-2 h-2 text-amber-600" />
                   {questTarget?.location}
                </div>
              </div>
            </div>
            
            <div className="pt-3 border-t border-amber-600/10">
              <p className="text-[11px] text-stone-400 leading-relaxed italic font-serif">
                "Temukan jalan rahasia yang menghubungkan pusaka ini melalui jaringan pengetahuan Nusantara."
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Middle Left: Energy Indicator */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-64 left-6 pointer-events-auto"
      >
        <div className="bg-black/60 backdrop-blur-sm p-3 rounded-xl border border-amber-600/20 shadow-xl space-y-3">
          <div className="flex items-center justify-between gap-6 px-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500/80">Energi</span>
            <span className="text-[10px] font-bold text-amber-500">{questEnergy}/5</span>
          </div>
          <BatteryIndicator energy={questEnergy} maxEnergy={5} />
        </div>
      </motion.div>

      {/* Top Center: Current Location Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <div className="bg-[#1a1815]/90 backdrop-blur-md px-6 py-2 rounded-full border border-amber-600/40 shadow-2xl flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-amber-500 gold-glow animate-pulse" />
          <div className="flex flex-col items-center">
            <span className="text-[8px] text-amber-600 font-bold uppercase tracking-[0.3em]">Lokasi Sekarang</span>
            <span className="text-md font-headline text-stone-100 font-bold tracking-wide">{questCurrentNode?.name}</span>
          </div>
          <div className="w-2 h-2 rounded-full bg-amber-500 gold-glow animate-pulse" />
        </div>
      </motion.div>

      {/* Right Side: Jurnal Perjalanan (Journey Log) */}
      <AnimatePresence>
        {isJournalVisible && (
          <motion.aside 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 bottom-0 w-72 bg-[#1a1815]/95 backdrop-blur-md border-l border-amber-600/30 pointer-events-auto z-50 flex flex-col shadow-2xl batik-overlay"
          >
            <div className="p-4 flex items-center justify-between border-b border-amber-600/20">
              <div className="flex items-center gap-2">
                <History className="w-4 h-4 text-amber-500" />
                <h2 className="font-headline text-sm text-amber-500 font-bold uppercase tracking-wider">Jurnal Perjalanan</h2>
              </div>
              <Button onClick={onCloseJournal} variant="ghost" size="icon" className="w-8 h-8 rounded-full text-amber-600">
                <X className="w-4 h-4" />
              </Button>
            </div>

            <ScrollArea className="flex-1">
              <div className="p-6 relative">
                {/* Timeline Line */}
                <div className="absolute left-9 top-8 bottom-8 w-px bg-gradient-to-b from-amber-600/40 via-amber-600/10 to-transparent" />
                
                <div className="space-y-8">
                  {questPath.map((node, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 relative"
                    >
                      <div className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center border-2 shrink-0 transition-all duration-500 ${
                        i === questPath.length - 1 
                          ? 'bg-amber-600 border-amber-400 gold-glow scale-110' 
                          : 'bg-stone-900 border-amber-600/30'
                      }`}>
                        {i === 0 ? (
                          <Mountain className={`w-3 h-3 ${i === questPath.length - 1 ? 'text-black' : 'text-amber-600/50'}`} />
                        ) : i === questPath.length - 1 ? (
                          <Zap className="w-3 h-3 text-black fill-black" />
                        ) : (
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-600/40" />
                        )}
                      </div>
                      
                      <div className="min-w-0 pt-0.5">
                        <div className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${i === questPath.length - 1 ? 'text-amber-500' : 'text-stone-500'}`}>
                          {i === 0 ? 'Titik Awal' : `Langkah ${i}`}
                        </div>
                        <div className={`text-xs font-headline font-bold truncate ${i === questPath.length - 1 ? 'text-white' : 'text-stone-300/60'}`}>
                          {node.name}
                        </div>
                        <div className="text-[9px] text-stone-500 font-medium">
                          {node.location}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {questEnergy > 0 && (
                    <div className="flex gap-4 opacity-30 italic">
                      <div className="w-6 h-6 rounded-full border border-dashed border-amber-600/40 flex items-center justify-center shrink-0">
                         <ChevronRight className="w-3 h-3 text-amber-600" />
                      </div>
                      <div className="pt-0.5">
                        <div className="text-[10px] text-stone-600">Langkah Berikutnya...</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </ScrollArea>
            
            {/* Footer: Quest Progress Stats */}
            <div className="p-4 bg-black/40 border-t border-amber-600/10 text-center">
              <div className="flex justify-around items-center">
                <div className="flex flex-col">
                   <span className="text-[8px] text-stone-500 uppercase font-bold tracking-widest">Langkah</span>
                   <span className="text-sm font-headline text-amber-500 font-bold">{questPath.length}</span>
                </div>
                <div className="h-6 w-px bg-amber-600/10" />
                <div className="flex flex-col">
                   <span className="text-[8px] text-stone-500 uppercase font-bold tracking-widest">Sisa Energi</span>
                   <span className="text-sm font-headline text-amber-500 font-bold">{questEnergy}</span>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
