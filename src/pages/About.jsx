import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import Card from '../components/Card';
import Label from '../components/Label';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Edge Vector Foundation</title>
        <meta name="description" content="Edge Vector Foundation is a non-profit building a path toward individual data ownership through open technology. Learn about our mission, principles, and organizational structure." />
        <meta name="keywords" content="Edge Vector Foundation, non-profit, data ownership, personal data control, open source, own your tool stack, mission" />
        <meta property="og:title" content="About — Edge Vector Foundation" />
        <meta property="og:description" content="A non-profit dedicated to ensuring people — not corporations — control their personal data." />
        <meta property="og:url" content="https://edgevector.org/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About — Edge Vector Foundation" />
        <link rel="canonical" href="https://edgevector.org/about" />
      </Helmet>

      <h1 className="tagline">About the Foundation</h1>
      <hr className="decorative-rule" aria-hidden="true" />

      <p>Edge Vector Foundation is a <span className="bold white">non-profit organization</span> building a path toward individual data ownership.</p>

      <p>We believe that people &mdash; not corporations or centralized platforms &mdash; should determine how their data is stored, accessed, and used. We build the open ecosystem that makes this possible: <span className="bold white">a database you own, with every tool you use built on it</span>.</p>

      <Section variant="sage">
        <h2><span className="bold">MISSION</span></h2>

        <p>To ensure that every person controls their own data &mdash; how it is stored, who can access it, and how it is used. We build open technology for seamless data ingestion, practical data use, fast tool-building, and long-term personal data resilience.</p>
      </Section>

      <Section variant="slate">
        <h2><span className="bold">PRINCIPLES</span> <span className="dim">What we stand for</span></h2>

        <ul className="principle-list">
          <li><span className="bold white">User control is non-negotiable</span> &mdash; People decide what data to store, who can access it, and for how long. Real revocation, not permission theater.</li>
          <li><span className="bold white">Ownership by default</span> &mdash; Your database runs on your machine. Tools are clients of it, not custodians of copies; swap a tool and keep the data.</li>
          <li><span className="bold white">Lightweight and personal</span> &mdash; No heavyweight cryptographic ceremony. A lighter, personal system keeps building fast, and data provenance keeps derived data traceable.</li>
          <li><span className="bold white">Practical ownership</span> &mdash; Data control is meaningful only when people can use their data &mdash; through personal assistants, selective disclosure, and permissioned APIs.</li>
          <li><span className="bold white">Built for decades</span> &mdash; Personal data infrastructure must be resilient, with secure cloud backups and accessible permission management for non-technical users.</li>
          <li><span className="bold white">Open by design</span> &mdash; Open protocols, open schemas, and published research keep your data portable. No proprietary lock-in. No closed ecosystems.</li>
        </ul>
      </Section>

      <Section variant="amber">
        <h2><span className="bold">STRUCTURE</span> <span className="dim">How we&rsquo;re organized</span></h2>

        <div className="grid-2">
          <Card>
            <p><Label color="yellow">NON-PROFIT FOUNDATION</Label></p>
            <p>The Edge Vector Foundation governs the open ecosystem. We maintain LastDB, the schema registry, and the network protocols. Our mandate is the long-term health of personal data infrastructure.</p>
            <p className="dim">Open governance. Community-driven. No shareholders.</p>
          </Card>

          <Card>
            <p><Label color="yellow">COMMERCIAL SUBSIDIARY</Label></p>
            <p>A for-profit subsidiary builds commercial products on top of the foundation&rsquo;s technology. Revenue funds continued development of the free tools. The subsidiary can never close-source the foundation&rsquo;s published work.</p>
            <p className="dim">Sustainable funding. Aligned incentives.</p>
          </Card>
        </div>

        <p>This structure ensures the core infrastructure remains free and open while creating a sustainable path for long-term development. The foundation sets the direction. The subsidiary funds the work.</p>
      </Section>

      <Section variant="slate">
        <h2><span className="bold">TEAM</span> <span className="dim">Who&rsquo;s building this</span></h2>

        <div className="grid-3">
          <Card>
            <p><Label color="blue">TOM TANG</Label></p>
            <p className="bold white">Founder, Chair &amp; President</p>
            <p>Lead architect of LastDB and primary author of the foundation&rsquo;s technical papers.</p>
            <p>
              <a href="https://www.linkedin.com/in/tom-tang-65579616/" target="_blank" rel="noreferrer" className="link-btn">[LinkedIn]</a>
            </p>
          </Card>

          <Card>
            <p><Label color="blue">FEI JIA</Label></p>
            <p className="bold white">Director &amp; Treasurer</p>
            <p>Software Engineer at Google. Co-author of the foundation&rsquo;s paper on canonical schema and field resolution.</p>
            <p>
              <a href="https://www.linkedin.com/in/feijia1/" target="_blank" rel="noreferrer" className="link-btn">[LinkedIn]</a>
            </p>
          </Card>

          <Card>
            <p><Label color="blue">CEDRIC HURST</Label></p>
            <p className="bold white">Director &amp; Secretary</p>
            <p>Founder &amp; CEO of Spantree, a Trifork Company &mdash; a Chicago-based engineering consultancy. 25+ years building software, with a focus on user experience, decision-making tools, and disruptive technologies.</p>
            <p>
              <a href="https://www.linkedin.com/in/cedrichurst/" target="_blank" rel="noreferrer" className="link-btn">[LinkedIn]</a>
            </p>
          </Card>
        </div>
      </Section>

      <Section variant="lavender">
        <h2><span className="bold">THE LONG VIEW</span> <span className="dim">Where we&rsquo;re headed</span></h2>

        <p>Today, we&rsquo;re building the tools for individuals to own their data and the whole stack on top of it. Tomorrow, an ecosystem where <span className="bold white">value moves between people because they choose to send it</span> &mdash; not because a platform holds everyone&rsquo;s data.</p>

        <p>Imagine handing your doctor a slice of your health history that stays current. Or delivering a curated dataset to a collaborator &mdash; they get a usable piece of your stack; you keep the source. Or your agent assembling a digest from your notes and delivering it to your team every Monday.</p>

        <p>This is the vision: <span className="bold white">individual control with collective benefit</span> &mdash; personal data infrastructure that serves people, not platforms.</p>
      </Section>

      <Section variant="rose">
        <h2><span className="bold">GET INVOLVED</span></h2>

        <p>Edge Vector Foundation is an open community. Whether you&rsquo;re a developer, researcher, or someone who believes in a better model for personal data &mdash; there&rsquo;s a place for you.</p>

        <p>
          <a href="https://github.com/EdgeVector" target="_blank" rel="noreferrer" className="link-btn">[Contribute on GitHub]</a>{'  '}
          <a href="mailto:contact@edgevector.org" className="link-btn">[Contact the Foundation]</a>{'  '}
          <Link to="/technology" className="link-btn">[Technology]</Link>
        </p>
      </Section>
    </>
  );
}
