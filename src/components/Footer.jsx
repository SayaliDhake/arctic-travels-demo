export default function Footer({ variant = "navy" }) {
  if (variant === "mono") {
    return (
      <footer style={{ borderTop: "1px solid var(--mono-line)", padding: "28px 0", marginTop: 40 }}>
        <div
          className="wrap"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            fontSize: 12.5,
            color: "var(--mono-muted)",
          }}
        >
          <div>
            <div style={{ fontWeight: 700, color: "var(--mono-ink)", marginBottom: 2 }}>Arctic Travels</div>
            <div>© 2026 Arctic Travels. Curated Excellence.</div>
          </div>
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Sustainability</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer style={{ background: "var(--navy)", color: "#cdd6e3", padding: "40px 0", marginTop: 0 }}>
      <div
        className="wrap"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          fontSize: 13,
        }}
      >
        <span style={{ fontFamily: "var(--font-serif)", color: "#fff", fontSize: 14, letterSpacing: "1px" }}>
          ARCTIC TRAVELS
        </span>
        <span style={{ opacity: 0.7 }}>
          Privacy Policy &nbsp;·&nbsp; Terms of Service &nbsp;·&nbsp; Contact Us
        </span>
        <span style={{ opacity: 0.55 }}>© 2026 Arctic Travels. Demo build.</span>
      </div>
    </footer>
  );
}
