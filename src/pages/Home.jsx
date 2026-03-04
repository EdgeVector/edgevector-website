import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import Card from '../components/Card';
import Label from '../components/Label';

// Removed static ASCII art — using CSS-scaled text instead

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Edge Vector Foundation — Collective Computing with Privacy</title>
        <meta name="description" content="Edge Vector Foundation is a non-profit building open infrastructure for private AI and collective computing. AI runs on your data — encrypted, local-first, cloud-resilient." />
        <meta name="keywords" content="data sovereignty, private AI, edge computing, collective computing, FoldDB, encrypted AI, local-first, open source, vector database, privacy" />
        <meta property="og:title" content="Edge Vector Foundation — Collective Computing with Privacy" />
        <meta property="og:description" content="Secure compute on your data — where your data lives. Open infrastructure for private AI, collective intelligence, and data sovereignty." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edgevector.org/" />
        <meta property="og:site_name" content="Edge Vector Foundation" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Edge Vector Foundation" />
        <meta name="twitter:description" content="Collective computing with privacy. Your data stays encrypted — even when the network works together." />
        <link rel="canonical" href="https://edgevector.org/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Edge Vector Foundation",
          "description": "A non-profit building open infrastructure for private AI and collective computing.",
          "url": "https://edgevector.org/",
          "isPartOf": { "@type": "WebSite", "name": "Edge Vector Foundation", "url": "https://edgevector.org" }
        })}</script>
      </Helmet>

      <div className="hero-title" aria-label="Edge Vector">
        <span className="hero-title-line">EDGE</span>
        <span className="hero-title-line">VECTOR</span>
      </div>
      <hr className="decorative-rule" aria-hidden="true" />
      <h1 className="tagline">Secure compute on your data &mdash; where your data lives.</h1>
      <hr className="decorative-rule" aria-hidden="true" />
      <br />

      <p>The Edge Vector Foundation is a <span className="bold white">non-profit</span> advancing the infrastructure for private AI and data sovereignty.</p>

      <p>We build open technology that allows AI to work across people&rsquo;s data &mdash; on their devices and in the cloud &mdash; without ever exposing the underlying information.</p>

      <p><span className="bold white">AI should come to your data.</span><br />
      Your data should never have to leave unencrypted.</p>

      <p>
        <a href="#mission" className="link-btn">[Our Mission]</a>{'  '}
        <a href="#projects" className="link-btn">[Projects]</a>{'  '}
        <Link to="/whitepaper" className="link-btn">[Whitepaper]</Link>
      </p>

      <Section variant="rose">
        <h2><span className="bold">THE PROBLEM</span> <span className="dim">AI today requires surrendering your data</span></h2>

        <p>Modern AI systems are powerful &mdash; but they require a dangerous trade-off.</p>

        <p>To use them, people must upload their most sensitive information <span className="bold white">in plaintext</span> to remote servers owned by corporations.</p>

        <p>Medical records.<br />
        Financial documents.<br />
        Private conversations.<br />
        Proprietary code.<br />
        Personal photos.</p>

        <p>Once uploaded, that data leaves your control.</p>

        <p><span className="bold white">This is not a necessity of AI.</span><br />
        It is a design flaw in today&rsquo;s infrastructure.</p>

        <h2 className="section-subheading"><span className="dim">Cloud AI creates three systemic risks</span></h2>

        <div className="grid-3">
          <Card><p><Label color="red">PERMANENT DATA EXPOSURE</Label></p><p>
            Every interaction with a cloud AI system sends private data to infrastructure you do not control.</p></Card>

          <Card><p><Label color="red">FRAGMENTED KNOWLEDGE</Label></p><p>
            Your data is scattered across dozens of services. No system can understand the full picture without aggregating it in one place &mdash; in plaintext.</p></Card>

          <Card><p><Label color="red">FALSE TRADE-OFF</Label></p><p>
            Today&rsquo;s systems force a choice between powerful AI and private data.</p>
            <p><span className="bold white">That trade-off is artificial.</span></p></Card>
        </div>
      </Section>

      <Section variant="sage" id="mission">
        <h2><span className="bold">OUR MISSION</span> <span className="dim">Collective computing with privacy</span></h2>

        <p>The Edge Vector Foundation develops open infrastructure that enables secure AI computation &mdash; locally on your device and across the network &mdash; without exposing your underlying data.</p>

        <p>Your data is <span className="bold white">always encrypted</span>. The cloud is used for resilience and networked computing &mdash; but it only ever sees ciphertext. Queries produce answers, not data transfers.</p>

        <p>This architecture enables:</p>

        <div className="grid-3">
          <Card><p><Label color="green">PRIVATE AI</Label></p><p>
            Models run locally. Cloud backups are encrypted client-side. Your plaintext data never leaves your control.</p></Card>

          <Card><p><Label color="green">COLLECTIVE INTELLIGENCE</Label></p><p>
            Query across the network &mdash; find photos others took of you, discover places your friends visited abroad &mdash; without anyone revealing their raw data or identity.</p></Card>

          <Card><p><Label color="green">OPEN INFRASTRUCTURE</Label></p><p>
            The ecosystem is open-source and interoperable &mdash; not controlled by a single vendor.</p></Card>
        </div>
      </Section>

      <Section variant="slate">
        <h2><span className="bold">THE ARCHITECTURE</span> <span className="dim">Edge-first, cloud-resilient</span></h2>

        <p>Our work centers on a simple principle:</p>

        <p><span className="bold white">Compute moves to data. Data does not move to compute.</span></p>

        <p>This is achieved through three core ideas:</p>

        <div className="grid-3">
          <Card><p><Label color="blue">LOCAL AI EXECUTION</Label></p><p>
            Modern models can run on consumer hardware. AI inference starts on the device you own. The cloud provides resilience, not access to your plaintext.</p></Card>

          <Card><p><Label color="blue">ENCRYPTED NETWORK LAYER</Label></p><p>
            Nodes share encrypted indices and answer queries across the network. The system returns insights &mdash; never raw data. Your photos, documents, and messages stay private even when the network collaborates.</p></Card>

          <Card><p><Label color="blue">SOVEREIGN DATA NODES</Label></p><p>
            Individual devices form a network of private AI systems. Each node can selectively participate in collective queries &mdash; contributing answers without exposing the underlying information.</p></Card>
        </div>

        <p>This creates a <span className="bold white">network of private AI systems that think together</span> &mdash; not a centralized intelligence service.</p>
      </Section>

      <Section variant="amber">
        <h2><span className="bold">WHAT THIS LOOKS LIKE</span></h2>

        <p>Collective computing with privacy means asking questions across people&rsquo;s data without anyone surrendering it.</p>

        <div className="grid-2">
          <Card>
            <p><Label color="yellow">FIND YOUR PHOTOS</Label></p>
            <p>&ldquo;Show me photos other people have taken of me.&rdquo;</p>
            <p>The network queries across your friends&rsquo; photo libraries. Matches are returned to you. <span className="bold">No one else&rsquo;s photos are exposed.</span> The system finds the answer without moving the data.</p>
          </Card>

          <Card>
            <p><Label color="yellow">TRAVEL INTELLIGENCE</Label></p>
            <p>&ldquo;Which of my friends have been to Tokyo? What did they recommend?&rdquo;</p>
            <p>The network identifies relevant experiences and surfaces recommendations. <span className="bold">Without revealing which friend, or their underlying trip data.</span> You get the insight. They keep their privacy.</p>
          </Card>
        </div>

        <div className="grid-2">
          <Card>
            <p><Label color="yellow">COLLECTIVE RESEARCH</Label></p>
            <p>&ldquo;Has anyone in my team written about this architecture pattern?&rdquo;</p>
            <p>Query across your organization&rsquo;s knowledge base. Find relevant expertise. <span className="bold">Without centralizing everyone&rsquo;s documents on a shared server.</span></p>
          </Card>

          <Card>
            <p><Label color="yellow">PRIVATE VERIFICATION</Label></p>
            <p>&ldquo;Can this person afford this mortgage?&rdquo;</p>
            <p>A lender gets a signed yes/no answer from your AI mediator. <span className="bold">No bank statements, pay stubs, or tax returns ever leave your device.</span></p>
          </Card>
        </div>
      </Section>

      <Section variant="lavender">
        <h2><span className="bold">WHY NOW</span></h2>

        <p>Three technological shifts make private collective computing possible for the first time.</p>

        <div className="grid-3">
          <Card>
            <p><Label color="purple">LOCAL MODELS</Label></p>
            <p>Models with billions of parameters now run on consumer laptops and desktops.</p>
          </Card>

          <Card>
            <p><Label color="purple">COMMODITY STORAGE</Label></p>
            <p>Multi-terabyte NVMe drives are inexpensive and fast enough to hold lifetime personal archives plus encrypted cloud replicas.</p>
          </Card>

          <Card>
            <p><Label color="purple">EXPLODING PERSONAL DATA</Label></p>
            <p>People generate more information than ever before. The collective value of this data is enormous &mdash; but only if it can be queried without being exposed.</p>
          </Card>
        </div>

        <p><span className="bold white">The next generation of AI infrastructure must be private by default and collective by design.</span></p>
      </Section>

      <Section variant="sage" id="projects">
        <h2><span className="bold">PROJECTS</span></h2>

        <p>The Edge Vector Foundation develops open-source tools that enable this architecture.</p>

        <div className="grid-2">
          <Card>
            <p><Label color="green">FOLDDB</Label></p>
            <p>The core database. AI-native storage and querying for personal data. Runs locally with encrypted cloud backup. The foundation for private knowledge and collective queries.</p>
            <p>
              <a href="https://folddb.com" target="_blank" rel="noreferrer" className="link-btn">[Website]</a>{'  '}
              <a href="https://github.com/shiba4life/fold_db" target="_blank" rel="noreferrer" className="link-btn">[GitHub]</a>
            </p>
          </Card>

          <Card>
            <p><Label color="green">EXEMEM</Label></p>
            <p>Cloud-resilient infrastructure for networked FoldDB nodes. Multi-tenant architecture with user-level encryption. Enables collective computing across teams and communities while preserving individual sovereignty.</p>
            <p>
              <a href="https://github.com/shiba4life/exemem-infra" target="_blank" rel="noreferrer" className="link-btn">[GitHub]</a>
            </p>
          </Card>
        </div>

        <div className="grid-2">
          <Card>
            <p><Label color="orange">SCHEMA REGISTRY</Label></p>
            <p>A shared vocabulary for data schemas that enables interoperability across nodes without centralizing data.</p>
            <p>
              <a href="https://schema.folddb.com" target="_blank" rel="noreferrer" className="link-btn">[Registry]</a>
            </p>
          </Card>

          <Card>
            <p><Label color="orange">FILE_TO_JSON</Label></p>
            <p>A universal ingestion pipeline for converting diverse file types into structured data for the FoldDB ecosystem.</p>
            <p>
              <a href="https://github.com/shiba4life/file_to_json" target="_blank" rel="noreferrer" className="link-btn">[GitHub]</a>
            </p>
          </Card>
        </div>
      </Section>

      <div className="cta-block">
        <p className="tagline">The Future of AI is Private and Collective.</p>

        <p>The cloud centralized the internet&rsquo;s data. AI must not repeat that mistake.</p>

        <p>The Edge Vector Foundation exists to build the infrastructure for a world where:</p>

        <p>&bull; individuals control their data<br />
        &bull; AI operates on encrypted information<br />
        &bull; collective intelligence doesn&rsquo;t require surrendering privacy</p>

        <p><span className="bold white">AI should serve people &mdash; together &mdash; without owning their information.</span></p>

        <p>
          <Link to="/whitepaper" className="link-btn">[Read the Whitepaper]</Link>{'  '}
          <a href="#projects" className="link-btn">[Explore the Projects]</a>{'  '}
          <Link to="/about" className="link-btn">[About the Foundation]</Link>
        </p>
      </div>
    </>
  );
}
