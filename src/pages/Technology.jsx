import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import Card from '../components/Card';
import Label from '../components/Label';
import ArchDiagram from '../components/ArchDiagram';

export default function Technology() {
  return (
    <>
      <Helmet>
        <title>Technology — Edge Vector Foundation</title>
        <meta name="description" content="Edge Vector's technology: a local database you own, thin-client apps you build on it, seamless ingestion, and curated slices of your data delivered on your terms." />
        <meta name="keywords" content="data ownership technology, personal database, own your tool stack, thin clients, semantic search, data ingestion, delivery slices, LastDB, open source" />
        <meta property="og:title" content="Technology — Edge Vector Foundation" />
        <meta property="og:description" content="A local database you own, the tools you build on it, and the slices of it you deliver to others. How a tool stack you own works." />
        <meta property="og:url" content="https://edgevector.org/technology" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Technology — Edge Vector Foundation" />
        <link rel="canonical" href="https://edgevector.org/technology" />
      </Helmet>

      <h1 className="tagline">Technology</h1>
      <hr className="decorative-rule" aria-hidden="true" />

      <p>One permanent <span className="bold white">database you own</span>, every tool a thin client of it: ingestion brings your data in, apps build on it fast, and you deliver curated slices of it to the people and apps you choose.</p>

      <Section variant="slate">
        <h2><span className="bold">ARCHITECTURE</span> <span className="dim">One database, many thin clients</span></h2>

        <ArchDiagram />
      </Section>

      <Section variant="sage">
        <h2><span className="bold">BUILD YOUR STACK</span> <span className="dim">Apps are clients, not custodians</span></h2>

        <div className="grid-2">
          <Card>
            <p><Label color="green">SCHEMAS &amp; THIN CLIENTS</Label></p>
            <p>Declare a schema, write a thin client &mdash; storage, indexing, and semantic search are already there. A new tool is an afternoon, not a quarter.</p>
          </Card>

          <Card>
            <p><Label color="green">ONE DATABASE</Label></p>
            <p>Apps read and write your database instead of keeping their own copy. Swap a tool, keep the data. Nothing rented, nothing silo&rsquo;d.</p>
          </Card>

          <Card>
            <p><Label color="green">STARTER APPS</Label></p>
            <p>Brain for durable memory, Kanban for work in flight, Situations for operational state &mdash; the stack we build LastDB with, shipped with the install, yours to extend.</p>
          </Card>

          <Card>
            <p><Label color="green">SCHEMA REGISTRY</Label></p>
            <p>A shared vocabulary of schemas so tools and nodes interoperate without centralizing data. Publish a schema once; every client speaks it.</p>
          </Card>
        </div>
      </Section>

      <Section variant="amber">
        <h2><span className="bold">DATA INGESTION</span> <span className="dim">Bringing data under your control</span></h2>

        <div className="grid-2">
          <Card>
            <p><Label color="yellow">SELF-INGESTION</Label></p>
            <p>Import documents, media, code, emails, notes, and data files directly from your devices. Format-aware parsing aligns to natural boundaries &mdash; functions in code, paragraphs in prose, records in data.</p>
          </Card>

          <Card>
            <p><Label color="yellow">THIRD-PARTY WRITES</Label></p>
            <p>Applications and services can write into your store with explicit permission. Receipts, records, collaborator notes &mdash; they land in your database, under your control.</p>
          </Card>

          <Card>
            <p><Label color="yellow">DELTA SCANNING</Label></p>
            <p>A background daemon watches your file system for changes. BLAKE3 hashing detects modifications efficiently; only what changed is re-indexed.</p>
          </Card>

          <Card>
            <p><Label color="yellow">FORMAT SUPPORT</Label></p>
            <p>Markdown, plain text, PDF, DOCX, HTML, LaTeX, JSON, CSV, YAML, TOML, XML, email, and code in all major languages via tree-sitter.</p>
          </Card>
        </div>
      </Section>

      <Section variant="rose">
        <h2><span className="bold">OWNERSHIP BY DESIGN</span> <span className="dim">Yours, on your machine</span></h2>

        <div className="grid-3">
          <Card>
            <p><Label color="red">LOCAL BY DEFAULT</Label></p>
            <p>Your database is one small daemon on your machine, encrypted at rest. Local use needs no account. Cloud backup is optional and holds only what you choose.</p>
          </Card>

          <Card>
            <p><Label color="red">LIGHTWEIGHT BY DESIGN</Label></p>
            <p>No heavyweight cryptographic ceremony. A lighter, personal identity system keeps writing and building fast &mdash; the database is yours, on your hardware, so trust follows ownership.</p>
          </Card>

          <Card>
            <p><Label color="red">PORTABLE FOREVER</Label></p>
            <p>Open protocols, published schemas, and local files. Your data is yours to keep, move, or delete &mdash; no export request, no lock-in, no closed ecosystem.</p>
          </Card>
        </div>
      </Section>

      <Section variant="lavender">
        <h2><span className="bold">DELIVER</span> <span className="dim">Slices of your database, on your terms</span></h2>

        <div className="grid-3">
          <Card>
            <p><Label color="purple">DELIVERY SLICES</Label></p>
            <p>Hand a curated slice of your database &mdash; a digest, a dataset, a rollup &mdash; to a person or an app. The recipient gets a usable piece of your stack; you keep the source.</p>
          </Card>

          <Card>
            <p><Label color="purple">YOU SET THE TERMS</Label></p>
            <p>You choose what goes in a slice, who receives it, and when it refreshes. Delivery is explicit and consent-gated &mdash; nothing leaves your database by default.</p>
          </Card>

          <Card>
            <p><Label color="purple">CLOUD AS A RAIL</Label></p>
            <p>Exemem moves your data between your devices and the people you invite: backup, sync, and slice delivery. A rail, not a platform &mdash; your database, everywhere, still yours.</p>
          </Card>
        </div>
      </Section>

      <div className="cta-block">
        <p>Want the full technical details?</p>
        <p>
          <Link to="/papers" className="link-btn">[Read the Papers]</Link>{'  '}
          <a href="https://github.com/EdgeVector" target="_blank" rel="noreferrer" className="link-btn">[View the Source]</a>
        </p>
      </div>
    </>
  );
}
