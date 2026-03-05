import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import Card from '../components/Card';
import Label from '../components/Label';

export default function Whitepaper() {
  return (
    <>
      <Helmet>
        <title>Whitepaper — Edge Vector Foundation</title>
        <meta name="description" content="EdgeVector: Personal AI Knowledge Infrastructure. A technical whitepaper on edge-first AI, local file indexing, vector search, encrypted storage, and the FoldDB reference implementation." />
        <meta name="keywords" content="EdgeVector whitepaper, personal AI infrastructure, data sovereignty, FoldDB, vector search, HNSW, AES-256-GCM, edge computing, technical paper" />
        <meta property="og:title" content="Whitepaper — EdgeVector: Personal AI Knowledge Infrastructure" />
        <meta property="og:description" content="Technical whitepaper on edge-first AI knowledge infrastructure. Covers architecture, ingestion pipeline, vector index, query engine, security model, and performance targets." />
        <meta property="og:url" content="https://edgevector.org/whitepaper" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="EdgeVector Whitepaper — Personal AI Knowledge Infrastructure" />
        <link rel="canonical" href="https://edgevector.org/whitepaper" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "EdgeVector: Personal AI Knowledge Infrastructure",
          "author": { "@type": "Organization", "name": "Edge Vector Foundation", "url": "https://edgevector.org" },
          "publisher": { "@type": "Organization", "name": "Edge Vector Foundation" },
          "url": "https://edgevector.org/whitepaper",
          "description": "A technical whitepaper on edge-first personal AI knowledge infrastructure.",
          "keywords": "personal AI, data sovereignty, edge computing, vector database, FoldDB"
        })}</script>
      </Helmet>

      <h1 className="tagline">Whitepaper</h1>
      <p className="subtitle">EdgeVector: Personal AI Knowledge Infrastructure</p>
      <hr className="decorative-rule" aria-hidden="true" />

      <p>
        <a href="/whitepaper.html" target="_blank" rel="noreferrer" className="link-btn">[Read the Full Whitepaper]</a>
      </p>

      <Section variant="slate">
        <h2><span className="bold">ABSTRACT</span></h2>

        <p>Artificial intelligence systems increasingly assist users in reasoning over complex information. However, current AI tools depend on centralized cloud infrastructure that requires users to surrender private data to remote servers. This architecture is fundamentally incompatible with privacy, data sovereignty, and the nature of personal knowledge.</p>

        <p>This paper introduces <span className="bold">EdgeVector</span>, a new architecture for personal AI knowledge infrastructure that runs entirely on local edge devices. The reference implementation, <span className="bold">FoldDB</span>, is a database system that converts a user&rsquo;s local storage into an AI-queryable knowledge corpus &mdash; without any data leaving the machine.</p>

        <p>We describe the system architecture, ingestion pipeline, query engine, encryption model, and performance characteristics. We argue that the convergence of capable local language models, high-capacity NVMe storage, and growing personal data volumes creates a unique opportunity to shift AI infrastructure from the cloud to the edge.</p>
      </Section>

      <Section variant="rose">
        <h2><span className="bold">KEY CONTRIBUTIONS</span></h2>

        <div className="grid-2">
          <Card><p><Label color="red">EDGE-FIRST ARCHITECTURE</Label></p><p>All computation happens locally on the user&rsquo;s device. No data, metadata, telemetry, or analytics leave the machine. The local API binds exclusively to 127.0.0.1.</p></Card>
          <Card><p><Label color="red">FORMAT-AGNOSTIC INGESTION</Label></p><p>Parses Markdown, code (all major languages via tree-sitter), PDF, DOCX, JSON, CSV, YAML, email, and more. Format-aware chunking respects natural document boundaries.</p></Card>
          <Card><p><Label color="red">HNSW VECTOR INDEX</Label></p><p>Sub-millisecond semantic search at million-scale vector counts. Memory-mapped storage with incremental insertion &mdash; no full rebuilds on file changes.</p></Card>
          <Card><p><Label color="red">MULTI-STRATEGY RETRIEVAL</Label></p><p>Combines semantic search, BM25 keyword search, and metadata filtering. Merged via Reciprocal Rank Fusion (RRF) for unified ranking.</p></Card>
          <Card><p><Label color="red">ENCRYPTED AT REST</Label></p><p>AES-256-GCM content encryption. Keys derived from user passphrase via Argon2id + HKDF. Master key held in memory only while authenticated.</p></Card>
          <Card><p><Label color="red">DELTA SCANNING</Label></p><p>Background daemon detects filesystem changes via BLAKE3 hashing. Re-indexes only changed files. 500,000-file scan in under 10 seconds.</p></Card>
        </div>
      </Section>

      <Section variant="sage">
        <h2><span className="bold">PAPER OUTLINE</span></h2>

        <pre>{`
  1.  Introduction ................. The problem and thesis
  2.  System Architecture ......... High-level design and principles
  3.  File Ingestion Pipeline ..... Formats, parsing, chunking
  4.  Delta Scanner ............... Incremental change detection
  5.  Metadata Extraction ......... Schema and storage
  6.  Vector Index ................ Embeddings, HNSW, storage layout
  7.  Query Engine ................ Multi-strategy retrieval + RAG
  8.  Security Model .............. Threat model, encryption, key mgmt
  9.  AI Integration .............. Local LLMs, MCP, agent tooling
  10. Performance ................. Targets for consumer hardware
  11. Applications ................ Near-term and long-term vision
  12. Related Work ................ Comparison with existing systems
  13. Organizational Structure .... Foundation + subsidiary model
  14. Conclusion .................. Summary and future directions
`}</pre>
      </Section>

      <Section variant="amber">
        <h2><span className="bold">PERFORMANCE TARGETS</span></h2>

        <pre>{`
  METRIC                          TARGET
  ─────────────────────────────────────────
  Installation time               < 2 minutes
  Initial indexing speed           > 200,000 files/hr
  Incremental scan (500K files)   < 10 seconds
  Semantic query latency          < 500ms
  Keyword query latency           < 100ms
  Memory usage (idle)             < 200 MB
  Disk overhead                   ~20% of source files
`}</pre>

        <p>All targets designed for consumer hardware: laptops and desktops with standard SSDs.</p>
      </Section>

      <div className="cta-block">
        <p>
          <a href="/whitepaper.html" target="_blank" rel="noreferrer" className="link-btn">[Read the Full Whitepaper]</a>{'  '}
          <a href="https://github.com/shiba4life/fold_db" target="_blank" rel="noreferrer" className="link-btn">[Get FoldDB]</a>{'  '}
          <Link to="/technology" className="link-btn">[Technology Overview]</Link>{'  '}
          <Link to="/about" className="link-btn">[About the Foundation]</Link>
        </p>
      </div>
    </>
  );
}
