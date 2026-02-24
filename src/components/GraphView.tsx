
"use client";

import React, { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Node, Link } from '@/data/mockGraph';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false });

interface GraphViewProps {
  data: { nodes: Node[]; links: Link[] };
  onNodeClick: (node: any) => void;
  onLinkClick: (link: any) => void;
  visibleNodes?: Set<string>; // For Quest Mode "fog of war"
}

export function GraphView({ data, onNodeClick, onLinkClick, visibleNodes }: GraphViewProps) {
  const fgRef = useRef<any>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight - 64 // Navbar height
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight - 64
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredNodes = visibleNodes 
    ? data.nodes.filter(n => visibleNodes.has(n.id))
    : data.nodes;
  
  const filteredLinks = visibleNodes
    ? data.links.filter(l => 
        visibleNodes.has(typeof l.source === 'string' ? l.source : (l.source as any).id) && 
        visibleNodes.has(typeof l.target === 'string' ? l.target : (l.target as any).id)
      )
    : data.links;

  return (
    <div className="w-full h-full bg-[#151310] overflow-hidden">
      {dimensions.width > 0 && (
        <ForceGraph2D
          ref={fgRef}
          graphData={{ nodes: filteredNodes, links: filteredLinks }}
          width={dimensions.width}
          height={dimensions.height}
          nodeLabel="name"
          nodeColor={(node: any) => {
            switch(node.group) {
              case 'Seni': return '#ECAD1B';
              case 'Sejarah': return '#BE4E23';
              case 'Geografi': return '#2563eb';
              default: return '#737373';
            }
          }}
          nodeRelSize={6}
          linkColor={() => 'rgba(236, 173, 27, 0.4)'}
          linkWidth={1.5}
          linkDirectionalParticles={2}
          linkDirectionalParticleSpeed={0.005}
          onNodeClick={onNodeClick}
          onLinkClick={onLinkClick}
          backgroundColor="#151310"
          nodeCanvasObject={(node: any, ctx: any, globalScale: number) => {
            const label = node.name;
            const fontSize = 12 / globalScale;
            ctx.font = `${fontSize}px Playfair Display`;
            const textWidth = ctx.measureText(label).width;
            const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2);

            ctx.beginPath();
            ctx.arc(node.x, node.y, 4, 0, 2 * Math.PI, false);
            ctx.fillStyle = node.group === 'Seni' ? '#ECAD1B' : node.group === 'Sejarah' ? '#BE4E23' : '#2563eb';
            ctx.fill();
            
            // Subtle glow
            ctx.shadowBlur = 10;
            ctx.shadowColor = ctx.fillStyle;
            
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'white';
            ctx.fillText(label, node.x, node.y + 8);
            
            ctx.shadowBlur = 0; // Reset shadow for other drawing
          }}
        />
      )}
    </div>
  );
}
