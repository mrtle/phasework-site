import { createFileRoute, Link } from "@tanstack/react-router";
import logoUrl from "@/assets/vaporware-logo.webp";
import { ClientProof } from "@/components/client-proof";

type Project = {
  title: string;
  client: string;
  director: string;
  youtubeUrl: string;
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
      { title: "Phasework — Films for Technology Companies" },
      {
        name: "description",
        content: "Phasework directs cinematic launch films, brand stories, VFX, and motion for technology companies.",
      },
      { property: "og:title", content: "Phasework — Films for Technology Companies" },
      {
        property: "og:description",
        content: "An independent production studio making technology clear, cinematic, and worth watching.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Phasework — Films for Technology Companies" },
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
          <span className="brand-name">Phasework</span>
        </a>
        <p className="spec masthead-note">Independent production studio</p>
        <nav className="spec" aria-label="Primary navigation">
          <a href="#work">Work</a><span>//</span>
          <Link to="/startups">Startups</Link><span>//</span>
          <a href="#studio">Studio</a><span>//</span>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-plate animate-build">
          <RegistrationMarks />
          <div className="hero-title-cell">
            <p className="hero-kicker">Films for technology companies.</p>
            <h1>PHASE<span>WORK</span></h1>
          </div>
          <div className="hero-signal-cell">
            <span className="spec">Direction // Motion // VFX</span>
            <p>Make the<br />future felt.</p>
          </div>
          <div className="hero-quiet-cell" aria-hidden="true"><img src={logoUrl} alt="" /></div>
          <div className="hero-readout spec">
            <span>Independent // Global</span>
            <a href="#work">View films ↓</a>
          </div>
        </section>

        <ClientProof />

        <div className="hazard-strip" aria-hidden="true" />

        <section className="credentials-strip" aria-label="Studio credentials">
          <p>Fortune 300, YC &amp; a16z-backed clients</p>
          <p><strong>200M+</strong> lifetime total impressions</p>
        </section>

        <section id="work" className="featured-film scroll-mt-4">
          <div className="section-strip spec">
            <span>01 // Featured film</span>
            <span>{featured.client}</span>
            <span className="bracket-state">Play</span>
          </div>
          <div className="featured-stage">
            <Film project={featured} title={`Featured film: ${featured.title}`} />
          </div>
          <div className="feature-meta">
            <span className="project-number">01</span>
            <h2>{featured.title}</h2>
            <dl className="spec-list spec">
              <div><dt>Client</dt><dd>{featured.client}</dd></div>
              <div><dt>Director</dt><dd>{featured.director}</dd></div>
              <div><dt>Format</dt><dd>Film // 16:9</dd></div>
            </dl>
          </div>
        </section>

        <section className="archive-grid" aria-label="Selected films">
          {archive.map((project, index) => {
            const number = String(index + 2).padStart(2, "0");
            return (
              <article className="project-plate" key={project.youtubeUrl}>
                <div className="project-strip spec">
                  <span>PW-FILM-{number}</span>
                  <span>{project.client}</span>
                </div>
                <Film project={project} />
                <div className="project-meta">
                  <span className="project-number">{number}</span>
                  <div><h3>{project.title}</h3><p className="spec">Director // {project.director}</p></div>
                </div>
              </article>
            );
          })}
          <div className="archive-filler" aria-hidden="true">
            <img src={logoUrl} alt="" />
            <span className="spec">Phasework // More soon</span>
          </div>
        </section>

        <div className="hazard-strip" aria-hidden="true" />

        <section id="studio" className="studio-plate scroll-mt-4">
          <div className="studio-header spec">
            <span>Studio profile // PW-02</span>
            <span className="bracket-state bracket-light">Available worldwide</span>
          </div>
          <div className="studio-statement">
            <span className="spec">What we do</span>
            <h2>Hard work made easy to understand.</h2>
          </div>
          <div className="studio-specs spec">
            <div><span>01</span><strong>Production</strong><p>In-person shoots and direction</p></div>
            <div><span>02</span><strong>Post</strong><p>Edit, VFX, and animation</p></div>
            <div><span>03</span><strong>Field support</strong><p>Location and gear rental included</p></div>
          </div>
          <div className="studio-readout spec"><span>Phasework // Startup media company // Est. 2021</span><span>San Francisco // Los Angeles // California</span></div>
        </section>
      </main>

      <footer id="contact" className="site-footer scroll-mt-4">
        <div className="contact-label spec"><span>Start a project</span><span>Direct line // Email</span></div>
        <a className="contact-link" href="mailto:team@phasework.work">team@<br />phasework.work</a>
        <div className="footer-readout spec">
          <span>© 2026 Phasework</span>
          <div><a href="https://instagram.com" rel="noreferrer" target="_blank">Instagram</a><a href="https://linkedin.com" rel="noreferrer" target="_blank">LinkedIn</a><a href="https://youtube.com" rel="noreferrer" target="_blank">YouTube</a></div>
          <a href="#top">Top ↑</a>
        </div>
      </footer>
    </div>
  );
}
