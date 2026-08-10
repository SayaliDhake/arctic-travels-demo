import { Link } from "react-router-dom";

export default function Nav({ transparent = false }) {
  return (
    <header
      style={{
        position: transparent ? "absolute" : "static",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        background: transparent ? "transparent" : "#fff",
        borderBottom: transparent ? "none" : "1px solid var(--line)",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 32px",
          color: transparent ? "#fff" : "var(--navy)",
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 15,
            letterSpacing: "2.5px",
            textDecoration: "none",
            color: "inherit",
            fontWeight: 600,
          }}
        >
          ARCTIC TRAVELS
        </Link>
        <nav style={{ display: "flex", gap: 28, fontSize: 13.5, letterSpacing: "0.3px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Locations</Link>
          <Link to="/resort/northern-solstice" style={{ textDecoration: "none", color: "inherit" }}>Resorts</Link>
          <span style={{ opacity: 0.55 }}>Experiences</span>
          <span style={{ opacity: 0.55 }}>Passes</span>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 13 }}>Sign in</span>
          <Link
            to="/booking"
            style={{
              background: "var(--navy)",
              color: "#fff",
              padding: "9px 18px",
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Book now
          </Link>
        </div>
      </div>
    </header>
  );
}
