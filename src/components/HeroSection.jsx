import { useState } from "react";
import { regions } from "../data/content";

export default function HeroSection({ onExploreClick }) {
  const [slide, setSlide] = useState(0);
  const active = regions[slide];

  const next = () => setSlide((s) => (s + 1) % regions.length);
  const prev = () => setSlide((s) => (s - 1 + regions.length) % regions.length);

  return (
    <section
      className="photo"
      style={{
        "--tone1": active.tone1,
        "--tone2": active.tone2,
        "--tone3": active.tone3,
        height: "88vh",
        minHeight: 560,
        alignItems: "stretch",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <div className="wrap" style={{ paddingBottom: 56, width: "100%" }}>
          <div
            style={{
              background: "rgba(10,20,40,0.55)",
              backdropFilter: "blur(3px)",
              color: "#fff",
              maxWidth: 420,
              padding: "28px 30px",
              borderRadius: 4,
            }}
          >
            <h1 style={{ color: "#fff", fontSize: 32, marginBottom: 8 }}>
              Plan the perfect winter trip
            </h1>
            <p style={{ color: "#dfe6ef", fontSize: 14.5, marginBottom: 18 }}>
              Curated expeditions to the ends of the earth.
            </p>
            <button
              onClick={onExploreClick}
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.75)",
                color: "#fff",
                padding: "11px 20px",
                fontSize: 12,
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                fontWeight: 600,
                borderRadius: 2,
              }}
            >
              Start your journey
            </button>
          </div>
          <p className="photo-tag" style={{ margin: "18px 0 0", display: "inline-block" }}>
            {active.name}, {active.country}
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "space-between",
            transform: "translateY(-50%)",
            padding: "0 24px",
          }}
        >
          <button aria-label="Previous" onClick={prev} className="carousel-btn">‹</button>
          <button aria-label="Next" onClick={next} className="carousel-btn">›</button>
        </div>
      </div>
    </section>
  );
}
