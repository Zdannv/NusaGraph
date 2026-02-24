
import { mockNodes, mockLinks, Node, Link } from '@/data/mockGraph';

/**
 * NusaGraph API Services
 * These functions simulate backend calls to a Neo4j database or similar knowledge graph backend.
 */

export async function fetchKnowledgeGraph(filters?: { era?: string; location?: string; category?: string }): Promise<{ nodes: Node[]; links: Link[] }> {
  // Real implementation would call something like: GET /api/graph?era=...&location=...
  console.log('Fetching graph with filters:', filters);
  
  let filteredNodes = [...mockNodes];
  if (filters?.category) {
    filteredNodes = filteredNodes.filter(n => n.group === filters.category);
  }
  
  // Basic filtering of links to only include those where both nodes are present
  const nodeIds = new Set(filteredNodes.map(n => n.id));
  const filteredLinks = mockLinks.filter(l => 
    nodeIds.has(typeof l.source === 'string' ? l.source : (l.source as any).id) && 
    nodeIds.has(typeof l.target === 'string' ? l.target : (l.target as any).id)
  );

  return { nodes: filteredNodes, links: filteredLinks };
}

export async function getNodeDetails(id: string): Promise<Node | undefined> {
  // Real implementation: GET /api/nodes/:id
  return mockNodes.find(n => n.id === id);
}

export async function getRelationshipExplanation(sourceId: string, targetId: string): Promise<string> {
  // Real implementation: GET /api/relationships/explain?source=...&target=...
  const link = mockLinks.find(l => 
    (l.source === sourceId && l.target === targetId) || 
    (l.source === targetId && l.target === sourceId)
  );
  return link?.explanation || 'Hubungan antara kedua entitas ini sangat mendalam dalam sejarah Nusantara.';
}

export async function generatePathfinderQuest() {
  // Real implementation: POST /api/quests/generate
  const start = mockNodes[Math.floor(Math.random() * mockNodes.length)];
  let target = mockNodes[Math.floor(Math.random() * mockNodes.length)];
  while (target.id === start.id) {
    target = mockNodes[Math.floor(Math.random() * mockNodes.length)];
  }
  
  return {
    missionTitle: 'Mencari Akar Budaya',
    startNode: start,
    targetNode: target,
    energy: 5
  };
}

export async function validatePathStep(currentNodeId: string, clickedNodeId: string, targetNodeId: string) {
  // Real implementation: POST /api/quests/validate-step
  const isNeighbor = mockLinks.some(l => 
    (l.source === currentNodeId && l.target === clickedNodeId) || 
    (l.source === clickedNodeId && l.target === currentNodeId)
  );
  
  return {
    isValid: isNeighbor,
    isTargetReached: clickedNodeId === targetNodeId
  };
}
