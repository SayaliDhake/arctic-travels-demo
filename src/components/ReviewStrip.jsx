import { useState } from "react";
import { reviews } from "../data/content";

export default function ReviewStrip() {
  const [i, setI] = useState(0);
  const r = reviews[i];

  return (
    <section style={{ background: "#eef3f6", padding: "48px 0" }}>
      <div className="wrap" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
        <div style={{ color: "var(--gold)", fontSize: 15, marginBottom: 12 }}>
          {"★".repeat(r.rating)}
        </div>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 19,
            fontStyle: "italic",
            color: "var(--navy)",
            marginBottom: 12,
          }}
        >
          "{r.quote}"
        </p>
        <p style={{ fontSize: 12, letterSpacing: "0.5px", color: "var(--muted)", textTransform: "uppercase" }}>
          {r.name} — {r.role}
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 18 }}>
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show review ${idx + 1}`}
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                border: "none",
                padding: 0,
                background: idx === i ? "var(--ice-deep)" : "#c7d3d9",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
