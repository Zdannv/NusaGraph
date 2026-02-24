
"use client";

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Settings, 
  Map, 
  Gamepad2, 
  History, 
  MapPin,
  Mountain,
  ChevronRight
} from 'lucide-react';

import { GraphView } from '@/components/GraphView';
import { ContextualSidebar } from '@/components/ContextualSidebar';
import { NusaQuestDashboard } from '@/components/NusaQuestDashboard';
import { mockNodes, mockLinks, Node, Link } from '@/data/mockGraph';
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
  const [isJournalVisible, setIsJournalVisible] = useState(false);

  useEffect(() => {
    if (mode === 'challenge') {
      startNewQuest();
    } else {
      setVisibleNodes(new Set());
      setSelectedNode(null);
      setSelectedLink(null);
      setQuestPath([]);
      setIsJournalVisible(false);
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
    setIsJournalVisible(true);
    
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
        setIsJournalVisible(true);
        
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

  const closeRightPanel = () => {
    setSelectedNode(null);
    setSelectedLink(null);
    if (mode === 'challenge') setIsJournalVisible(false);
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
        <aside className="w-60 md:w-64 bg-[#1a1815] border-r border-amber-600/20 p-5 z-30 overflow-y-auto batik-overlay shrink-0">
          {mode === 'exploration' ? (
            <div className="space-y-6">
              <h2 className="font-headline text-lg text-amber-500 mb-4 border-b border-amber-600/20 pb-2">Filter Budaya</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="era" className="border-amber-600/10">
                  <AccordionTrigger className="text-sm text-stone-200 hover:text-amber-500 py-3">
                    <div className="flex items-center gap-2">
                      <History className="w-4 h-4" />
                      <span>Era Sejarah</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-1.5 pt-1">
                    {['Zaman Kuno', 'Kerajaan Hindu-Buddha', 'Kesultanan Islam', 'Masa Kolonial', 'Modern'].map(era => (
                      <label key={era} className="flex items-center gap-2 text-xs text-stone-400 hover:text-amber-400 cursor-pointer p-1">
                        <input type="checkbox" className="accent-amber-600 w-3 h-3" />
                        {era}
                      </label>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="location" className="border-amber-600/10">
                  <AccordionTrigger className="text-sm text-stone-200 hover:text-amber-500 py-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Lokasi</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-1.5 pt-1">
                    {['Jawa', 'Sumatera', 'Bali', 'Sulawesi', 'Kalimantan', 'Maluku', 'Papua'].map(loc => (
                      <label key={loc} className="flex items-center gap-2 text-xs text-stone-400 hover:text-amber-400 cursor-pointer p-1">
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
                 <h2 className="text-[10px] text-amber-500 font-bold uppercase tracking-[0.2em] mb-2">Instruksi Misi</h2>
                 <p className="text-xs text-stone-300 leading-relaxed italic">
                   Klik simpul (node) yang berhubungan dengan lokasi Anda saat ini untuk bergerak maju.
                 </p>
              </div>

              <div className="pt-4 border-t border-amber-600/10">
                <Button 
                  variant="outline" 
                  className="w-full justify-between text-xs border-amber-600/20 text-amber-500 hover:bg-amber-600/10 h-10"
                  onClick={() => setIsJournalVisible(!isJournalVisible)}
                >
                  <div className="flex items-center gap-2">
                    <History className="w-3.5 h-3.5" />
                    Jurnal Misi
                  </div>
                  <ChevronRight className={`w-3 h-3 transition-transform ${isJournalVisible ? 'rotate-90' : ''}`} />
                </Button>
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
            <NusaQuestDashboard 
              questTarget={questTarget}
              questCurrentNode={questCurrentNode}
              questEnergy={questEnergy}
              questPath={questPath}
              isJournalVisible={isJournalVisible}
              onToggleJournal={() => setIsJournalVisible(!isJournalVisible)}
              onCloseJournal={() => setIsJournalVisible(false)}
            />
          )}
        </main>

        {/* Right Sidebar */}
        <ContextualSidebar 
          selectedNode={selectedNode}
          selectedLink={selectedLink}
          isLoadingAi={isLoadingAi}
          nodeSummary={nodeSummary}
          linkExplanation={linkExplanation}
          onClose={closeRightPanel}
        />
      </div>
    </div>
  );
}
