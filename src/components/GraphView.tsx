
"use client";

import React, { useRef, useEffect, useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Node, Link } from '@/data/mockGraph';
import { ZoomIn, ZoomOut, Target, ChevronDown, ChevronUp, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false });

interface GraphViewProps {
  data: { nodes: Node[]; links: Link[] };
  onNodeClick: (node: any) => void;
  onLinkClick: (link: any) => void;
  visibleNodes?: Set<string>; 
  focusNodeId?: string | null; 
}

const CATEGORY_COLORS: Record<string, string> = {
  'Seni': '#2563eb',
  'Sejarah': '#ECAD1B',
  'Geografi': '#BE4E23',
  'Budaya': '#9333ea'
};

export function GraphView({ data, onNodeClick, onLinkClick, visibleNodes, focusNodeId }: GraphViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<any>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isLegendOpen, setIsLegendOpen] = useState(true);
  const [hoverNode, setHoverNode] = useState<any>(null);

  // Resize observer to handle container size
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Stabilize simulation once graph is loaded
  useEffect(() => {
    if (fgRef.current) {
      // D3 Forces optimization
      const fg = fgRef.current;
      const chargeForce = fg.d3Force('charge');
      if (chargeForce) chargeForce.strength(-300);
      
      const linkForce = fg.d3Force('link');
      if (linkForce) linkForce.distance(120);
    }
  }, [data]);

  const filteredNodes = useMemo(() => {
    if (visibleNodes) return data.nodes.filter(n => visibleNodes.has(n.id));
    return data.nodes;
  }, [data.nodes, visibleNodes]);
  
  const filteredLinks = useMemo(() => {
    if (visibleNodes) {
      return data.links.filter(l => 
        visibleNodes.has(typeof l.source === 'string' ? l.source : (l.source as any).id) && 
        visibleNodes.has(typeof l.target === 'string' ? l.target : (l.target as any).id)
      );
    }
    return data.links;
  }, [data.links, visibleNodes]);

  const handleZoomIn = () => fgRef.current?.zoom(fgRef.current.zoom() * 1.5, 400);
  const handleZoomOut = () => fgRef.current?.zoom(fgRef.current.zoom() * 0.7, 400);
  const handleRecenter = () => {
    fgRef.current?.centerAt(0, 0, 800);
    fgRef.current?.zoom(1.2, 800);
  };

  const focusedNeighbors = useMemo(() => {
    if (!focusNodeId) return new Set<string>();
    const neighbors = new Set<string>();
    data.links.forEach(link => {
      const sId = typeof link.source === 'object' ? (link.source as any).id : link.source;
      const tId = typeof link.target === 'object' ? (link.target as any).id : link.target;
      
      if (sId === focusNodeId) neighbors.add(tId);
      if (tId === focusNodeId) neighbors.add(sId);
    });
    return neighbors;
  }, [focusNodeId, data.links]);

  return (
    <div ref={containerRef} className="w-full h-full bg-[#151310] overflow-hidden relative">
      {dimensions.width > 0 && dimensions.height > 0 && (
        <ForceGraph2D
          ref={fgRef}
          graphData={{ nodes: filteredNodes, links: filteredLinks }}
          width={dimensions.width}
          height={dimensions.height}
          nodeRelSize={6}
          d3VelocityDecay={0.3}
          onNodeHover={(node) => setHoverNode(node)}
          linkColor={(link: any) => {
            const sId = typeof link.source === 'object' ? (link.source as any).id : link.source;
            const tId = typeof link.target === 'object' ? (link.target as any).id : link.target;
            
            if (focusNodeId) {
              return (sId === focusNodeId || tId === focusNodeId) 
                ? 'rgba(236, 173, 27, 0.9)' 
                : 'rgba(50, 50, 50, 0.05)';
            }
            
            if (hoverNode && (sId === hoverNode.id || tId === hoverNode.id)) {
                return 'rgba(236, 173, 27, 0.8)';
            }

            return 'rgba(236, 173, 27, 0.2)';
          }}
          linkWidth={(link: any) => {
             const sId = typeof link.source === 'object' ? (link.source as any).id : link.source;
             const tId = typeof link.target === 'object' ? (link.target as any).id : link.target;
             
             if (focusNodeId) {
                return (sId === focusNodeId || tId === focusNodeId) ? 3 : 0.2;
             }
             if (hoverNode && (sId === hoverNode.id || tId === hoverNode.id)) {
                 return 2;
             }
             return 1;
          }}
          linkDirectionalParticles={(link: any) => {
            const sId = typeof link.source === 'object' ? (link.source as any).id : link.source;
            const tId = typeof link.target === 'object' ? (link.target as any).id : link.target;
            if (focusNodeId) {
                return (sId === focusNodeId || tId === focusNodeId) ? 4 : 0;
            }
            if (hoverNode && (sId === hoverNode.id || tId === hoverNode.id)) return 2;
            return 0;
          }}
          onNodeClick={onNodeClick}
          onLinkClick={onLinkClick}
          backgroundColor="#151310"
          nodeCanvasObject={(node: any, ctx: any, globalScale: number) => {
            const isTarget = focusNodeId === node.id;
            const isNeighbor = focusedNeighbors.has(node.id);
            const isFocused = focusNodeId ? (isTarget || isNeighbor) : true;
            const isHovered = hoverNode?.id === node.id;
            
            const baseColor = CATEGORY_COLORS[node.group] || '#9333ea';
            const radius = isTarget ? 8 : (isHovered ? 7 : 5);
            
            ctx.beginPath();
            ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
            
            if (focusNodeId) {
              if (isFocused) {
                ctx.fillStyle = baseColor;
                if (isTarget) {
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = baseColor;
                }
              } else {
                ctx.fillStyle = 'rgba(50, 50, 50, 0.1)';
              }
            } else {
              ctx.fillStyle = isHovered ? '#fff' : baseColor;
              if (isHovered) {
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#fff';
              }
            }
            
            ctx.fill();
            ctx.shadowBlur = 0; 
            
            const showLabel = globalScale > 1.5 || isFocused || isHovered || isTarget;
            
            if (showLabel) {
                const label = node.name;
                const fontSize = (isTarget ? 14 : 11) / globalScale;
                ctx.font = `${isTarget || isHovered ? 'bold' : 'normal'} ${fontSize}px Playfair Display`;
                
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                if (focusNodeId) {
                   ctx.fillStyle = isFocused ? (isTarget ? '#ECAD1B' : 'white') : 'rgba(100, 100, 100, 0.05)';
                } else {
                   ctx.fillStyle = isHovered ? '#ECAD1B' : 'rgba(255, 255, 255, 0.8)';
                }
                
                ctx.fillText(label, node.x, node.y + (radius + 10 / globalScale));
            }
          }}
          nodeCanvasObjectMode={() => 'replace'}
        />
      )}

      {/* Navigation Controls */}
      <div className="absolute bottom-6 right-6 flex flex-col gap-2 bg-stone-900/80 backdrop-blur-md p-1.5 rounded-full border border-amber-600/30 shadow-xl z-50">
        <Button size="icon" variant="ghost" className="rounded-full hover:bg-amber-600/20 text-amber-500 w-10 h-10" onClick={handleZoomIn}>
          <ZoomIn className="w-5 h-5" />
        </Button>
        <Button size="icon" variant="ghost" className="rounded-full hover:bg-amber-600/20 text-amber-500 w-10 h-10" onClick={handleZoomOut}>
          <ZoomOut className="w-5 h-5" />
        </Button>
        <div className="h-px bg-amber-600/20 mx-2" />
        <Button size="icon" variant="ghost" className="rounded-full hover:bg-amber-600/20 text-amber-500 w-10 h-10" onClick={handleRecenter}>
          <Target className="w-5 h-5" />
        </Button>
      </div>

      {/* Legend */}
      <div className="absolute bottom-6 left-6 z-50">
        <div className="bg-stone-900/80 backdrop-blur-md rounded-xl border border-amber-600/30 shadow-xl overflow-hidden min-w-[140px]">
          <button 
            onClick={() => setIsLegendOpen(!isLegendOpen)}
            className="w-full px-4 py-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 border-b border-amber-600/10 hover:bg-amber-600/5 transition-colors"
          >
            <span>Legenda</span>
            {isLegendOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
          </button>
          
          <AnimatePresence>
            {isLegendOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="p-3 space-y-2"
              >
                {Object.entries(CATEGORY_COLORS).map(([group, color]) => (
                  <div key={group} className="flex items-center gap-2">
                    <Circle className="w-2.5 h-2.5 fill-current" style={{ color }} />
                    <span className="text-xs text-stone-300">{group}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
