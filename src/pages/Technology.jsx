import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import Card from '../components/Card';
import Label from '../components/Label';

export default function Technology() {
  return (
    <>
      <Helmet>
        <title>Technology — Edge Vector Foundation</title>
        <meta name="description" content="Edge Vector's technology stack: edge-first AI execution, encrypted cloud resilience, private collective queries, HNSW vector indexing, and AES-256 encryption. All open source." />
        <meta name="keywords" content="edge AI architecture, vector indexing, HNSW, AES-256, encrypted cloud, collective queries, FoldDB, private computing, local LLM, data sovereignty technology" />
        <meta property="og:title" content="Technology — Edge Vector Foundation" />
        <meta property="og:description" content="Edge-first AI infrastructure with encrypted cloud resilience and private collective computing. How the sovereign AI stack works." />
        <meta property="og:url" content="https://edgevector.org/technology" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Technology — Edge Vector Foundation" />
        <link rel="canonical" href="https://edgevector.org/technology" />
      </Helmet>

      <h1 className="tagline">Technology</h1>
      <hr className="decorative-rule" aria-hidden="true" />

      <p>Edge Vector&rsquo;s technology turns personal data into a private, networked knowledge system. AI runs locally. The cloud provides resilience and collective computing. <span className="bold white">Your plaintext never leaves your control.</span></p>

      <Section variant="slate">
        <h2><span className="bold">ARCHITECTURE</span> <span className="dim">Edge-first, cloud-resilient</span></h2>

        <pre>{`
  ┌─────────────────────────────────────────┐
  │              YOUR DEVICE                │
  │                                         │
  │  ┌───────────┐    ┌──────────────────┐  │
  │  │ Your Files │───▶│ Ingestion Engine │  │
  │  └───────────┘    └────────┬─────────┘  │
  │                            │             │
  │                   ┌────────▼─────────┐  │
  │                   │  Vector Index    │  │
  │                   │  (HNSW + Sled)   │  │
  │                   └────────┬─────────┘  │
  │                            │             │
  │  ┌───────────┐    ┌────────▼─────────┐  │
  │  │ Local LLM │◀──▶│  Query Engine   │  │
  │  └───────────┘    └────────┬─────────┘  │
  │                            │             │
  │  ── Encrypted boundary ────┼──────────  │
  └────────────────────────────┼────────────┘
                               │
                    ┌──────────▼──────────┐
                    │   ENCRYPTED CLOUD   │
                    │                     │
                    │  Backup & Sync      │
                    │  Collective Queries │
                    │  Network Layer      │
                    │                     │
                    │  (ciphertext only)  │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │   OTHER NODES       │
                    │                     │
                    │  Answers, not data  │
                    │  Insights, not files│
                    └─────────────────────┘
`}</pre>
      </Section>

      <Section variant="sage">
        <h2><span className="bold">CORE COMPONENTS</span> <span className="dim">What makes it work</span></h2>

        <div className="grid-2">
          <Card>
            <p><Label color="green">INGESTION ENGINE</Label></p>
            <p>Parses your files &mdash; documents, code, PDFs, emails, notes, data files &mdash; into structured chunks. Format-aware splitting aligns to natural boundaries: functions in code, paragraphs in prose, records in data.</p>
          </Card>

          <Card>
            <p><Label color="green">DELTA SCANNER</Label></p>
            <p>A background daemon that watches your file system for changes. Uses BLAKE3 hashing to efficiently detect modifications. Only re-indexes what changed &mdash; scanning 500K files takes under 10 seconds.</p>
          </Card>

          <Card>
            <p><Label color="green">VECTOR INDEX</Label></p>
            <p>Embeds text chunks into 384-dimensional vectors using a local sentence-transformer model. Stored in an HNSW index for sub-millisecond nearest-neighbor search. Embedding happens on-device.</p>
          </Card>

          <Card>
            <p><Label color="green">QUERY ENGINE</Label></p>
            <p>Combines semantic search (vector similarity), keyword search (BM25), and metadata filtering. Results merged via Reciprocal Rank Fusion. Supports both local and cross-node collective queries.</p>
          </Card>
        </div>
      </Section>

      <Section variant="lavender">
        <h2><span className="bold">COLLECTIVE COMPUTING</span> <span className="dim">The network layer</span></h2>

        <p>EdgeVector nodes can participate in <span className="bold white">collective queries</span> &mdash; answering questions across multiple people&rsquo;s data without exposing the underlying information.</p>

        <div className="grid-2">
          <Card>
            <p><Label color="purple">HOW IT WORKS</Label></p>
            <p>A query propagates across connected nodes. Each node evaluates the query against its local encrypted index and returns only the answer &mdash; a match, a summary, a yes/no &mdash; never the raw data. The querying node assembles the collective result.</p>
          </Card>

          <Card>
            <p><Label color="purple">EXAMPLES</Label></p>
            <p><span className="bold">Find photos of you</span> taken by others &mdash; without browsing their libraries.<br />
            <span className="bold">Discover travel recommendations</span> from friends &mdash; without knowing which friend or their trip details.<br />
            <span className="bold">Search team knowledge</span> &mdash; without centralizing documents on a shared server.</p>
          </Card>
        </div>

        <p>The cloud enables this by providing the network layer, routing queries between nodes, and storing encrypted replicas for resilience. It sees only ciphertext and query metadata.</p>
      </Section>

      <Section variant="rose">
        <h2><span className="bold">SECURITY</span> <span className="dim">Privacy by architecture, not policy</span></h2>

        <p>Edge Vector&rsquo;s security model is structural, not contractual. Privacy is enforced by the system&rsquo;s design, not by promises.</p>

        <div className="grid-3">
          <Card>
            <p><Label color="red">ENCRYPTION</Label></p>
            <p><span className="bold">AES-256-GCM</span> for content encryption. Keys derived via <span className="bold">Argon2id</span> KDF from your passphrase, then expanded through HKDF. Your master key never touches disk unencrypted.</p>
          </Card>

          <Card>
            <p><Label color="red">CLOUD = CIPHERTEXT</Label></p>
            <p>Data is encrypted <span className="bold">client-side before upload</span>. The cloud stores ciphertext for backup, sync, and network routing. If the cloud is compromised, your data remains unreadable.</p>
          </Card>

          <Card>
            <p><Label color="red">COLLECTIVE PRIVACY</Label></p>
            <p>Cross-node queries return <span className="bold">answers, not data</span>. No node exposes its raw files to the network. The query protocol is designed so that even the network layer cannot reconstruct the underlying information.</p>
          </Card>
        </div>
      </Section>

      <Section variant="amber">
        <h2><span className="bold">SUPPORTED FORMATS</span> <span className="dim">What FoldDB can index</span></h2>

        <div className="grid-4">
          <Card>
            <p><Label color="yellow">TEXT</Label></p>
            <p>Markdown, plain text, Org-mode, reStructuredText</p>
          </Card>
          <Card>
            <p><Label color="yellow">CODE</Label></p>
            <p>Rust, Python, JavaScript, TypeScript, Go, Java, C/C++, and more</p>
          </Card>
          <Card>
            <p><Label color="yellow">DOCUMENTS</Label></p>
            <p>PDF, DOCX, HTML, LaTeX</p>
          </Card>
          <Card>
            <p><Label color="yellow">DATA</Label></p>
            <p>JSON, CSV, YAML, TOML, XML, EML, MBOX</p>
          </Card>
        </div>
      </Section>

      <Section variant="slate">
        <h2><span className="bold">PERFORMANCE</span> <span className="dim">Built for real-world scale</span></h2>

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

        <p>These targets are designed for consumer hardware &mdash; laptops and desktops, not servers. Sovereign AI should run on what you already own.</p>
      </Section>

      <div className="cta-block">
        <p>Want the full technical details?</p>
        <p>
          <Link to="/whitepaper" className="link-btn">[Read the Whitepaper]</Link>{'  '}
          <a href="https://github.com/shiba4life/fold_db" target="_blank" rel="noreferrer" className="link-btn">[View the Source]</a>
        </p>
      </div>
    </>
  );
}
