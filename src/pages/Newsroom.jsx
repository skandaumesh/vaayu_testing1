// Newsroom and research: section index pages and article pages.
// All content comes from src/content/articles.js, which the build-time
// prerender also reads, so crawlers and visitors see the same text.
// <head> tags are handled by SeoManager + routeMeta; JSON-LD is baked into the
// prerendered shell by scripts/gen-route-shells.mjs.
import React from "react";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";
import { SECTIONS, articlesIn, findArticle, pathOf } from "../content/articles";

const T = {
  green: "#61724e",
  deep: "#4f5831",
  soft: "#f7faf4",
  text: "#2F361A",
  muted: "#5f6b50",
  border: "rgba(97,114,78,0.16)",
  gold: "#e9c46a",
};

const css = `
  .nr-page { font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif; color: ${T.text}; background: #fff; }
  .nr-hero {
    background: linear-gradient(160deg, ${T.deep} 0%, ${T.green} 100%);
    color: #fff; padding: clamp(110px, 13vw, 150px) 0 clamp(40px, 6vw, 64px);
  }
  .nr-wrap { width: min(880px, calc(100% - 32px)); margin: 0 auto; }
  .nr-wide { width: min(1080px, calc(100% - 32px)); margin: 0 auto; }
  .nr-eyebrow { color: ${T.gold}; font-size: 13px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; margin: 0 0 12px; }
  .nr-eyebrow a { color: inherit; text-decoration: none; }
  .nr-eyebrow a:hover { text-decoration: underline; }
  .nr-h1 { font-size: clamp(1.7rem, 4vw, 2.7rem); font-weight: 800; line-height: 1.18; margin: 0; text-wrap: balance; }
  .nr-meta { margin: 16px 0 0; color: rgba(255,255,255,.85); font-size: 14px; line-height: 1.6; }
  .nr-lead { margin: 16px 0 0; color: rgba(255,255,255,.9); font-size: clamp(15px, 1.8vw, 17px); line-height: 1.7; max-width: 720px; }
  .nr-body { padding: clamp(32px, 5vw, 56px) 0 clamp(48px, 7vw, 80px); }
  .nr-body h2 { font-size: clamp(1.2rem, 2.4vw, 1.5rem); font-weight: 800; color: ${T.deep}; margin: 36px 0 12px; }
  .nr-body p, .nr-body li { color: ${T.muted}; font-size: 16px; line-height: 1.8; }
  .nr-body p { margin: 0 0 16px; }
  .nr-body ul { margin: 0 0 16px; padding-left: 22px; }
  .nr-body li { margin-bottom: 8px; }
  .nr-body a { color: ${T.green}; font-weight: 700; }
  .nr-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin: 20px 0 24px; }
  .nr-stat { border: 1px solid ${T.border}; border-radius: 16px; padding: 22px 16px; text-align: center; background: ${T.soft}; }
  .nr-stat b { display: block; font-size: clamp(1.7rem, 3.4vw, 2.3rem); font-weight: 800; color: ${T.green}; line-height: 1; }
  .nr-stat span { display: block; margin-top: 10px; font-size: 13.5px; line-height: 1.5; color: ${T.muted}; }
  .nr-box { border: 1px solid ${T.border}; border-radius: 16px; padding: 22px 24px; margin-top: 36px; background: ${T.soft}; }
  .nr-box h2 { margin-top: 0; font-size: 1.05rem; }
  .nr-box ul { margin-bottom: 0; }
  .nr-box li { font-size: 15px; }
  .nr-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
  .nr-card {
    display: block; border: 1px solid ${T.border}; border-radius: 18px; padding: 26px 24px;
    text-decoration: none; background: #fff; transition: transform .25s ease, box-shadow .25s ease;
  }
  .nr-card:hover { transform: translateY(-4px); box-shadow: 0 20px 44px rgba(47,54,26,.12); }
  .nr-card small { color: ${T.green}; font-weight: 700; font-size: 12.5px; letter-spacing: .06em; text-transform: uppercase; }
  .nr-card h2 { margin: 10px 0 10px; font-size: 1.15rem; line-height: 1.35; color: ${T.text}; font-weight: 800; }
  .nr-card p { margin: 0; font-size: 14.5px; line-height: 1.65; color: ${T.muted}; font-weight: 400; }
  .nr-card em { display: inline-block; margin-top: 14px; font-style: normal; font-weight: 700; color: ${T.green}; font-size: 14px; }
  @media (max-width: 760px) {
    .nr-stats { grid-template-columns: 1fr 1fr; }
    .nr-grid { grid-template-columns: 1fr; }
  }
  @media (prefers-reduced-motion: reduce) { .nr-card { transition: none; } .nr-card:hover { transform: none; } }
`;

const Block = ({ b }) => {
  if (b.h) return <h2>{b.h}</h2>;
  if (b.p) return <p>{b.p}</p>;
  if (b.ul) return <ul>{b.ul.map((li) => <li key={li}>{li}</li>)}</ul>;
  if (b.stats)
    return (
      <div className="nr-stats">
        {b.stats.map(([n, label]) => (
          <div className="nr-stat" key={label}>
            <b>{n}</b>
            <span>{label}</span>
          </div>
        ))}
      </div>
    );
  return null;
};

export const SectionIndex = ({ section }) => {
  const s = SECTIONS[section];
  const items = articlesIn(section);
  return (
    <div className="nr-page">
      <style>{css}</style>
      <header className="nr-hero">
        <div className="nr-wide">
          <p className="nr-eyebrow">Vaayu Chest &amp; Sleep Specialists</p>
          <h1 className="nr-h1">{s.name}</h1>
          <p className="nr-lead">{s.intro}</p>
        </div>
      </header>
      <main className="nr-body">
        <div className="nr-wide">
          <div className="nr-grid">
            {items.map((a) => (
              <Link className="nr-card" to={pathOf(a)} key={a.slug}>
                <small>{a.eventLabel}</small>
                <h2>{a.title}</h2>
                <p>{a.description}</p>
                <em>Read more →</em>
              </Link>
            ))}
          </div>
          <div className="nr-box">
            <h2>More from Vaayu</h2>
            <ul>
              {section === "newsroom" ? (
                <li><Link to="/research">Research summaries</Link></li>
              ) : (
                <li><Link to="/newsroom">Newsroom</Link></li>
              )}
              <li><Link to="/media-spotlight">Media coverage</Link></li>
              <li><Link to="/voric">VORIC: the impact of air pollution on Bengaluru&apos;s traffic police</Link></li>
              <li><Link to="/resources/publications">Publications</Link></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export const ArticlePage = ({ path }) => {
  const a = findArticle(path);
  if (!a) return <NotFound />;
  const s = SECTIONS[a.section];
  return (
    <div className="nr-page">
      <style>{css}</style>
      <header className="nr-hero">
        <div className="nr-wrap">
          <p className="nr-eyebrow">
            <Link to={s.path}>{s.name}</Link>
          </p>
          <h1 className="nr-h1">{a.title}</h1>
          <p className="nr-meta">
            {a.eventLabel}
            <br />
            Vaayu Chest &amp; Sleep Specialists ·{" "}
            <time dateTime={a.date}>Published {a.dateLabel}</time>
          </p>
        </div>
      </header>
      <main className="nr-body">
        <article className="nr-wrap">
          {a.body.map((b, i) => (
            <Block b={b} key={i} />
          ))}

          {a.sources.length > 0 && (
            <div className="nr-box">
              <h2>Press coverage and sources</h2>
              <ul>
                {a.sources.map(([label, url]) => (
                  <li key={url}>
                    <a href={url} target="_blank" rel="noopener noreferrer">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="nr-box">
            <h2>Related</h2>
            <ul>
              {a.related.map(([to, label]) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="nr-box">
            <h2>Media and research enquiries</h2>
            <p style={{ margin: 0, fontSize: 15 }}>
              Vaayu Chest &amp; Sleep Specialists, Jayanagar, Bengaluru. Telephone{" "}
              <a href="tel:+916364928680">+91 63649 28680</a>, email{" "}
              <a href="mailto:admin@vaayuchest.com">admin@vaayuchest.com</a>. When
              citing these findings, please credit Vaayu Chest &amp; Sleep
              Specialists and link to this page.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};
