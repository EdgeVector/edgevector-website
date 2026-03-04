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
        <meta name="description" content="EdgeVector: Private Collective AI Infrastructure. A technical whitepaper on edge-first AI, encrypted cloud resilience, collective private queries, and the FoldDB reference implementation." />
        <meta name="keywords" content="EdgeVector whitepaper, private AI infrastructure, collective computing, data sovereignty, FoldDB, vector search, HNSW, AES-256-GCM, edge computing, technical paper" />
        <meta property="og:title" content="Whitepaper — EdgeVector: Private Collective AI Infrastructure" />
        <meta property="og:description" content="Technical whitepaper on edge-first AI with encrypted cloud resilience and collective private computing. Covers architecture, security model, and performance targets." />
        <meta property="og:url" content="https://edgevector.org/whitepaper" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="EdgeVector Whitepaper — Private Collective AI Infrastructure" />
        <link rel="canonical" href="https://edgevector.org/whitepaper" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "EdgeVector: Private Collective AI Infrastructure",
          "author": { "@type": "Organization", "name": "Edge Vector Foundation", "url": "https://edgevector.org" },
          "publisher": { "@type": "Organization", "name": "Edge Vector Foundation" },
          "url": "https://edgevector.org/whitepaper",
          "description": "A technical whitepaper on edge-first AI infrastructure with encrypted cloud resilience and private collective computing.",
          "keywords": "private AI, collective computing, data sovereignty, edge computing, vector database"
        })}</script>
      </Helmet>

      <h1 className="tagline">Whitepaper</h1>
      <p className="subtitle">EdgeVector: Private Collective AI Infrastructure</p>
      <hr className="decorative-rule" aria-hidden="true" />

      <Section variant="slate">
        <h2><span className="bold">ABSTRACT</span></h2>

        <p>This paper presents EdgeVector, a system architecture for AI infrastructure that combines edge computing, encrypted cloud resilience, and private collective queries. The reference implementation, FoldDB, is an open-source database that converts local storage into an AI-queryable knowledge corpus while enabling networked computing across users without exposing underlying data.</p>

        <p>EdgeVector enables <span className="bold">collective intelligence with individual privacy</span>: queries can span multiple users&rsquo; data, returning answers and insights without any node revealing its raw information. The cloud provides resilience and network routing but only ever stores ciphertext. The system achieves this through format-agnostic file parsing, HNSW-based vector search, client-side AES-256-GCM encryption, and a query protocol designed for private cross-node computation.</p>
      </Section>

      <Section variant="rose">
        <h2><span className="bold">1. INTRODUCTION</span> <span className="dim">The problem</span></h2>

        <p>Modern knowledge work generates vast archives of personal data &mdash; documents, code repositories, research notes, email threads, configuration files, photos, and media. Collectively, this data represents a rich, longitudinal record of an individual&rsquo;s professional and personal knowledge.</p>

        <p>However, the dominant AI platforms &mdash; ChatGPT, Claude, Copilot &mdash; require this data to be uploaded in plaintext to centralized cloud infrastructure. This creates four structural problems:</p>

        <div className="grid-2">
          <Card><p><Label color="red">PRIVACY EXPOSURE</Label></p><p>Sensitive personal and professional data is transmitted to and stored on third-party infrastructure with opaque retention policies.</p></Card>
          <Card><p><Label color="red">FRAGMENTED ACCESS</Label></p><p>Knowledge is scattered across multiple platforms, each holding an incomplete view. No single AI system can reason across the full corpus.</p></Card>
          <Card><p><Label color="red">NO COLLECTIVE PRIVACY</Label></p><p>There is no infrastructure for querying across multiple people&rsquo;s data without aggregating it in plaintext on a shared server.</p></Card>
          <Card><p><Label color="red">VENDOR LOCK-IN</Label></p><p>Users become dependent on specific cloud providers, with no portability of their indexed knowledge or conversation history.</p></Card>
        </div>

        <h2 className="section-subheading"><span className="bold">THESIS</span></h2>

        <p>AI knowledge infrastructure can be edge-first and cloud-resilient. Computation happens locally. The cloud provides encrypted backup, sync, and a network layer for collective queries. Data is always encrypted client-side &mdash; the cloud never sees plaintext. Three converging trends make this architecture viable now:</p>

        <div className="grid-3">
          <Card><p><span className="bold">Local LLMs</span></p><p>Quantized models with 2B&ndash;13B parameters run at useful speeds on consumer GPUs and Apple Silicon, enabling on-device inference.</p></Card>
          <Card><p><span className="bold">Cheap NVMe</span></p><p>Multi-terabyte solid-state storage is affordable, providing room for source data, vector indices, model weights, and encrypted replicas.</p></Card>
          <Card><p><span className="bold">Data Volume</span></p><p>Personal data is growing exponentially. The collective value of this data is immense &mdash; but only accessible if it can be queried without being exposed.</p></Card>
        </div>
      </Section>

      <Section variant="sage">
        <h2><span className="bold">2. SYSTEM ARCHITECTURE</span></h2>

        <p>EdgeVector comprises seven core subsystems:</p>

        <div className="grid-3">
          <Card><p><Label color="green">FILE INGESTION</Label></p><p>Parses files from the local filesystem into structured text chunks. Format-aware splitting respects natural document boundaries.</p></Card>
          <Card><p><Label color="green">METADATA EXTRACTOR</Label></p><p>Captures file properties, structure, and semantic markers (titles, tags, symbols, language) for hybrid retrieval.</p></Card>
          <Card><p><Label color="green">VECTOR STORE</Label></p><p>Embeds text chunks into 384-dimensional vectors using a local sentence-transformer. Indexed via HNSW for sub-millisecond search.</p></Card>
          <Card><p><Label color="green">DELTA SCANNER</Label></p><p>Background daemon that watches the filesystem for changes. Uses BLAKE3 hashing for efficient change detection. Re-indexes only what changed.</p></Card>
          <Card><p><Label color="green">QUERY ENGINE</Label></p><p>Multi-strategy retrieval combining semantic search, BM25 keyword search, metadata filtering, and cross-node collective queries.</p></Card>
          <Card><p><Label color="green">ENCRYPTION LAYER</Label></p><p>AES-256-GCM content encryption with Argon2id key derivation. All data encrypted client-side before cloud upload.</p></Card>
          <Card><p><Label color="green">NETWORK LAYER</Label></p><p>Routes collective queries between nodes via the encrypted cloud. Returns answers and insights &mdash; never raw data. Enables private multi-user computation.</p></Card>
        </div>

        <h2 className="section-subheading"><span className="bold">DESIGN PRINCIPLES</span></h2>

        <ul className="principle-list">
          <li><span className="bold white">Encrypted everywhere</span> &mdash; Data encrypted at rest, in transit, and in the cloud. The cloud stores ciphertext only. Keys never leave the device.</li>
          <li><span className="bold white">Collective without exposure</span> &mdash; Cross-node queries return answers, not data. No node reveals its raw files to the network.</li>
          <li><span className="bold white">Cloud for resilience</span> &mdash; The cloud provides backup, sync, and network routing. It is a utility, not a trusted party.</li>
          <li><span className="bold white">Index, don&rsquo;t copy</span> &mdash; Creates retrieval layers over existing files in-place. Does not duplicate data into a separate store.</li>
          <li><span className="bold white">Background-first</span> &mdash; Indexing runs as a background process. Never blocks the user&rsquo;s primary workflow.</li>
        </ul>
      </Section>

      <Section variant="amber">
        <h2><span className="bold">3. FILE INGESTION</span></h2>

        <p>The ingestion engine converts raw files into structured chunks suitable for embedding and retrieval.</p>

        <h2 className="section-subheading"><span className="bold">SUPPORTED FORMATS</span></h2>

        <div className="grid-2">
          <Card><p><span className="bold">Text &amp; Notes</span></p><p>Markdown, plain text, Org-mode, reStructuredText</p></Card>
          <Card><p><span className="bold">Code</span></p><p>Rust, Python, JavaScript, TypeScript, Go, Java, C/C++, Ruby, Shell</p></Card>
          <Card><p><span className="bold">Documents</span></p><p>PDF, DOCX, HTML, LaTeX</p></Card>
          <Card><p><span className="bold">Data &amp; Email</span></p><p>JSON, CSV, YAML, TOML, XML, EML, MBOX</p></Card>
        </div>

        <h2 className="section-subheading"><span className="bold">CHUNKING STRATEGY</span></h2>

        <p>Default chunk size: <span className="bold">512 tokens</span> with <span className="bold">64-token overlap</span>. Chunking is format-aware:</p>

        <ul className="principle-list">
          <li><span className="bold white">Code</span> &mdash; Aligned to function and class boundaries. Preserves semantic units.</li>
          <li><span className="bold white">Prose</span> &mdash; Aligned to paragraph and section boundaries. Maintains context coherence.</li>
          <li><span className="bold white">Data</span> &mdash; Aligned to record boundaries. Each chunk represents complete data units.</li>
        </ul>
      </Section>

      <Section variant="slate">
        <h2><span className="bold">4. DELTA SCANNER</span></h2>

        <p>The delta scanner is a background daemon that keeps the vector index synchronized with the filesystem.</p>

        <p>On each scan cycle, the scanner walks the file tree and computes a <span className="bold">BLAKE3 hash</span> for each file. Hashes are compared against the stored index. Files with changed hashes are re-ingested; deleted files are removed from the index.</p>

        <p>For supported platforms, the scanner also registers for filesystem event notifications (FSEvents on macOS, inotify on Linux) to detect changes in real-time between scheduled scans.</p>

        <p>Target: full scan of <span className="bold">500,000 files in under 10 seconds</span>.</p>
      </Section>

      <Section variant="lavender">
        <h2><span className="bold">5. VECTOR INDEX</span></h2>

        <p><span className="bold">Embedding model:</span> Quantized sentence-transformer producing 384-dimensional vectors. Runs locally &mdash; no API calls.</p>

        <p><span className="bold">Index structure:</span> HNSW (Hierarchical Navigable Small World) graph for approximate nearest-neighbor search. Provides sub-millisecond query latency at scale.</p>

        <p><span className="bold">Storage:</span> Vector data stored in memory-mapped files. Metadata stored in Sled (embedded key-value store). Both remain on the local filesystem with encrypted replicas in the cloud.</p>
      </Section>

      <Section variant="rose">
        <h2><span className="bold">6. QUERY ENGINE</span></h2>

        <p>The query engine supports three local retrieval strategies plus cross-node collective queries:</p>

        <div className="grid-2">
          <Card><p><Label color="red">SEMANTIC</Label></p><p>Embed the query, find nearest vectors by cosine similarity. Best for conceptual and natural-language questions.</p></Card>
          <Card><p><Label color="red">KEYWORD</Label></p><p>BM25 term-frequency search. Best for exact terms, file names, error messages, and specific identifiers.</p></Card>
          <Card><p><Label color="red">METADATA</Label></p><p>Filter by file type, date range, path, tags, or language. Narrows results before similarity scoring.</p></Card>
          <Card><p><Label color="red">COLLECTIVE</Label></p><p>Propagate queries across connected nodes. Each node evaluates locally and returns answers &mdash; never raw data. Results assembled by the querying node.</p></Card>
        </div>

        <p>Local results are merged using <span className="bold">Reciprocal Rank Fusion (RRF)</span>. Collective results are assembled from node-level answers.</p>

        <h2 className="section-subheading"><span className="bold">AI INTEGRATION</span></h2>

        <p>The query engine integrates with local LLMs via the RAG pattern: query &rarr; retrieve relevant chunks &rarr; inject as context &rarr; generate response. FoldDB ships with a bundled 2B-parameter model and supports any OpenAI-compatible local inference server.</p>

        <p>FoldDB also functions as an <span className="bold">MCP (Model Context Protocol) tool provider</span>, enabling any MCP-compatible agent framework to query local and collective knowledge.</p>
      </Section>

      <Section variant="sage">
        <h2><span className="bold">7. SECURITY MODEL</span></h2>

        <p><span className="bold">Threat model:</span> The local machine is trusted. The cloud and network are untrusted. Goal: encrypted data remains unreadable if any infrastructure outside the user&rsquo;s device is compromised.</p>

        <div className="grid-2">
          <Card>
            <p><Label color="green">ENCRYPTION</Label></p>
            <p>Content encrypted with <span className="bold">AES-256-GCM</span>. Encryption keys derived from a user passphrase via <span className="bold">Argon2id</span> key derivation function. The derived master key is expanded through <span className="bold">HKDF</span> to produce per-purpose keys. All data encrypted client-side before any cloud upload.</p>
          </Card>
          <Card>
            <p><Label color="green">COLLECTIVE QUERY PRIVACY</Label></p>
            <p>Cross-node queries are designed so that no node exposes its raw data to any other node or to the network layer. Nodes evaluate queries locally and return only answers, summaries, or boolean results. The cloud routes queries but cannot reconstruct the underlying data.</p>
          </Card>
        </div>
      </Section>

      <Section variant="amber">
        <h2><span className="bold">8. COLLECTIVE COMPUTING</span></h2>

        <p>The network layer enables private computation across multiple users&rsquo; data. This is the core innovation of the EdgeVector architecture.</p>

        <div className="grid-2">
          <Card>
            <p><Label color="yellow">QUERY PROPAGATION</Label></p>
            <p>A collective query is routed through the encrypted cloud layer to connected nodes. Each node evaluates the query against its local index. Only the answer traverses the network &mdash; never the underlying files, photos, or documents.</p>
          </Card>
          <Card>
            <p><Label color="yellow">USE CASES</Label></p>
            <p><span className="bold">Photo discovery:</span> Find photos others have taken of you without browsing their libraries.<br />
            <span className="bold">Travel intelligence:</span> Surface friends&rsquo; destination recommendations without revealing which friend or their trip details.<br />
            <span className="bold">Team knowledge:</span> Search across an organization without centralizing documents.<br />
            <span className="bold">Private verification:</span> Answer questions about your data (income, credentials, history) with signed claims, not raw documents.</p>
          </Card>
        </div>
      </Section>

      <Section variant="slate">
        <h2><span className="bold">9. PERFORMANCE TARGETS</span></h2>

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

      <Section variant="lavender">
        <h2><span className="bold">10. APPLICATIONS</span></h2>

        <div className="grid-2">
          <Card>
            <p><Label color="purple">NEAR-TERM (V1)</Label></p>
            <p>Personal knowledge search across all local files. Codebase understanding and navigation. Document recall and cross-reference. Encrypted cloud backup and multi-device sync.</p>
          </Card>
          <Card>
            <p><Label color="purple">MEDIUM-TERM (V2)</Label></p>
            <p>Cross-node collective queries. Photo discovery across contacts. Travel and recommendation intelligence. Team knowledge search. Private verification and claims.</p>
          </Card>
        </div>

        <h2 className="section-subheading"><span className="bold">LONG-TERM VISION</span></h2>

        <p>A network of <span className="bold">sovereign AI knowledge nodes</span> that compute collectively while preserving individual privacy. Distributed intelligence where people contribute to shared understanding without surrendering their data. Governed by the open protocols maintained by Edge Vector Foundation.</p>
      </Section>

      <Section variant="sage">
        <h2><span className="bold">11. ORGANIZATIONAL STRUCTURE</span></h2>

        <p>EdgeVector is developed under the <span className="bold">Edge Vector Foundation</span>, a non-profit organization governing the open-source ecosystem. A for-profit subsidiary builds commercial products, with revenue funding continued open-source development.</p>

        <p>The foundation ensures that the core infrastructure &mdash; FoldDB, the schema registry, the network protocols, and the collective query layer &mdash; remains permanently open source and community-governed.</p>
      </Section>

      <Section variant="rose">
        <h2><span className="bold">12. CONCLUSION</span></h2>

        <p>EdgeVector rejects the premise that collective AI requires collective data exposure. By combining edge-first computation, client-side encryption, encrypted cloud resilience, and a private query protocol, we demonstrate that powerful AI knowledge systems can operate across networks of users with <span className="bold">zero plaintext exposure</span>.</p>

        <p>The technical foundations &mdash; local LLMs, efficient vector search, format-agnostic parsing, client-side encryption, and private query routing &mdash; are mature. FoldDB ties them together into a coherent system. Edge Vector Foundation ensures this infrastructure remains open and accessible to everyone.</p>
      </Section>

      <div className="cta-block">
        <p>
          <a href="https://github.com/shiba4life/fold_db" target="_blank" rel="noreferrer" className="link-btn">[Get FoldDB]</a>{'  '}
          <Link to="/technology" className="link-btn">[Technology Overview]</Link>{'  '}
          <Link to="/about" className="link-btn">[About the Foundation]</Link>
        </p>
      </div>
    </>
  );
}
