import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import '../css/home.css';

// Source: adapted from steward-web's apps/docs home hero (PR #55,
// feat/docs-home-hero) and apps/docs/docs/welcome.md, retitled for this
// guide's four sections (Install, Using Steward, Administration, Reference).
const guideAreas = [
  {
    title: 'Install',
    href: '/docs/install',
    body: 'Bring your own Kubernetes cluster, or use the appliance; secrets, bring-your-own Postgres and high availability.',
  },
  {
    title: 'Using Steward',
    href: '/docs/using-steward/concepts',
    body: 'The big ideas, then the everyday tasks: find a document, read it, acknowledge it, write a draft, review one.',
  },
  {
    title: 'Administration',
    href: '/docs/administration/setup',
    body: 'Set up Steward, manage people and organisations, build the category tree and approval chains.',
  },
  {
    title: 'Reference',
    href: '/docs/reference',
    body: 'A short dictionary of terms you can look up any time.',
  },
];

export default function Home() {
  return (
    <Layout
      title="Steward-GRC"
      description="A plain-language guide to policies and compliance.">
      <header className="home-hero">
        <div className="home-hero__backdrop" aria-hidden="true" />
        <div className="home-hero__grid">
          <div>
            <p className="home-hero__eyebrow">
              <span className="tm-bind">
                Steward-GRC<sup>&trade;</sup>
              </span>{' '}
              docs
            </p>
            <h1 className="home-hero__headline">
              <span>Rules kept.</span>
              <span className="home-hero__headline-accent">
                Voices{' '}
                <span className="tm-bind">
                  heard<sup>&trade;</sup>
                </span>
                .
              </span>
            </h1>
            <p className="home-hero__subline">A plain-language guide to policies and compliance.</p>
            <p className="home-hero__lede">
              Learn how a policy moves from draft to <mark>approved</mark>, how to{' '}
              <mark>acknowledge</mark> what applies to you, and how to find anything in seconds.
            </p>
            <div className="home-hero__actions">
              <Link className="home-hero__btn home-hero__btn--primary" to="/docs/install">
                Start reading
              </Link>
              <Link
                className="home-hero__btn home-hero__btn--secondary"
                to="https://github.com/Steward-GRC/docs">
                View on GitHub
              </Link>
            </div>
            <p className="home-hero__license">
              Steward is open source under the{' '}
              <Link to="https://github.com/Steward-GRC/docs/blob/main/LICENSE">
                Apache License 2.0
              </Link>
              . Only the name, the logo and the tagline are trademarks.
            </p>
          </div>
          <div className="home-terminal" role="img" aria-label="Illustrative guide map">
            <div className="home-terminal__bar">
              <span className="home-terminal__dot" />
              <span className="home-terminal__dot" />
              <span className="home-terminal__dot" />
              <span className="home-terminal__title">steward-grc guide</span>
            </div>
            <pre className="home-terminal__body">
              <code>
                {'install          bring your own cluster\n' +
                  'using-steward    everyday tasks\n' +
                  'administration   set up and manage\n' +
                  'reference        a short glossary'}
              </code>
            </pre>
          </div>
        </div>
      </header>
      <section className="home-links">
        {guideAreas.map((area) => (
          <Link key={area.href} className="home-links__card" to={area.href}>
            <div className="home-links__title">{area.title}</div>
            <div className="home-links__body">{area.body}</div>
          </Link>
        ))}
      </section>
    </Layout>
  );
}
