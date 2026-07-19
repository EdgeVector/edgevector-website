import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import Card from '../components/Card';
import Label from '../components/Label';
import AsciiTitle from '../components/AsciiTitle';

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

      <p>This makes a new generation of <span className="bold white">on-device AI</span> possible: assistants and agents that can reason over your full personal context &mdash; your notes, files, calendar, messages &mdash; running on your device, with your data never leaving it.</p>

      <Section variant="slate">
        <h2><span className="bold">WHAT WE BUILD</span></h2>

        <div className="grid-3">
          <Card>
            <p><Label color="green">INGEST</Label></p>
            <p>Bring your data in. Import files from your devices or let applications write with your permission. Your files become structured, queryable knowledge.</p>
          </Card>

          <Card>
            <p><Label color="red">BUILD</Label></p>
            <p>Build your own tools on your data. Declare a schema, write a thin client &mdash; storage, indexing, and semantic search are already there. Own the whole stack.</p>
          </Card>

          <Card>
            <p><Label color="purple">DELIVER</Label></p>
            <p>Choose what to deliver and to whom. Hand curated slices of your database to people and apps. You set the terms; you keep the source.</p>
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
            <p>The core database. Schema-based storage and querying for personal data. Runs locally with encrypted cloud backup. The foundation for user-controlled data infrastructure.</p>
            <p>
              <a href="https://thelastdb.com" target="_blank" rel="noreferrer" className="link-btn">[Website]</a>{'  '}
              <a href="https://github.com/EdgeVector" target="_blank" rel="noreferrer" className="link-btn">[GitHub]</a>
            </p>
          </Card>

          <Card>
            <p><Label color="blue">EXEMEM</Label></p>
            <p>Cloud-resilient infrastructure for networked LastDB nodes. Multi-tenant architecture with user-level encryption. Enables collective computation while preserving individual sovereignty.</p>
            <p>
              <a href="https://exemem.com" target="_blank" rel="noreferrer" className="link-btn">[Website]</a>
            </p>
          </Card>
        </div>

        <div className="grid-2">
          <Card>
            <p><Label color="orange">SCHEMA REGISTRY</Label></p>
            <p>A shared vocabulary for data schemas that enables interoperability across nodes without centralizing data.</p>
          </Card>

          <Card>
            <p><Label color="orange">FILE_TO_MARKDOWN</Label></p>
            <p>A universal ingestion pipeline for converting diverse file types into structured Markdown for seamless data ingestion. Now part of the LastDB core.</p>
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
