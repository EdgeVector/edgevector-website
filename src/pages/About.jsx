import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import Card from '../components/Card';
import Label from '../components/Label';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Edge Vector Foundation</title>
        <meta name="description" content="Edge Vector Foundation is a non-profit advancing data sovereignty and collective private computing through open-source infrastructure. Learn about our mission, principles, and organizational structure." />
        <meta name="keywords" content="Edge Vector Foundation, non-profit, data sovereignty, open source, privacy, collective computing, mission" />
        <meta property="og:title" content="About — Edge Vector Foundation" />
        <meta property="og:description" content="A non-profit dedicated to collective computing with privacy. Open governance, community-driven, no shareholders." />
        <meta property="og:url" content="https://edgevector.org/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About — Edge Vector Foundation" />
        <link rel="canonical" href="https://edgevector.org/about" />
      </Helmet>

      <h1 className="tagline">About the Foundation</h1>
      <hr className="decorative-rule" aria-hidden="true" />

      <p>Edge Vector Foundation is a <span className="bold white">non-profit organization</span> dedicated to advancing data sovereignty and collective private computing through open-source software.</p>

      <p>We believe the current model &mdash; where people must surrender their data in plaintext to access AI &mdash; is neither inevitable nor acceptable. We build the tools that prove there&rsquo;s a better way: <span className="bold white">collective intelligence without collective exposure</span>.</p>

      <Section variant="sage">
        <h2><span className="bold">MISSION</span></h2>

        <p>To ensure every person can benefit from AI &mdash; individually and collectively &mdash; without sacrificing control over their personal data. We build open-source infrastructure where data stays encrypted, the cloud provides resilience, and networks of people can compute together without seeing each other&rsquo;s raw information.</p>
      </Section>

      <Section variant="slate">
        <h2><span className="bold">PRINCIPLES</span> <span className="dim">What we stand for</span></h2>

        <ul className="principle-list">
          <li><span className="bold white">Encrypted everywhere</span> &mdash; Data is encrypted at rest, in transit, and in the cloud. Keys stay on the user&rsquo;s device. The cloud stores ciphertext. Zero-knowledge by design.</li>
          <li><span className="bold white">Collective without exposure</span> &mdash; Networks of nodes can answer queries together without revealing underlying data. You get insights from the group. The group never sees your raw information.</li>
          <li><span className="bold white">Cloud for resilience, not surveillance</span> &mdash; The cloud provides backup, sync, and networked computing. It never sees plaintext. If the cloud is compromised, your data remains unreadable.</li>
          <li><span className="bold white">Index, don&rsquo;t copy</span> &mdash; Build retrieval layers over existing files rather than duplicating data into yet another silo.</li>
          <li><span className="bold white">Open by default</span> &mdash; Every tool, protocol, and schema is open source. No proprietary lock-in. No closed ecosystems.</li>
          <li><span className="bold white">User agency</span> &mdash; People decide what to share, with whom, and for how long. Real revocation, not permission theater.</li>
        </ul>
      </Section>

      <Section variant="amber">
        <h2><span className="bold">STRUCTURE</span> <span className="dim">How we&rsquo;re organized</span></h2>

        <div className="grid-2">
          <Card>
            <p><Label color="yellow">NON-PROFIT FOUNDATION</Label></p>
            <p>The Edge Vector Foundation governs the open-source ecosystem. We maintain FoldDB, the schema registry, and the network protocols. Our mandate is the long-term health of the private computing stack.</p>
            <p className="dim">Open governance. Community-driven. No shareholders.</p>
          </Card>

          <Card>
            <p><Label color="yellow">COMMERCIAL SUBSIDIARY</Label></p>
            <p>A for-profit subsidiary builds commercial products on top of the open-source foundation. Revenue funds continued development of the free tools. The subsidiary can never close-source the foundation&rsquo;s work.</p>
            <p className="dim">Sustainable funding. Aligned incentives.</p>
          </Card>
        </div>

        <p>This structure ensures the core infrastructure remains free and open while creating a sustainable path for long-term development. The foundation sets the direction. The subsidiary funds the work.</p>
      </Section>

      <Section variant="lavender">
        <h2><span className="bold">THE LONG VIEW</span> <span className="dim">Where we&rsquo;re headed</span></h2>

        <p>Today, we&rsquo;re building the tools for individuals to reclaim their data. Tomorrow, we&rsquo;re building a <span className="bold white">network of sovereign AI nodes</span> that think together without exposing each other&rsquo;s information.</p>

        <p>Imagine asking your AI: &ldquo;Show me photos that other people took of me at the conference.&rdquo; The network finds them across your contacts&rsquo; encrypted photo libraries. You see the results. No one else&rsquo;s photos are browsed or exposed.</p>

        <p>Or: &ldquo;Which of my friends have visited Barcelona? What should I see?&rdquo; The network surfaces travel insights without revealing which friend went, when, or what they did there.</p>

        <p>This is <span className="bold white">collective computing with privacy</span> &mdash; the power of connected intelligence without the cost of surrendered data.</p>
      </Section>

      <Section variant="rose">
        <h2><span className="bold">GET INVOLVED</span></h2>

        <p>Edge Vector Foundation is an open community. Whether you&rsquo;re a developer, researcher, privacy advocate, or someone who believes in a better model for AI &mdash; there&rsquo;s a place for you.</p>

        <p>
          <a href="https://github.com/shiba4life/fold_db" target="_blank" rel="noreferrer" className="link-btn">[Contribute on GitHub]</a>{'  '}
          <a href="https://github.com/shiba4life/fold_db/discussions" target="_blank" rel="noreferrer" className="link-btn">[Join the Discussion]</a>{'  '}
          <a href="https://github.com/shiba4life/fold_db/issues" target="_blank" rel="noreferrer" className="link-btn">[Report Issues]</a>
        </p>
      </Section>
    </>
  );
}
