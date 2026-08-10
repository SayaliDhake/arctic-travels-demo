export default function Footer() {
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
