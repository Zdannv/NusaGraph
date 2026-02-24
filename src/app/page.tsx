
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Settings, 
  Map, 
  Gamepad2, 
  History, 
  MapPin,
  Mountain,
  Zap,
  BookOpen,
  X,
  Target
} from 'lucide-react';

import { GraphView } from '@/components/GraphView';
import { mockNodes, mockLinks, Node, Link } from '@/data/mockGraph';
import { BatteryIndicator } from '@/components/ui/battery-indicator';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { summarizeNode } from '@/ai/flows/summarize-node';
import { explainRelationship } from '@/ai/flows/explain-relationship';

type AppMode = 'exploration' | 'challenge';

export default function NusaGraph() {
  const [mode, setMode] = useState<AppMode>('exploration');
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [selectedLink, setSelectedLink] = useState<Link | null>(null);
  const [nodeSummary, setNodeSummary] = useState<string | null>(null);
  const [linkExplanation, setLinkExplanation] = useState<string | null>(null);
  const [isLoadingAi, setIsLoadingAi] = useState(false);

  // Quest State
  const [questEnergy, setQuestEnergy] = useState(5);
  const [questTarget, setQuestTarget] = useState<Node | null>(null);
  const [questCurrentNode, setQuestCurrentNode] = useState<Node | null>(null);
  const [questPath, setQuestPath] = useState<Node[]>([]);
  const [visibleNodes, setVisibleNodes] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (mode === 'challenge') {
      startNewQuest();
    } else {
      setVisibleNodes(new Set());
      setSelectedNode(null);
      setSelectedLink(null);
      setQuestPath([]);
    }
  }, [mode]);

  const startNewQuest = () => {
    const start = mockNodes[Math.floor(Math.random() * mockNodes.length)];
    let target = mockNodes[Math.floor(Math.random() * mockNodes.length)];
    while (target.id === start.id) {
      target = mockNodes[Math.floor(Math.random() * mockNodes.length)];
    }
    
    setQuestCurrentNode(start);
    setQuestTarget(target);
    setQuestEnergy(5);
    setQuestPath([start]);
    
    const initialVisible = new Set<string>();
    initialVisible.add(start.id);
    mockLinks.forEach(l => {
      const sId = typeof l.source === 'string' ? l.source : (l.source as any).id;
      const tId = typeof l.target === 'string' ? l.target : (l.target as any).id;
      if (sId === start.id) initialVisible.add(tId);
      if (tId === start.id) initialVisible.add(sId);
    });
    setVisibleNodes(initialVisible);
  };

  const handleNodeClick = async (node: any) => {
    if (mode === 'exploration') {
      setSelectedLink(null);
      setSelectedNode(node);
      setIsLoadingAi(true);
      setNodeSummary(null);
      try {
        const result = await summarizeNode({
          name: node.name,
          description: node.description,
          era: node.era,
          location: node.location,
          group: node.group
        });
        setNodeSummary(result.summary);
      } catch (err) {
        setNodeSummary(node.description);
      } finally {
        setIsLoadingAi(false);
      }
    } else {
      if (!questCurrentNode || !questTarget || questEnergy <= 0) return;

      const isNeighbor = mockLinks.some(l => {
        const sId = typeof l.source === 'string' ? l.source : (l.source as any).id;
        const tId = typeof l.target === 'string' ? l.target : (l.target as any).id;
        return (sId === questCurrentNode.id && tId === node.id) || (tId === questCurrentNode.id && sId === node.id);
      });

      if (isNeighbor) {
        const newVisible = new Set(visibleNodes);
        newVisible.add(node.id);
        mockLinks.forEach(l => {
          const sId = typeof l.source === 'string' ? l.source : (l.source as any).id;
          const tId = typeof l.target === 'string' ? l.target : (l.target as any).id;
          if (sId === node.id) newVisible.add(tId);
          if (tId === node.id) newVisible.add(sId);
        });
        setVisibleNodes(newVisible);
        setQuestCurrentNode(node);
        setQuestPath([...questPath, node]);
        
        if (node.id === questTarget.id) {
          alert('Selamat! Anda telah sampai di tujuan misi!');
          startNewQuest();
        }
      } else {
        setQuestEnergy(prev => Math.max(0, prev - 1));
        if (questEnergy === 1) {
          alert('Energi habis! Misi gagal.');
          startNewQuest();
        }
      }
    }
  };

  const handleLinkClick = async (link: any) => {
    if (mode === 'exploration') {
      setSelectedNode(null);
      setSelectedLink(link);
      setIsLoadingAi(true);
      setLinkExplanation(null);
      try {
        const sourceName = typeof link.source === 'object' ? link.source.name : mockNodes.find(n => n.id === link.source)?.name || link.source;
        const targetName = typeof link.target === 'object' ? link.target.name : mockNodes.find(n => n.id === link.target)?.name || link.target;
        
        const explanation = await explainRelationship({
          sourceNodeName: sourceName,
          targetNodeName: targetName,
          relationshipLabel: link.label
        });
        setLinkExplanation(explanation);
      } catch (err) {
        setLinkExplanation(link.explanation);
      } finally {
        setIsLoadingAi(false);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#151310] text-foreground font-body overflow-hidden">
      {/* Navbar */}
      <header className="h-16 border-b border-amber-600/30 flex items-center justify-between px-6 bg-[#1a1815] z-50 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-amber-600/20 rounded-full flex items-center justify-center border border-amber-600/50 gold-glow">
            <Mountain className="text-amber-500 w-5 h-5" />
          </div>
          <h1 className="font-headline text-xl text-amber-500 tracking-wide font-bold">NusaGraph</h1>
        </div>

        <div className="flex-1 max-w-lg px-8 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Cari pusaka, sejarah, atau lokasi..." 
              className="pl-10 bg-neutral-900/50 border-neutral-800 focus:border-amber-600/50 h-9"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-neutral-900/80 p-1 rounded-lg border border-neutral-800">
            <button 
              onClick={() => setMode('exploration')}
              className={`flex items-center gap-2 px-3 py-1 rounded-md transition-all ${mode === 'exploration' ? 'bg-amber-600 text-black shadow-md' : 'hover:bg-neutral-800 text-muted-foreground'}`}
            >
              <Map className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold uppercase tracking-wider">Eksplorasi</span>
            </button>
            <button 
              onClick={() => setMode('challenge')}
              className={`flex items-center gap-2 px-3 py-1 rounded-md transition-all ${mode === 'challenge' ? 'bg-amber-600 text-black shadow-md' : 'hover:bg-neutral-800 text-muted-foreground'}`}
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold uppercase tracking-wider">NusaQuest</span>
            </button>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground w-8 h-8">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Sidebar */}
        <aside className="w-64 bg-[#1a1815] border-r border-amber-600/20 p-5 z-30 overflow-y-auto batik-overlay shrink-0">
          {mode === 'exploration' ? (
            <div className="space-y-6">
              <h2 className="font-headline text-lg text-amber-500 mb-4 border-b border-amber-600/20 pb-2">Filter Budaya</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="era" className="border-amber-600/10">
                  <AccordionTrigger className="text-sm text-amber-100 hover:text-amber-500 py-3">
                    <div className="flex items-center gap-2">
                      <History className="w-4 h-4" />
                      <span>Era Sejarah</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-1.5 pt-1">
                    {['Zaman Kuno', 'Kerajaan Hindu-Buddha', 'Kesultanan Islam', 'Masa Kolonial', 'Modern'].map(era => (
                      <label key={era} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-amber-400 cursor-pointer p-1">
                        <input type="checkbox" className="accent-amber-600 w-3 h-3" />
                        {era}
                      </label>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="location" className="border-amber-600/10">
                  <AccordionTrigger className="text-sm text-amber-100 hover:text-amber-500 py-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Lokasi</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-1.5 pt-1">
                    {['Jawa', 'Sumatera', 'Bali', 'Sulawesi', 'Kalimantan', 'Maluku', 'Papua'].map(loc => (
                      <label key={loc} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-amber-400 cursor-pointer p-1">
                        <input type="checkbox" className="accent-amber-600 w-3 h-3" />
                        {loc}
                      </label>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-4 bg-amber-600/5 border border-amber-600/20 rounded-xl terracotta-glow">
                <h2 className="font-headline text-md text-amber-500 mb-3 flex items-center gap-2 font-bold">
                  <Target className="w-4 h-4 fill-amber-500" />
                  MISI AKTIF
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-neutral-800 rounded-lg overflow-hidden border border-amber-600/30">
                      <img src={questTarget?.image_url} alt={questTarget?.name} className="w-full h-full object-cover opacity-80" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-amber-100 font-bold text-sm truncate">{questTarget?.name}</div>
                      <div className="text-[10px] text-amber-600 uppercase tracking-tighter">{questTarget?.location}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 px-1">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-amber-500/80">Energi</span>
                  <span className="text-amber-500">{questEnergy}/5</span>
                </div>
                <BatteryIndicator energy={questEnergy} maxEnergy={5} />
              </div>
            </div>
          )}
        </aside>

        {/* Center Main Area (Graph) */}
        <main className="flex-1 relative bg-[#151310] overflow-hidden">
          <GraphView 
            data={{ nodes: mockNodes, links: mockLinks }} 
            onNodeClick={handleNodeClick}
            onLinkClick={handleLinkClick}
            visibleNodes={mode === 'challenge' ? visibleNodes : undefined}
          />
          
          {mode === 'challenge' && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-4 left-4 pointer-events-none z-20"
            >
              <div className="bg-black/80 backdrop-blur-md p-3 rounded-lg border border-amber-600/30 shadow-2xl">
                <div className="text-[10px] text-amber-500 font-bold uppercase tracking-widest mb-0.5">Posisi Saat Ini</div>
                <div className="text-lg font-headline text-white font-bold">{questCurrentNode?.name}</div>
              </div>
            </motion.div>
          )}
        </main>

        {/* Right Sidebar */}
        <AnimatePresence mode="wait">
          {(selectedNode || selectedLink || (mode === 'challenge' && questPath.length > 0)) && (
            <motion.aside 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-80 bg-[#1a1815] border-l border-amber-600/20 z-40 overflow-y-auto batik-overlay shrink-0 shadow-2xl flex flex-col"
            >
              <div className="p-4 flex justify-end z-50 bg-[#1a1815]/95 backdrop-blur-sm sticky top-0 border-b border-amber-600/10">
                <Button 
                  onClick={() => { setSelectedNode(null); setSelectedLink(null); }}
                  variant="ghost" 
                  size="icon"
                  className="rounded-full hover:bg-amber-600/20 text-amber-500 w-8 h-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {mode === 'exploration' ? (
                <div className="p-6 space-y-6">
                  {selectedNode ? (
                    <div className="space-y-6">
                      <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-amber-600/40 gold-glow">
                        <img 
                          src={selectedNode.image_url} 
                          alt={selectedNode.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <h2 className="text-2xl font-headline text-amber-500 leading-tight">{selectedNode.name}</h2>
                        <p className="text-[10px] text-amber-600 font-bold uppercase tracking-widest">{selectedNode.era} • {selectedNode.location}</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-amber-200 border-b border-amber-600/10 pb-2">
                          <BookOpen className="w-4 h-4" />
                          <h3 className="font-headline text-md">Wawasan AI</h3>
                        </div>
                        {isLoadingAi ? (
                          <div className="space-y-2 animate-pulse">
                            <div className="h-3 bg-neutral-800 rounded w-full"></div>
                            <div className="h-3 bg-neutral-800 rounded w-5/6"></div>
                            <div className="h-3 bg-neutral-800 rounded w-4/6"></div>
                          </div>
                        ) : (
                          <p className="text-muted-foreground leading-relaxed text-sm italic font-serif">
                            {nodeSummary || selectedNode.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ) : selectedLink ? (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="bg-amber-600/10 border border-amber-600/30 px-3 py-1 rounded-full text-[10px] text-amber-500 font-bold inline-block">
                          {selectedLink.label}
                        </div>
                        <h2 className="text-xl font-headline text-amber-500">Hubungan Pengetahuan</h2>
                      </div>

                      <div className="p-5 bg-[#25211b] rounded-xl border border-amber-600/20 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-10">
                          <BookOpen className="w-12 h-12 text-amber-500" />
                        </div>
                        <div className="space-y-4 relative z-10">
                          <h3 className="text-sm font-bold uppercase tracking-widest text-amber-200/50">Manuskrip</h3>
                          {isLoadingAi ? (
                             <div className="space-y-2 animate-pulse">
                              <div className="h-3 bg-neutral-800 rounded w-full"></div>
                              <div className="h-3 bg-neutral-800 rounded w-5/6"></div>
                            </div>
                          ) : (
                            <p className="text-amber-100/90 leading-relaxed text-sm font-serif italic">
                              {linkExplanation || selectedLink.explanation}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-headline text-amber-500 border-b border-amber-600/20 pb-4 flex items-center gap-2">
                    <History className="w-5 h-5" />
                    Jurnal Perjalanan
                  </h2>
                  <div className="mt-6 relative flex-1">
                    <div className="absolute left-3 top-0 bottom-0 w-px bg-amber-600/20"></div>
                    <div className="space-y-5">
                      {questPath.map((node, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex gap-5 relative pl-1"
                        >
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center z-10 border shrink-0 ${i === questPath.length - 1 ? 'bg-amber-600 border-amber-400 gold-glow scale-110' : 'bg-neutral-900 border-amber-600/30'}`}>
                            {i === questPath.length - 1 ? <Zap className="w-3 h-3 text-black fill-black" /> : <div className="w-1.5 h-1.5 rounded-full bg-amber-600/40"></div>}
                          </div>
                          <div className="min-w-0">
                            <div className={`text-sm font-bold truncate ${i === questPath.length - 1 ? 'text-amber-400' : 'text-amber-100/60'}`}>{node.name}</div>
                            <div className="text-[10px] text-muted-foreground uppercase tracking-tighter">{node.location}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
