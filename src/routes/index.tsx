import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import logoUrl from "@/assets/vaporware-logo.webp";
import { ClientProof } from "@/components/client-proof";
import { CredentialsStrip } from "@/components/credentials-strip";

type Project = {
  title: string;
  client: string;
  director: string;
  youtubeUrl: string;
  /** Optional extra credit shown after the director, e.g. "Produced with Opus 5.5". */
  note?: string;
};

// Add or reorder work here. Any standard YouTube link, short link, Shorts link, or embed link works.
const projects: Project[] = [
  {
    title: "All-new iPad Pro (2024) | Apple Product Ops",
    client: "Apple Inc.",
    director: "Martin Lee",
    youtubeUrl: "https://youtu.be/2LbTw_AcCB0",
  },
  {
    title: "Deeptrace raises a $5M Seed from Felicis",
    client: "Deeptrace",
    director: "Martin Lee",
    youtubeUrl: "https://youtu.be/cY9eQd3TN84",
  },
  {
    title: "Mintlify x Deeptrace Testimonial",
    client: "Mintlify × Deeptrace",
    director: "Martin Lee",
    youtubeUrl: "https://youtu.be/huLzNOEfeN8",
  },
  {
    title: "ThirdLayer (YC W25) launches Dex v0",
    client: "ThirdLayer",
    director: "Martin Lee",
    youtubeUrl: "https://youtu.be/xetUmL0e3R0",
  },
  {
    title: "StackAI (YC W23) acquired by Asana",
    client: "StackAI",
    director: "Martin Lee",
    youtubeUrl: "https://youtu.be/rGfDzCp4K1k",
  },
  {
    title: "StackAI (YC W23) acquired by Asana",
    client: "StackAI",
    director: "Martin Lee",
    youtubeUrl: "https://youtu.be/Qd2bhsqRAU4",
  },
  {
    title: "Private AI",
    client: "Private AI",
    director: "Martin Lee",
    youtubeUrl: "https://youtu.be/BA5-qtT8ZVY",
  },
  {
    title: "Introducing Wrap, the Condom for AI",
    client: "Consumer SaaS",
    director: "Martin Lee",
    youtubeUrl: "https://youtu.be/WWCy6JowTvU",
    note: "Produced with Opus 5.5",
  },
];

function getYouTubeId(url: string) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") return parsed.pathname.slice(1).split("/")[0];
    if (parsed.pathname.startsWith("/shorts/") || parsed.pathname.startsWith("/embed/")) {
      return parsed.pathname.split("/")[2];
    }
    return parsed.searchParams.get("v") ?? "";
  } catch {
    return url.trim();
  }
}

function Film({ project, title }: { project: Project; title?: string }) {
  const videoId = getYouTubeId(project.youtubeUrl);

  return (
    <div className="film-frame">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title ?? `${project.title} — ${project.client}`}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

function RegistrationMarks() {
  return (
    <div className="registration-marks" aria-hidden="true">
      <i className="reg reg-tl" /><i className="reg reg-tr" />
      <i className="reg reg-bl" /><i className="reg reg-br" />
    </div>
  );
}

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Phasework — Hard Work Made Easy to Understand" },
      {
        name: "description",
        content: "Phasework directs cinematic launch films, brand stories, VFX, and motion for technology companies.",
      },
      { property: "og:title", content: "Phasework — Hard Work Made Easy to Understand" },
      {
        property: "og:description",
        content: "An independent production studio making technology clear, cinematic, and worth watching.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Phasework — Hard Work Made Easy to Understand" },
      {
        name: "twitter:description",
        content: "An independent production studio making technology clear, cinematic, and worth watching.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [featured, ...archive] = projects;
  if (!featured) return null;

  return (
    <div id="top" className="site-shell">
      <header className="masthead plate-rule">
        <a className="brand-lockup" href="#top" aria-label="Phasework home">
          <span className="brand-logo"><img src={logoUrl} alt="" /></span>
          <span className="brand-name"><span className="wm-a">Phase</span>work</span>
        </a>
        <nav className="spec" aria-label="Primary navigation">
          <a href="#work">Work</a><span>//</span>
          <Link to="/startups">Startups</Link><span>//</span>
          <a href="#studio">Studio</a>
          <a className="btn nav-button" href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-plate animate-build">
          <RegistrationMarks />
          <div className="hero-title-cell">
            <p className="hero-kicker">Hard work made easy to understand.</p>
            <a className="btn hero-cta" href="#work">View films ↓</a>
          </div>
          <div className="hero-signal-cell">
            <div className="hero-signal-top spec">
              <span>Launch films · Brand stories · VFX · Motion</span>
              <span>San Francisco · Los Angeles · Est. 2021</span>
            </div>
            <p>Make your<br />launch land.</p>
          </div>
          <div className="hero-quiet-cell" aria-hidden="true"><img src={logoUrl} alt="" /></div>
          <h1 className="hero-wordmark"><span className="hero-wordmark-fit"><span className="wm" style={{ "--em-width": 8.762 } as CSSProperties}><span className="wm-base"><span className="wm-a">Phase</span><span className="wm-b">work</span></span><span className="wm-cut" aria-hidden="true" data-a="Phase" data-b="work" /></span></span></h1>
        </section>

        <ClientProof />

        <div className="hazard-strip" aria-hidden="true" />

        <CredentialsStrip />

        <section id="work" className="featured-film scroll-mt-4">
          <div className="featured-stage">
            <Film project={featured} title={`Featured film: ${featured.title}`} />
          </div>
          <div className="feature-meta">
            <span className="project-number">01</span>
            <div>
              <h2>{featured.title}</h2>
              <p className="spec">{featured.client} · Directed by {featured.director}{featured.note ? ` · ${featured.note}` : ""}</p>
            </div>
          </div>
        </section>

        <section className="archive-grid" aria-label="Selected films">
          {archive.map((project, index) => {
            const number = String(index + 2).padStart(2, "0");
            return (
              <article className="project-plate" key={project.youtubeUrl}>
                <Film project={project} />
                <div className="project-meta">
                  <span className="project-number">{number}</span>
                  <div><h3>{project.title}</h3><p className="spec">{project.client} · Directed by {project.director}{project.note ? ` · ${project.note}` : ""}</p></div>
                </div>
              </article>
            );
          })}
        </section>

        <section id="studio" className="studio-plate scroll-mt-4">
          <div className="studio-statement">
            <span className="spec">Who we work with</span>
            <h2>For the best, and only the best</h2>
          </div>
          <div className="studio-specs spec">
            <div><span>01</span><strong>Production</strong><p>In-person shoots and direction</p></div>
            <div><span>02</span><strong>Post</strong><p>Edit, VFX, and animation</p></div>
            <div><span>03</span><strong>Field support</strong><p>Location and gear rental included</p></div>
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer scroll-mt-4">
        <div className="contact-label spec"><span>Start a project</span></div>
        <a className="contact-link" href="mailto:team@phasework.work">team@<br />phasework.work</a>
        <div className="footer-readout spec">
          <span>© 2026 Phasework</span>
          <div><a href="https://www.instagram.com/mwtle/" rel="noreferrer" target="_blank">Instagram</a><a href="https://www.linkedin.com/in/mrtle/" rel="noreferrer" target="_blank">LinkedIn</a><a href="https://www.youtube.com/@mrwtle" rel="noreferrer" target="_blank">YouTube</a></div>
        </div>
      </footer>
    </div>
  );
}
