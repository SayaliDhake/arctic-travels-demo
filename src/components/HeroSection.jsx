import { useState } from "react";
import Placeholder from "./Placeholder";

const slides = ["Svalbard, Norway", "Lapland, Finland"];

export default function HeroSection() {
  const [slide, setSlide] = useState(0);
  const next = () => setSlide((s) => (s + 1) % slides.length);
  const prev = () => setSlide((s) => (s - 1 + slides.length) % slides.length);

  return (
    <section className="wrap" style={{ padding: "48px 32px 0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 40,
          flexWrap: "wrap",
          marginBottom: 32,
        }}
      >
        <h1 className="mono-heading" style={{ fontSize: 46, lineHeight: 1.05, maxWidth: 480, margin: 0 }}>
          Plan the perfect winter trip
        </h1>
        <p style={{ maxWidth: 300, fontSize: 14.5, color: "var(--mono-muted)", marginTop: 8 }}>
          Curated experiences in the world's most pristine arctic environments. From private lodges to
          exclusive glacial passes.
        </p>
      </div>

      <div style={{ position: "relative" }}>
        <Placeholder label={`Curated visual — ${slides[slide]}`} height={420} />
        <div style={{ position: "absolute", bottom: 16, right: 16, display: "flex", gap: 8 }}>
          <button className="circle-btn" onClick={prev} aria-label="Previous">←</button>
          <button className="circle-btn" onClick={next} aria-label="Next">→</button>
        </div>
      </div>
    </section>
  );
}
