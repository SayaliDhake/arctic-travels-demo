import Placeholder from "./Placeholder";

function Label({ children }) {
  return (
    <div style={{ fontSize: 10.5, letterSpacing: "1px", color: "#8a8a8a", textTransform: "uppercase", marginBottom: 8 }}>
      {children}
    </div>
  );
}

export default function ExplorationCards() {
  return (
    <section className="wrap" style={{ padding: "56px 32px 12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24 }}>
        <div>
          <Label>Exploration</Label>
          <h2 className="mono-heading" style={{ fontSize: 30 }}>Discover the Uncharted</h2>
        </div>
        <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: "0.5px", textDecoration: "underline", cursor: "pointer" }}>
          View all destinations
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 18 }}>
        {/* Regions — big card */}
        <div style={{ background: "var(--mono-bg-soft)", padding: 24 }}>
          <Label>Regions</Label>
          <h3 className="mono-heading" style={{ fontSize: 22, marginBottom: 16 }}>Scandinavian Fjords</h3>
          <Placeholder label="Curated visual" height={340} />
          <p style={{ fontSize: 13, color: "var(--mono-muted)", marginTop: 14 }}>
            Explore deep-cut glacial valleys and towering granite cliffs.
          </p>
        </div>

        {/* Right column: Lodging + Activities/Resorts */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ background: "var(--mono-bg-soft)", padding: 24, display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <Label>Lodging</Label>
              <h3 className="mono-heading" style={{ fontSize: 20, marginBottom: 8 }}>The Ice Pavilion</h3>
              <p style={{ fontSize: 13, color: "var(--mono-muted)" }}>Minimalist retreats at the edge of the world.</p>
            </div>
            <Placeholder label="Visual" height={140} style={{ width: 110, flex: "none" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            <div style={{ background: "var(--mono-bg-soft)", padding: 20, minHeight: 150, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <Label>Activities</Label>
                <h3 className="mono-heading" style={{ fontSize: 17 }}>Tidal Glaciology</h3>
              </div>
              <span style={{ alignSelf: "flex-end", fontSize: 16 }}>→</span>
            </div>
            <div style={{ background: "var(--mono-ink)", color: "#fff", padding: 20, minHeight: 150, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 10.5, letterSpacing: "1px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", marginBottom: 8 }}>
                  Resorts
                </div>
                <h3 style={{ fontSize: 17, color: "#fff", fontWeight: 700 }}>Nordic Pass Holders</h3>
              </div>
              <span style={{ alignSelf: "flex-end", fontSize: 16 }}>★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
