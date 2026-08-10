import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BookingCTA from "../components/BookingCTA";
import { resorts } from "../data/content";

export default function ResortDetail() {
  const { slug } = useParams();
  const resort = resorts.find((r) => r.slug === slug) ?? resorts[0];

  return (
    <div>
      <Nav />

      <div
        className="photo"
        style={{ "--tone1": resort.tone1, "--tone2": resort.tone2, "--tone3": resort.tone3, height: 380 }}
      />

      <div className="wrap" style={{ padding: "36px 0" }}>
        <div style={{ fontSize: 11.5, letterSpacing: "2px", color: "var(--ice-deep)", fontWeight: 600, marginBottom: 8 }}>
          {resort.location.toUpperCase()}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
          <h1 style={{ fontSize: 34, maxWidth: 480 }}>{resort.name.toUpperCase()}</h1>
          <div style={{ textAlign: "right", fontSize: 13 }}>
            <div style={{ color: "var(--gold)" }}>★★★★★ <span style={{ color: "var(--ink)" }}>{resort.rating}</span></div>
            <div style={{ color: "var(--muted)", marginTop: 4 }}>Arctic Flagship Property</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 40, marginTop: 30 }}>
          <div>
            <h3 style={{ fontSize: 18, marginBottom: 10, borderLeft: "3px solid var(--gold)", paddingLeft: 12 }}>
              A Sanctuary in the Ice
            </h3>
            <p style={{ marginBottom: 14 }}>{resort.blurb}</p>
            <p style={{ marginBottom: 26 }}>{resort.philosophy}</p>

            <div style={{ fontSize: 12, letterSpacing: "1px", color: "var(--muted)", fontWeight: 600, marginBottom: 14 }}>
              CURATED AMENITIES
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
              {resort.amenities.map((a) => (
                <div key={a.label} style={{ borderTop: "1px solid var(--line)", paddingTop: 10 }}>
                  <div style={{ fontSize: 10.5, letterSpacing: "0.6px", color: "var(--ice-deep)", textTransform: "uppercase", marginBottom: 4 }}>
                    {a.tag}
                  </div>
                  <div style={{ fontSize: 14 }}>{a.label}</div>
                </div>
              ))}
            </div>
          </div>

          <aside style={{ border: "1px solid var(--line)", borderRadius: 8, padding: 24, height: "fit-content" }}>
            <div style={{ fontSize: 11, letterSpacing: "1px", color: "var(--muted)", marginBottom: 4 }}>STARTING FROM</div>
            <div style={{ fontSize: 28, fontFamily: "var(--font-serif)", color: "var(--navy)", marginBottom: 18 }}>
              {resort.price} <span style={{ fontSize: 13, fontFamily: "var(--font-sans)", color: "var(--muted)" }}>/ night</span>
            </div>
            <div style={{ fontSize: 11, letterSpacing: "1px", color: "var(--muted)", marginBottom: 6 }}>CHECK IN / CHECK OUT</div>
            <div style={{ border: "1px solid var(--line)", borderRadius: 4, padding: "10px 12px", fontSize: 13.5, marginBottom: 16, color: "var(--muted)" }}>
              Select dates
            </div>
            <div style={{ fontSize: 11, letterSpacing: "1px", color: "var(--muted)", marginBottom: 6 }}>GUESTS</div>
            <div style={{ border: "1px solid var(--line)", borderRadius: 4, padding: "10px 12px", fontSize: 13.5, marginBottom: 20 }}>
              2 Adults, 0 Children
            </div>
            <div style={{ width: "100%" }}>
              <BookingCTA label="Check Availability" variant="primary" size="md" to="/booking" />
            </div>
            <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 16 }}>✓ Flexible cancellation</p>
            <p style={{ fontSize: 12, color: "var(--muted)" }}>✓ Airport transfers included</p>
          </aside>
        </div>
      </div>

      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, padding: "20px 32px 70px", alignItems: "center" }}>
        <div className="photo" style={{ "--tone1": "#1c1c1c", "--tone2": "#3a3a3a", "--tone3": "#8a8a8a", height: 280 }} />
        <div>
          <div style={{ fontSize: 11.5, letterSpacing: "2px", color: "var(--ice-deep)", fontWeight: 600, marginBottom: 8 }}>
            THE EXPERIENCE
          </div>
          <h2 style={{ fontSize: 26, marginBottom: 12 }}>Radical Simplicity.</h2>
          <p>
            Every material used in the construction was locally sourced or recycled, ensuring a carbon-neutral
            footprint that respects the Arctic ecosystem. Nothing superfluous. Everything intentional.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
