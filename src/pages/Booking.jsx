import { useState } from "react";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import { resorts, travelWindows } from "../data/content";

export default function Booking() {
  const resort = resorts[0];
  const [windowId, setWindowId] = useState(travelWindows[0].id);
  const [adults, setAdults] = useState(2);
  const [confirmed, setConfirmed] = useState(false);

  const rate = 8400;
  const fee = 450;
  const total = rate + fee;

  if (confirmed) {
    return (
      <div>
        <SiteNav />
        <div className="wrap" style={{ padding: "90px 32px", textAlign: "center", maxWidth: 520 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>✓</div>
          <h1 style={{ fontSize: 26, marginBottom: 10 }}>Request received</h1>
          <p style={{ marginBottom: 24 }}>
            This is a portfolio demo — no real booking or payment has been made. In production this step would
            hand off to a travel agent for confirmation, per the brief's "live chat with a specialized agent"
            requirement.
          </p>
          <button
            onClick={() => setConfirmed(false)}
            style={{ background: "var(--navy)", color: "#fff", border: "none", padding: "12px 22px", borderRadius: 4, fontWeight: 600 }}
          >
            Back to booking
          </button>
        </div>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div>
      <SiteNav />
      <div className="wrap" style={{ padding: "48px 32px 80px" }}>
        <p style={{ fontSize: 11, letterSpacing: "1px", color: "var(--gold)", fontWeight: 700, marginBottom: 20 }}>
          DEMO — NO REAL PAYMENT IS PROCESSED
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48 }}>
          <div>
            <h1 style={{ fontSize: 32, marginBottom: 6 }}>Secure your expedition.</h1>
            <p style={{ marginBottom: 30 }}>Select your preferred window for the Arctic Circle traverse.</p>

            <div style={{ fontSize: 12, letterSpacing: "1px", color: "var(--muted)", fontWeight: 600, marginBottom: 12 }}>
              SELECT TRAVEL WINDOW
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 30 }}>
              {travelWindows.map((w) => {
                const selected = w.id === windowId;
                return (
                  <button
                    key={w.id}
                    onClick={() => setWindowId(w.id)}
                    style={{
                      textAlign: "left",
                      padding: "16px",
                      border: selected ? "1.5px solid var(--navy)" : "1px solid var(--line)",
                      borderRadius: 6,
                      background: "#fff",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                      <span style={{ fontSize: 11, color: "var(--muted)" }}>📅</span>
                      {selected && (
                        <span style={{ fontSize: 10, background: "var(--navy)", color: "#fff", padding: "3px 7px", borderRadius: 3 }}>
                          SELECTED
                        </span>
                      )}
                    </div>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: 19, color: "var(--navy)" }}>{w.range}</div>
                    <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 4 }}>{w.label}</div>
                  </button>
                );
              })}
            </div>

            <div style={{ fontSize: 12, letterSpacing: "1px", color: "var(--muted)", fontWeight: 600, marginBottom: 12 }}>
              EXPEDITION MEMBERS
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 340, marginBottom: 34 }}>
              <div>
                <div style={{ fontSize: 15 }}>Adults</div>
                <div style={{ fontSize: 12.5, color: "var(--muted)" }}>Ages 18 and above</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <button onClick={() => setAdults((a) => Math.max(1, a - 1))} style={btnStyle}>−</button>
                <span style={{ width: 20, textAlign: "center" }}>{String(adults).padStart(2, "0")}</span>
                <button onClick={() => setAdults((a) => a + 1)} style={btnStyle}>+</button>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <button
                onClick={() => setConfirmed(true)}
                style={{ background: "var(--navy)", color: "#fff", border: "none", padding: "14px 26px", borderRadius: 4, fontWeight: 700, letterSpacing: "0.5px" }}
              >
                Continue to details
              </button>
              <span style={{ fontSize: 13, color: "var(--muted)", textDecoration: "underline", cursor: "pointer" }}>
                Save for later
              </span>
            </div>
          </div>

          <aside style={{ border: "1px solid var(--line)", borderRadius: 8, padding: 24, height: "fit-content" }}>
            <div style={{ fontSize: 11, letterSpacing: "1px", color: "var(--muted)", marginBottom: 16 }}>
              YOUR CURATED JOURNEY
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
              <div className="photo" style={{ "--tone1": resort.tone1, "--tone2": resort.tone2, "--tone3": resort.tone3, width: 56, height: 56, borderRadius: 6, flex: "none" }} />
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 16, color: "var(--navy)" }}>{resort.name}</div>
                <div style={{ fontSize: 12.5, color: "var(--muted)" }}>{resort.location}</div>
              </div>
            </div>
            <Row label="Book rate" value={`$${rate.toLocaleString()}.00`} />
            <Row label="Expedition fee" value={`$${fee.toLocaleString()}.00`} />
            <div style={{ borderTop: "1px solid var(--line)", margin: "14px 0" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
              <span style={{ fontSize: 11, letterSpacing: "1px", color: "var(--muted)" }}>ESTIMATED TOTAL</span>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: 22, color: "var(--navy)" }}>
                ${total.toLocaleString()}.00
              </span>
            </div>
            <p style={{ fontSize: 12.5, marginBottom: 8 }}>
              <b>✓ Secure transaction</b> — your payment information is encrypted and processed via
              industry-leading security protocols.
            </p>
            <p style={{ fontSize: 12.5 }}>
              <b>✓ Flexible cancellation</b> — full refund available up to 30 days before the expedition launch
              date.
            </p>
          </aside>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

const btnStyle = {
  width: 30,
  height: 30,
  borderRadius: 4,
  border: "1px solid var(--line)",
  background: "#fff",
  fontSize: 16,
};

function Row({ label, value }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13.5, marginBottom: 10 }}>
      <span style={{ color: "var(--muted)" }}>{label}</span>
      <span>{value}</span>
    </div>
  );
}
