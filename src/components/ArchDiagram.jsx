import { useMemo } from 'react';
import {
  ReactFlow,
  MarkerType,
  Position,
} from '@xyflow/react';
import Dagre from '@dagrejs/dagre';
import '@xyflow/react/dist/style.css';

const FONT = "'IBM Plex Mono', monospace";
const NW = 190;
const NH = 44;

const baseStyle = {
  borderRadius: 0,
  fontFamily: FONT,
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '1px',
  textTransform: 'uppercase',
  textAlign: 'center',
  width: NW,
};

const styles = {
  default: { ...baseStyle, background: 'var(--bg-code)', border: '2px solid var(--fg-strong)', color: 'var(--fg-strong)', padding: '10px 16px' },
  heading: { ...baseStyle, background: 'var(--fg-strong)', border: '2px solid var(--fg-strong)', color: 'var(--bg)', padding: '8px 16px', letterSpacing: '2px' },
};

const subtext = (main, sub) => (
  <div>
    <div>{main}</div>
    <div style={{ fontWeight: 400, fontSize: '9px', color: 'inherit', opacity: 0.6, textTransform: 'none', letterSpacing: 0, marginTop: 3 }}>{sub}</div>
  </div>
);

const rawNodes = [
  { id: 'files', data: { label: 'Your Files' }, style: styles.default },
  { id: 'writes', data: { label: subtext('Third-Party Writes', 'With your permission') }, style: styles.default },
  { id: 'ingestion', data: { label: subtext('Ingestion', 'Files \u2192 structured records') }, style: styles.default },
  { id: 'lastdb', data: { label: subtext('LastDB \u2014 Your Database', 'One process \u00b7 your machine') }, style: { ...styles.heading, width: 230 } },
  { id: 'apps', data: { label: subtext('Your Apps', 'Brain \u00b7 Kanban \u00b7 yours') }, style: styles.default },
  { id: 'slices', data: { label: subtext('Delivery Slices', 'Your terms \u00b7 you keep the source') }, style: { ...styles.default, width: 210 } },
  { id: 'exemem', data: { label: subtext('Exemem Cloud (optional)', 'Backup \u00b7 sync \u00b7 delivery rail') }, style: { ...styles.default, width: 210 } },
  { id: 'people', data: { label: subtext('People & Apps You Choose', 'Recipients of your slices') }, style: { ...styles.heading, width: 230 } },
];

const solid = { stroke: 'var(--fg-strong)', strokeWidth: 2 };
const dashed = { stroke: 'var(--border)', strokeWidth: 2, strokeDasharray: '6 4' };
const arrow = { type: MarkerType.ArrowClosed, color: 'var(--fg-strong)', width: 14, height: 14 };
const arrowGray = { type: MarkerType.ArrowClosed, color: 'var(--border)', width: 14, height: 14 };

const rawEdges = [
  { id: 'e1', source: 'files', target: 'ingestion', style: solid, markerEnd: arrow },
  { id: 'e2', source: 'writes', target: 'ingestion', style: solid, markerEnd: arrow },
  { id: 'e3', source: 'ingestion', target: 'lastdb', style: solid, markerEnd: arrow },
  { id: 'e4', source: 'lastdb', target: 'apps', style: solid, markerEnd: arrow },
  { id: 'e5', source: 'lastdb', target: 'slices', style: solid, markerEnd: arrow },
  { id: 'e6', source: 'lastdb', target: 'exemem', style: dashed, markerEnd: arrowGray },
  { id: 'e7', source: 'slices', target: 'people', style: solid, markerEnd: arrow },
  { id: 'e8', source: 'exemem', target: 'people', style: dashed, markerEnd: arrowGray },
];

function layoutGraph(nodes, edges) {
  const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: 'TB', nodesep: 40, ranksep: 70, marginx: 20, marginy: 20 });

  nodes.forEach((node) => {
    const w = node.style?.width || NW;
    g.setNode(node.id, { width: typeof w === 'number' ? w : NW, height: NH });
  });

  edges.forEach((edge) => {
    g.setEdge(edge.source, edge.target);
  });

  Dagre.layout(g);

  return nodes.map((node) => {
    const pos = g.node(node.id);
    const w = node.style?.width || NW;
    const numW = typeof w === 'number' ? w : NW;
    return {
      ...node,
      position: { x: pos.x - numW / 2, y: pos.y - NH / 2 },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
      draggable: false,
    };
  });
}

export default function ArchDiagram() {
  const { nodes, edges } = useMemo(() => {
    const laidOut = layoutGraph(rawNodes, rawEdges);
    return {
      nodes: laidOut,
      edges: rawEdges.map((e) => ({ ...e, type: 'smoothstep' })),
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '700px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{ padding: 0.15 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
      />
    </div>
  );
}
