
"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, MapPin, History, Tag, ChevronRight, Info, Eye, EyeOff } from 'lucide-react';
import { Node, Link } from '@/data/mockGraph';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ContextualSidebarProps {
  selectedNode: Node | null;
  selectedLink: Link | null;
  isLoadingAi: boolean;
  nodeSummary: string | null;
  linkExplanation: string | null;
  onClose: () => void;
  navigationHistory?: Node[];
  onBreadcrumbClick?: (node: Node) => void;
  focusNodeId?: string | null;
  onToggleFocus?: (nodeId: string) => void;
}

export function ContextualSidebar({
  selectedNode,
  selectedLink,
  isLoadingAi,
  nodeSummary,
  linkExplanation,
  onClose,
  navigationHistory = [],
  onBreadcrumbClick,
  focusNodeId,
  onToggleFocus,
}: ContextualSidebarProps) {
  const isOpen = !!selectedNode || !!selectedLink;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.aside
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed right-0 top-16 bottom-0 w-80 md:w-96 bg-[#1a1815]/95 backdrop-blur-md border-l border-amber-600/30 z-[60] shadow-2xl flex flex-col batik-overlay"
        >
          {/* Header Area */}
          <div className="p-4 flex flex-col border-b border-amber-600/20 bg-[#1a1815]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center border border-amber-600/40">
                  <Info className="w-4 h-4 text-amber-500" />
                </div>
                <h2 className="font-headline text-lg text-amber-500 font-bold tracking-tight">
                  {selectedNode ? 'Detail Entitas' : 'Jejak Sejarah'}
                </h2>
              </div>
              <Button
                onClick={onClose}
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-amber-600/20 text-amber-500 w-8 h-8"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Breadcrumbs */}
            {navigationHistory.length > 0 && selectedNode && (
              <div className="flex flex-wrap items-center gap-1 overflow-x-auto pb-1 no-scrollbar">
                {navigationHistory.map((node, i) => (
                  <React.Fragment key={`${node.id}-${i}`}>
                    {i > 0 && <span className="text-amber-600/40 text-[10px] mx-0.5">&gt;</span>}
                    <button
                      onClick={() => onBreadcrumbClick?.(node)}
                      className={`text-[9px] font-bold uppercase tracking-wider whitespace-nowrap px-1.5 py-0.5 rounded transition-colors ${
                        selectedNode.id === node.id 
                          ? 'text-amber-500 bg-amber-500/10' 
                          : 'text-stone-500 hover:text-amber-400'
                      }`}
                    >
                      {node.name}
                    </button>
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>

          <ScrollArea className="flex-1">
            <div className="p-6">
              {selectedNode && (
                <div className="space-y-6">
                  {/* Focus Mode Toggle - Moved to top for high visibility */}
                  <div className="flex flex-col gap-2">
                    <Button 
                      onClick={() => onToggleFocus?.(selectedNode.id)}
                      variant="outline" 
                      className={`w-full h-10 text-[11px] uppercase tracking-[0.15em] border-amber-600/40 font-bold shadow-lg transition-all duration-300 ${
                        focusNodeId === selectedNode.id 
                          ? 'bg-amber-600 text-black border-amber-400 gold-glow' 
                          : 'text-amber-500 bg-amber-600/10 hover:bg-amber-600/20'
                      }`}
                    >
                      {focusNodeId === selectedNode.id ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                      {focusNodeId === selectedNode.id ? 'Lepaskan Fokus' : 'Fokuskan Ekosistem'}
                    </Button>
                    <p className="text-[9px] text-stone-500 italic text-center uppercase tracking-widest">
                      {focusNodeId === selectedNode.id ? 'Mode fokus aktif: Menampilkan koneksi terdekat' : 'Aktifkan untuk mengisolasi hubungan simpul ini'}
                    </p>
                  </div>

                  {/* Node Display */}
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border-2 border-amber-600/40 gold-glow group">
                    <img
                      src={selectedNode.image_url}
                      alt={selectedNode.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-amber-600 text-black px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest">
                        {selectedNode.group}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h1 className="text-3xl font-headline text-amber-500 leading-tight drop-shadow-md">
                      {selectedNode.name}
                    </h1>

                    <div className="flex items-center gap-4 text-[10px] text-amber-600/80 font-bold uppercase tracking-widest">
                      <span className="flex items-center gap-1">
                        <History className="w-3 h-3" /> {selectedNode.era}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {selectedNode.location}
                      </span>
                    </div>
                  </div>

                  {/* Fact Learning Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-amber-200 border-b border-amber-600/20 pb-2">
                      <BookOpen className="w-4 h-4 text-amber-500" />
                      <h3 className="font-headline text-md font-bold uppercase tracking-wider">Rangkuman Sejarah</h3>
                    </div>

                    {isLoadingAi ? (
                      <div className="space-y-3 animate-pulse">
                        <div className="h-3 bg-neutral-800 rounded w-full"></div>
                        <div className="h-3 bg-neutral-800 rounded w-5/6"></div>
                        <div className="h-3 bg-neutral-800 rounded w-4/6"></div>
                      </div>
                    ) : (
                      <p className="text-stone-300 leading-relaxed text-sm italic font-serif bg-black/20 p-4 rounded-lg border-l-2 border-amber-600/50">
                        {nodeSummary || selectedNode.description}
                      </p>
                    )}
                  </div>

                  {/* Metadata Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <div className="p-3 bg-neutral-900/50 border border-amber-600/10 rounded-lg">
                      <div className="text-[10px] text-amber-600/60 uppercase font-bold mb-1">Asal Daerah</div>
                      <div className="text-xs text-stone-200">{selectedNode.location}</div>
                    </div>
                    <div className="p-3 bg-neutral-900/50 border border-amber-600/10 rounded-lg">
                      <div className="text-[10px] text-amber-600/60 uppercase font-bold mb-1">Kategori</div>
                      <div className="text-xs text-stone-200">{selectedNode.group}</div>
                    </div>
                  </div>
                </div>
              )}

              {selectedLink && (
                <div className="space-y-6">
                  {/* Link Context Section */}
                  <div className="flex flex-col items-center gap-4 py-6 border-b border-amber-600/10">
                    <div className="flex items-center justify-center gap-3 w-full">
                      <div className="text-center px-3 py-1 bg-amber-600/10 border border-amber-600/30 rounded-lg">
                        <div className="text-[10px] text-amber-500 font-bold uppercase tracking-tighter mb-0.5">Asal</div>
                        <div className="text-xs text-white font-headline font-bold">
                          {typeof selectedLink.source === 'object' ? (selectedLink.source as any).name : selectedLink.source}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-amber-600" />
                      <div className="text-center px-3 py-1 bg-amber-600/10 border border-amber-600/30 rounded-lg">
                        <div className="text-[10px] text-amber-500 font-bold uppercase tracking-tighter mb-0.5">Tujuan</div>
                        <div className="text-xs text-white font-headline font-bold">
                          {typeof selectedLink.target === 'object' ? (selectedLink.target as any).name : selectedLink.target}
                        </div>
                      </div>
                    </div>
                    <div className="bg-red-900/20 text-red-400 border border-red-900/40 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {selectedLink.label}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-amber-200 border-b border-amber-600/20 pb-2">
                      <BookOpen className="w-4 h-4 text-amber-500" />
                      <h3 className="font-headline text-md font-bold uppercase tracking-wider">Konteks Hubungan</h3>
                    </div>

                    <div className="relative p-6 bg-[#25211b] rounded-xl border-2 border-amber-800/30 shadow-inner overflow-hidden">
                      <div className="absolute inset-0 opacity-5 pointer-events-none batik-overlay bg-repeat" />
                      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                        <BookOpen className="w-20 h-20 text-amber-500" />
                      </div>
                      
                      <div className="relative z-10 space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600/50 italic">Manuskrip Digital</h4>
                        {isLoadingAi ? (
                          <div className="space-y-3 animate-pulse">
                            <div className="h-3 bg-neutral-800/50 rounded w-full"></div>
                            <div className="h-3 bg-neutral-800/50 rounded w-5/6"></div>
                            <div className="h-3 bg-neutral-800/50 rounded w-4/6"></div>
                          </div>
                        ) : (
                          <p className="text-stone-300/90 leading-relaxed text-sm font-serif italic first-letter:text-3xl first-letter:font-bold first-letter:text-amber-500 first-letter:mr-2 first-letter:float-left">
                            {linkExplanation || selectedLink.explanation}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-amber-600/5 border border-dashed border-amber-600/20 rounded-lg">
                       <p className="text-[10px] text-amber-600/60 leading-tight">
                         *Hubungan ini dianalisis berdasarkan catatan sejarah Nusantara dan diperkaya oleh Wawasan AI NusaGraph.
                       </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
