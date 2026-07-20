import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import Card from '../components/Card';
import Label from '../components/Label';

const PAPERS = [
  {
    category: 'Schema Systems',
    color: 'green',
    items: [
      {
        title: 'Preventing Data Structure Fragmentation Through Canonical Schema and Field Resolution',
        authors: 'Tom Tang, Fei Jia',
        description: 'Two-tier canonicalization using vector embeddings to resolve schema-level and field-level fragmentation, with zero-migration schema expansion via field mappers to deprecated schemas. The foundation of the shared schema registry.',
        pdf: '/papers/canonical_fields_via_embeddings.pdf',
        simplified: [
          { label: 'ELI5 Version', pdf: '/papers/canonical_fields_via_embeddings_eli5.pdf' },
        ],
      },
    ],
  },
];

export default function Papers() {
  return (
    <>
      <Helmet>
        <title>Papers — Edge Vector Foundation</title>
        <meta name="description" content="Technical papers from the Edge Vector Foundation: canonical schema and field resolution — the schema systems behind LastDB." />
        <meta name="keywords" content="Edge Vector papers, LastDB, data ownership, canonical schemas, field resolution, schema registry" />
        <meta property="og:title" content="Papers — Edge Vector Foundation" />
        <meta property="og:description" content="Technical papers on the schema systems behind LastDB." />
        <meta property="og:url" content="https://edgevector.org/papers" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Edge Vector Foundation — Papers" />
        <link rel="canonical" href="https://edgevector.org/papers" />
      </Helmet>

      <h1 className="tagline">Papers</h1>
      <p className="subtitle">Technical papers from the Edge Vector Foundation</p>

      {PAPERS.map((section) => (
        <Section key={section.category} variant="slate">
          <h2><span className="bold">{section.category.toUpperCase()}</span></h2>
          <div className="papers-list">
            {section.items.map((paper) => (
              <Card key={paper.pdf || paper.link}>
                <p><Label color={section.color}>{paper.authors}</Label></p>
                <h3 className="paper-title">
                  {paper.link
                    ? <Link to={paper.link}>{paper.title}</Link>
                    : <a href={paper.pdf} target="_blank" rel="noreferrer">{paper.title}</a>
                  }
                </h3>
                <p>{paper.description}</p>
                <p>
                  {paper.link && <Link to={paper.link} className="link-btn">[{paper.linkLabel || 'Read'}]</Link>}
                  {paper.pdf && <a href={paper.pdf} target="_blank" rel="noreferrer" className="link-btn">[PDF]</a>}
                  {paper.simplified && paper.simplified.map((s) => (
                    <span key={s.pdf}>
                      {'  '}
                      <a href={s.pdf} target="_blank" rel="noreferrer" className="link-btn">[{s.label}]</a>
                    </span>
                  ))}
                </p>
              </Card>
            ))}
          </div>
        </Section>
      ))}

      <div className="cta-block">
        <p>
          <a href="https://thelastdb.com" target="_blank" rel="noreferrer" className="link-btn">[Get LastDB]</a>{'  '}
          <Link to="/technology" className="link-btn">[Technology Overview]</Link>{'  '}
          <Link to="/about" className="link-btn">[About the Foundation]</Link>
        </p>
      </div>
    </>
  );
}
