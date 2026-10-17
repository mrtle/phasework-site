import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import logoUrl from "@/assets/vaporware-logo.webp";
import { CredentialsStrip } from "@/components/credentials-strip";

export const Route = createFileRoute("/startups")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Video Production for Startups — Phasework" },
      {
        name: "description",
        content:
          "Phasework is a video production studio for startups: launch films, brand stories, VFX, and motion for technology companies from YC, a16z, and Fortune 300 teams.",
      },
      { property: "og:title", content: "Video Production for Startups — Phasework" },
      {
        property: "og:description",
        content:
          "Launch films, brand stories, VFX, and motion for startups. 200M+ lifetime impressions across Fortune 300, YC, and a16z-backed clients.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vaporware.work/startups" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Video Production for Startups — Phasework" },
      {
        name: "twitter:description",
        content:
          "Launch films, brand stories, VFX, and motion for startups. 200M+ lifetime impressions across Fortune 300, YC, and a16z-backed clients.",
      },
    ],
    links: [{ rel: "canonical", href: "https://vaporware.work/startups" }],
  }),
  component: Startups,
});

function RegistrationMarks() {
  return (
    <div className="registration-marks" aria-hidden="true">
      <i className="reg reg-tl" /><i className="reg reg-tr" />
      <i className="reg reg-bl" /><i className="reg reg-br" />
    </div>
  );
}

function Startups() {
  return (
    <div id="top" className="site-shell">
      <header className="masthead plate-rule">
        <Link className="brand-lockup" to="/" aria-label="Phasework home">
          <span className="brand-logo"><img src={logoUrl} alt="" /></span>
          <span className="brand-name">Phasework</span>
        </Link>
        <p className="spec masthead-note">Independent production studio</p>
        <nav className="spec" aria-label="Primary navigation">
          <Link to="/">Work</Link>
          <a className="btn nav-button" href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-plate animate-build">
          <RegistrationMarks />
          <div className="hero-title-cell">
            <p className="hero-kicker">Video production for startups.</p>
          </div>
          <div className="hero-spec">
            <div className="hero-spec-bar spec"><span>Spec sheet</span><span>For startups</span></div>
            <dl className="hero-spec-rows spec">
              <div><dt>Output</dt><dd>Launch films · Brand stories · VFX · Motion</dd></div>
              <div><dt>For</dt><dd>Startups · YC &amp; a16z-backed</dd></div>
              <div><dt>Base</dt><dd>San Francisco · Los Angeles</dd></div>
              <div><dt>Field</dt><dd>Location and gear rental included</dd></div>
              <div><dt>Brief</dt><dd>Make your launch land.</dd></div>
            </dl>
          </div>
          <div className="hero-quiet-cell" aria-hidden="true"><img src={logoUrl} alt="" /></div>
          <h1 className="hero-wordmark"><span className="hero-wordmark-fit"><span className="wm" style={{ "--em-width": 10.041 } as CSSProperties}><span className="wm-base">Launch films</span><span className="wm-cut" aria-hidden="true">Launch films</span></span></span></h1>
          <div className="hero-readout spec">
            <span>Independent // Global</span>
            <a href="#contact">Start a project ↓</a>
          </div>
        </section>

        <CredentialsStrip />

        <section className="studio-plate">
          <div className="studio-header spec">
            <span>For startups // PW-03</span>
            <span className="bracket-state bracket-light">Available worldwide</span>
          </div>
          <div className="studio-statement">
            <span className="spec">Why startups work with us</span>
            <h2>Films built for launches, raises, and the moments that matter.</h2>
          </div>
          <div className="studio-specs spec">
            <div><span>01</span><strong>Production</strong><p>In-person shoots and direction</p></div>
            <div><span>02</span><strong>Post</strong><p>Edit, VFX, and animation</p></div>
            <div><span>03</span><strong>Field support</strong><p>Location and gear rental included</p></div>
          </div>
          <div className="studio-readout spec">
            <span>Phasework // Startup media company // Est. 2021</span>
            <span>San Francisco // Los Angeles // California</span>
          </div>
        </section>

        <section className="studio-plate">
          <div className="studio-header spec">
            <span>Selected clients</span>
            <span className="bracket-state bracket-light">Startup work</span>
          </div>
          <div className="studio-statement">
            <span className="spec">Recent startup films</span>
            <h2>Deeptrace, ThirdLayer, StackAI, Mintlify — and Apple.</h2>
          </div>
          <div className="studio-readout spec">
            <span><Link to="/">Watch the films →</Link></span>
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer scroll-mt-4">
        <div className="contact-label spec"><span>Start a project</span><span>Direct line // Email</span></div>
        <a className="contact-link" href="mailto:team@phasework.work">team@<br />phasework.work</a>
        <div className="footer-readout spec">
          <span>© 2026 Phasework</span>
          <div><a href="https://www.instagram.com/mwtle/" rel="noreferrer" target="_blank">Instagram</a><a href="https://www.linkedin.com/in/mrtle/" rel="noreferrer" target="_blank">LinkedIn</a><a href="https://www.youtube.com/@mrwtle" rel="noreferrer" target="_blank">YouTube</a></div>
          <a href="#top">Top ↑</a>
        </div>
      </footer>
    </div>
  );
}
