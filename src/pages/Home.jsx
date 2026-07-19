import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import Card from '../components/Card';
import Label from '../components/Label';
import AsciiTitle from '../components/AsciiTitle';
import AsciiMigration from '../components/AsciiMigration';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Edge Vector Foundation — Building a Path Toward Individual Data Ownership</title>
        <meta name="description" content="Edge Vector Foundation is building a path toward individual data ownership. We build open technology so people own their data — and the whole tool stack built on it." />
        <meta name="keywords" content="data ownership, personal data, user control, own your tool stack, data ingestion, permissioned APIs, open source, data provenance" />
        <meta property="og:title" content="Edge Vector Foundation — Building a Path Toward Individual Data Ownership" />
        <meta property="og:description" content="People — not corporations — should determine how their data is stored, accessed, and used. We build the open ecosystem to make that real." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edgevector.org/" />
        <meta property="og:site_name" content="Edge Vector Foundation" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Edge Vector Foundation" />
        <meta name="twitter:description" content="Building a path toward individual data ownership through open technology." />
        <link rel="canonical" href="https://edgevector.org/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Edge Vector Foundation",
          "description": "A non-profit building a path toward individual data ownership.",
          "url": "https://edgevector.org/",
          "isPartOf": { "@type": "WebSite", "name": "Edge Vector Foundation", "url": "https://edgevector.org" }
        })}</script>
      </Helmet>

      <AsciiTitle lines={['EDGE', 'VECTOR']} />
      <hr className="decorative-rule" aria-hidden="true" />
      <h1 className="tagline">Building a path toward individual data ownership.</h1>
      <hr className="decorative-rule" aria-hidden="true" />
      <br />

      <p>The Edge Vector Foundation exists to ensure that <span className="bold white">people &mdash; not corporations or centralized platforms</span> &mdash; determine how their data is stored, accessed, and used.</p>

      <p>We are building an <span className="bold white">open ecosystem</span> where your tools are clients of a database you own &mdash; and where you can deliver slices of your data to the people and apps you choose.</p>

      <p>Declare a schema, write a thin client, and <span className="bold white">build your own apps</span> &mdash; by hand or with agents &mdash; on data that is yours to keep, move, or delete.</p>

      <Section variant="rose">
        <h2><span className="bold">FROM CLOUD TO LOCAL</span></h2>
        <AsciiMigration />
        <p className="dim">The apps, the databases, and the models are coming home.</p>
      </Section>

      <Section variant="slate">
        <h2><span className="bold">WHAT WE BUILD</span></h2>

        <div className="grid-3">
          <Card>
            <p><Label color="red">BUILD</Label></p>
            <p>Declare a schema, write a thin client &mdash; storage, indexing, and semantic search are already there. Build your own tools fast; own the whole stack.</p>
          </Card>

          <Card>
            <p><Label color="purple">DELIVER</Label></p>
            <p>Hand curated slices of your database to the people and apps you choose. You set the terms; you keep the source.</p>
          </Card>

          <Card>
            <p><Label color="green">INGEST</Label></p>
            <p>Import your files, or let applications write with your permission. Everything becomes structured, queryable data in one place.</p>
          </Card>
        </div>

        <p>
          <Link to="/technology" className="link-btn">[How it works]</Link>{'  '}
          <Link to="/papers" className="link-btn">[Read the research]</Link>
        </p>
      </Section>

      <Section variant="sage" id="projects">
        <h2><span className="bold">PROJECTS</span></h2>

        <div className="grid-2">
          <Card>
            <p><Label color="blue">LASTDB</Label></p>
            <p>The local database you build your own tool stack on. One process on your machine &mdash; schema-based storage, indexing, and semantic search built in. Alpha, macOS Apple Silicon.</p>
            <p>
              <a href="https://thelastdb.com" target="_blank" rel="noreferrer" className="link-btn">[Website]</a>{'  '}
              <a href="https://github.com/EdgeVector" target="_blank" rel="noreferrer" className="link-btn">[GitHub]</a>
            </p>
          </Card>

          <Card>
            <p><Label color="blue">EXEMEM</Label></p>
            <p>The cloud counterpart: backup, sync, and sharing for LastDB nodes across your devices and the people you invite. Multi-tenant, per-user encryption.</p>
            <p>
              <a href="https://exemem.com" target="_blank" rel="noreferrer" className="link-btn">[Website]</a>
            </p>
          </Card>
        </div>

        <div className="grid-2">
          <Card>
            <p><Label color="orange">STARTER APPS</Label></p>
            <p>Brain for durable memory, Kanban for work in flight, Situations for operational state &mdash; the stack we build LastDB with, shipped with the install, yours to extend.</p>
          </Card>

          <Card>
            <p><Label color="orange">SCHEMA REGISTRY</Label></p>
            <p>A shared vocabulary of schemas so tools and nodes interoperate without centralizing data.</p>
          </Card>
        </div>

        <p className="dim">Edge Vector is currently in active research and development. Open-source code and tooling are on <a href="https://github.com/EdgeVector" target="_blank" rel="noreferrer">GitHub</a>.</p>
      </Section>

      <div className="cta-block">
        <p className="tagline">Your Data. Your Ownership.</p>

        <p>
          <Link to="/technology" className="link-btn">[Technology]</Link>{'  '}
          <Link to="/papers" className="link-btn">[Papers]</Link>{'  '}
          <Link to="/about" className="link-btn">[About the Foundation]</Link>{'  '}
          <a href="mailto:contact@edgevector.org" className="link-btn">[Contact]</a>
        </p>
      </div>
    </>
  );
}
