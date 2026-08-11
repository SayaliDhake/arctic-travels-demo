import { useState } from "react";
import { landingReviews as reviews } from "../data/content";

export default function ReviewStrip() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  const next = () => setI((n) => (n + 1) % reviews.length);
  const prev = () => setI((n) => (n - 1 + reviews.length) % reviews.length);

  return (
    <section
      className="wrap"
      style={{
        padding: "20px 32px",
        marginTop: 32,
        borderTop: "1px solid var(--mono-line)",
        borderBottom: "1px solid var(--mono-line)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
        <span style={{ color: "var(--mono-ink)", fontSize: 13, letterSpacing: "1px" }}>
          {"★".repeat(r.rating)}
        </span>
        <span style={{ fontSize: 14.5, color: "var(--mono-ink)" }}>
          "{r.quote}" — {r.name}
        </span>
        <span style={{ display: "flex", gap: 6, marginLeft: 8 }}>
          <button className="circle-btn" style={{ width: 26, height: 26, fontSize: 12 }} onClick={prev} aria-label="Previous review">‹</button>
          <button className="circle-btn" style={{ width: 26, height: 26, fontSize: 12 }} onClick={next} aria-label="Next review">›</button>
        </span>
      </div>
    </section>
  );
}
