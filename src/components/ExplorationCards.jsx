import { Link } from "react-router-dom";
import { regions, resorts, experiencePreviews } from "../data/content";

function Tile({ tone1, tone2, tone3, tag, height = 220, children }) {
  return (
    <div className="photo" style={{ "--tone1": tone1, "--tone2": tone2, "--tone3": tone3, height, borderRadius: 6 }}>
      {tag && <span className="photo-tag">{tag}</span>}
      {children}
    </div>
  );
}

export default function ExplorationCards() {
  const resort = resorts[0];

  return (
    <>
      {/* Explore Regions */}
      <section style={{ padding: "64px 0 32px" }}>
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: 11.5, letterSpacing: "2px", color: "var(--ice-deep)", fontWeight: 600, marginBottom: 6 }}>
                DESTINATIONS
              </div>
              <h2 style={{ fontSize: 26 }}>Explore Regions</h2>
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, textDecoration: "underline", cursor: "pointer" }}>
              View all locations
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {regions.map((r) => (
              <Tile key={r.name} tone1={r.tone1} tone2={r.tone2} tone3={r.tone3} tag={`${r.name}, ${r.country}`} height={260} />
            ))}
          </div>
        </div>
      </section>

      {/* Curated Resorts */}
      <section style={{ padding: "32px 0" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 32, alignItems: "center" }}>
          <Tile tone1={resort.tone1} tone2={resort.tone2} tone3={resort.tone3} height={300} />
          <div>
            <div style={{ fontSize: 11.5, letterSpacing: "2px", color: "var(--ice-deep)", fontWeight: 600, marginBottom: 6 }}>
              ACCOMMODATION
            </div>
            <h2 style={{ fontSize: 24, marginBottom: 10 }}>Curated Arctic Resorts</h2>
            <p style={{ fontSize: 14.5, marginBottom: 16 }}>
              From glass-roofed suites to private expedition lodges, our portfolio includes only the most
              exceptional architectural wonders in the high north.
            </p>
            <Link
              to={`/resort/${resort.slug}`}
              style={{
                display: "inline-block",
                fontSize: 13.5,
                fontWeight: 600,
                color: "var(--navy)",
                textDecoration: "none",
                borderBottom: "1px solid var(--navy)",
                paddingBottom: 2,
              }}
            >
              {resort.name} →
            </Link>
          </div>
        </div>
      </section>

      {/* Unforgettable Experiences */}
      <section style={{ padding: "32px 0 12px" }}>
        <div className="wrap">
          <h2 style={{ fontSize: 24, marginBottom: 6, textAlign: "center" }}>Unforgettable Experiences</h2>
          <p style={{ textAlign: "center", color: "var(--muted)", fontSize: 14, marginBottom: 26 }}>
            The arctic is a stage. Here are your tickets.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {experiencePreviews.map((e) => (
              <div key={e.name}>
                <Tile tone1={e.tone1} tone2={e.tone2} tone3={e.tone3} height={170} />
                <h3 style={{ fontSize: 15.5, marginTop: 10 }}>{e.name}</h3>
                <p style={{ fontSize: 12.5, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.4px" }}>
                  {e.meta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
