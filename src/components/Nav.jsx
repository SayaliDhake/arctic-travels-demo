import { Link } from "react-router-dom";

/**
 * variant="navy"  — used on Resort Detail / Booking (final visual design)
 * variant="mono"  — used on Landing (matches the wireframe-stage Figma export)
 */
export default function Nav({ transparent = false, variant = "navy" }) {
  const isMono = variant === "mono";

  return (
    <header
      style={{
        position: transparent ? "absolute" : "static",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        background: transparent ? "transparent" : "#fff",
        borderBottom: isMono ? "1px solid var(--mono-line)" : transparent ? "none" : "1px solid var(--line)",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 32px",
          color: transparent && !isMono ? "#fff" : "var(--mono-ink)",
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: isMono ? "var(--font-sans)" : "var(--font-serif)",
            fontWeight: isMono ? 700 : 600,
            fontSize: isMono ? 18 : 15,
            letterSpacing: isMono ? "0" : "2.5px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          {isMono ? "Arctic Travels" : "ARCTIC TRAVELS"}
        </Link>
        <nav
          style={{
            display: "flex",
            gap: 28,
            fontSize: isMono ? 12 : 13.5,
            letterSpacing: isMono ? "0.8px" : "0.3px",
            textTransform: isMono ? "uppercase" : "none",
            color: isMono ? "#8a8a8a" : "inherit",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Locations</Link>
          <Link to="/resort/northern-solstice" style={{ textDecoration: "none", color: "inherit" }}>Resorts</Link>
          <span style={{ opacity: isMono ? 1 : 0.55 }}>Experiences</span>
          <span style={{ opacity: isMono ? 1 : 0.55 }}>Passes</span>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {isMono ? (
            <Link
              to="/booking"
              className="mono-btn"
              style={{ background: "var(--mono-ink)", color: "#fff", padding: "11px 20px", fontSize: 12 }}
            >
              Book Here
            </Link>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </header>
  );
}
