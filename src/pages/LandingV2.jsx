import { Link } from "react-router-dom";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import "./LandingV2.css";
import imgHero from "../assets/landing-v2/hero.png";
import imgIceland from "../assets/landing-v2/iceland.png";
import imgSvalbard from "../assets/landing-v2/svalbard.png";
import imgGreenland from "../assets/landing-v2/greenland.png";
import imgResortMain from "../assets/landing-v2/resort-main.png";
import imgSledding from "../assets/landing-v2/sledding.png";
import imgOcean from "../assets/landing-v2/ocean.png";
import imgNorthernLights from "../assets/landing-v2/northern-lights.png";
import imgStar from "../assets/landing-v2/star.svg";
import imgArrow from "../assets/landing-v2/arrow.svg";
import imgQuoteIcon from "../assets/landing-v2/quote.svg";
import imgChatIcon from "../assets/landing-v2/chat.svg";

const resorts = [
  { num: "01", name: "Blue Ice Wilderness Retreat" },
  { num: "02", name: "Polar Light Residences" },
  { num: "03", name: "Glacier Edge Sanctuary" },
];

/**
 * Higher-fidelity Figma export of the landing page — navy/serif, real
 * photography. Renders at "/"; the earlier mono/wireframe Landing page
 * (pages/Landing.jsx) is no longer routed but kept on disk for reference.
 */
export default function LandingV2() {
  return (
    <div className="lv2">
      <SiteNav />

      <section className="lv2-hero">
        <img alt="Arctic hero" className="lv2-hero-img" src={imgHero} />
        <div className="lv2-hero-scrim" />
        <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 1536, margin: "0 auto", padding: "0 48px" }}>
          <div className="lv2-hero-panel">
            <h1 style={{ color: "#fff", fontSize: 36, letterSpacing: "1.8px", fontWeight: 400, lineHeight: 1.25, fontFamily: "var(--font-noto-serif)" }}>
              Plan the perfect winter trip
            </h1>
            <p style={{ color: "#fff", fontSize: 18, fontWeight: 300, opacity: 0.9, lineHeight: 1.56, paddingBottom: 16 }}>
              Curated expeditions to the ends of the earth.
            </p>
            <Link to="/booking" className="lv2-btn-outline">START YOUR JOURNEY</Link>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--lv2-bg-soft)", borderBottom: "1px solid rgba(197,198,207,0.1)", padding: "96px 48px" }}>
        <div style={{ maxWidth: 896, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 24, padding: "0 48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {[0, 1, 2, 3, 4].map((i) => (
              <img key={i} alt="star" style={{ width: 20, height: 19 }} src={imgStar} />
            ))}
          </div>
          <blockquote style={{ color: "var(--lv2-navy-deep)", fontSize: 30, fontWeight: 400, lineHeight: 1.2, textAlign: "center", fontFamily: "var(--font-noto-serif)" }}>
            "An unparalleled awakening of the senses. Arctic Travels doesn't just book trips; they curate memories
            that linger long after the ice has melted."
          </blockquote>
          <p style={{ color: "var(--lv2-muted)", fontSize: 12, fontWeight: 700, letterSpacing: "3.6px", textAlign: "center" }}>
            JAMES R. — POLAR ENTHUSIAST
          </p>
        </div>
      </section>

      <section style={{ background: "var(--lv2-bg)", padding: "128px 48px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "flex", flexDirection: "column", gap: 64 }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <span style={{ color: "var(--lv2-gold)", fontSize: 12, fontWeight: 700, letterSpacing: "3.6px" }}>DESTINATIONS</span>
              <h2 style={{ color: "var(--lv2-navy-deep)", fontSize: 48, fontWeight: 400, lineHeight: 1, fontFamily: "var(--font-noto-serif)" }}>
                Explore Regions
              </h2>
            </div>
            <span className="lv2-link-underline" style={{ opacity: 0.55, cursor: "default" }}>VIEW ALL LOCATIONS</span>
          </div>

          <div className="lv2-regions-grid" style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: 32, height: 600 }}>
            <div className="lv2-photo-tile">
              <img alt="Iceland" src={imgIceland} style={{ height: "100%", left: "-22.44%", width: "144.88%", top: 0 }} />
              <div className="lv2-photo-scrim" />
              <div style={{ position: "absolute", bottom: 32, left: 32 }}>
                <h3 style={{ color: "#fff", fontSize: 30, fontWeight: 400, lineHeight: 1.2, marginBottom: 4, fontFamily: "var(--font-noto-serif)" }}>Iceland</h3>
                <p style={{ color: "#fff", fontSize: 14, opacity: 0.8 }}>Land of Fire and Ice</p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 32 }}>
              <div className="lv2-photo-tile">
                <img alt="Svalbard" src={imgSvalbard} style={{ inset: 0, width: "100%", height: "100%" }} />
                <div className="lv2-photo-scrim" />
                <div style={{ position: "absolute", bottom: 24, left: 24 }}>
                  <h3 style={{ color: "#fff", fontSize: 24, fontWeight: 400, lineHeight: 1.33, marginBottom: 4, fontFamily: "var(--font-noto-serif)" }}>Svalbard</h3>
                  <p style={{ color: "#fff", fontSize: 12, letterSpacing: "0.6px" }}>NORWAY</p>
                </div>
              </div>
              <div className="lv2-photo-tile">
                <img alt="Greenland" src={imgGreenland} style={{ inset: 0, width: "100%", height: "100%" }} />
                <div className="lv2-photo-scrim" />
                <div style={{ position: "absolute", bottom: 24, left: 24 }}>
                  <h3 style={{ color: "#fff", fontSize: 24, fontWeight: 400, lineHeight: 1.33, marginBottom: 4, fontFamily: "var(--font-noto-serif)" }}>Greenland</h3>
                  <p style={{ color: "#fff", fontSize: 12, letterSpacing: "0.6px" }}>DENMARK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--lv2-bg-soft)", padding: "128px 48px" }}>
        <div className="lv2-resorts-grid" style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <div style={{ background: "#fff", padding: 16, boxShadow: "0px 20px 25px -5px rgba(4,21,52,0.05), 0px 8px 10px -6px rgba(4,21,52,0.05)" }}>
              <div style={{ position: "relative", height: 600, overflow: "hidden" }}>
                <img alt="Arctic resort interior" src={imgResortMain} style={{ position: "absolute", height: "100%", left: "-13.27%", width: "126.54%", maxWidth: "none", top: 0, objectFit: "cover" }} />
              </div>
            </div>
            <div style={{ position: "absolute", background: "var(--lv2-navy-deep)", bottom: -40, right: -40, display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start", padding: "32px 32px 80px", width: 238 }}>
              <img alt="" style={{ width: 33, height: 22 }} src={imgQuoteIcon} />
              <p style={{ color: "#fff", fontSize: 20, fontWeight: 400, lineHeight: 1.375, paddingTop: 8, fontFamily: "var(--font-noto-serif)" }}>
                The Arctic<br />Sanctuary
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase" }}>
                Lappland, Finland
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 32, paddingBottom: 40 }}>
            <p style={{ color: "var(--lv2-gold-deep)", fontSize: 12, fontWeight: 700, letterSpacing: "3.6px" }}>ACCOMMODATION</p>
            <h2 style={{ color: "var(--lv2-navy-deep)", fontSize: 48, fontWeight: 400, lineHeight: 1.25, fontFamily: "var(--font-noto-serif)" }}>
              Curated Arctic Resorts
            </h2>
            <p style={{ color: "var(--lv2-muted)", fontSize: 18, lineHeight: 1.625, maxWidth: 512 }}>
              From glass-roofed igloos to private expedition lodges, our portfolio includes only the most
              exceptional architectural wonders in the high north.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24, paddingTop: 16 }}>
              {resorts.map((resort) => (
                <Link key={resort.num} to="/resort-v2" className="lv2-resort-row">
                  <span style={{ color: "var(--lv2-navy-deep)", fontSize: 12, fontWeight: 700, opacity: 0.4, width: 24 }}>{resort.num}</span>
                  <span style={{ color: "#171c1f", fontSize: 20, fontWeight: 400, lineHeight: 1.4, flex: 1, fontFamily: "var(--font-noto-serif)" }}>
                    {resort.name}
                  </span>
                  <img alt="" style={{ width: 32, height: 16 }} src={imgArrow} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--lv2-bg)", padding: "128px 48px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "flex", flexDirection: "column", gap: 80 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <h2 style={{ color: "var(--lv2-navy-deep)", fontSize: 48, fontWeight: 400, lineHeight: 1, textAlign: "center", fontFamily: "var(--font-noto-serif)" }}>
              Unforgettable Experiences
            </h2>
            <p style={{ color: "var(--lv2-muted)", fontSize: 16, letterSpacing: "0.4px", textAlign: "center" }}>
              The arctic is a stage. Here are your tickets.
            </p>
          </div>

          <div className="lv2-experiences-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div className="lv2-photo-tile" style={{ height: 420 }}>
                <img alt="Wilderness Sledding" src={imgSledding} style={{ height: "100%", left: "-16.66%", width: "133.33%", top: 0 }} />
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <h3 style={{ color: "var(--lv2-navy-deep)", fontSize: 24, fontWeight: 400, lineHeight: 1.33, fontFamily: "var(--font-noto-serif)" }}>
                    Wilderness Sledding
                  </h3>
                  <p style={{ color: "var(--lv2-muted)", fontSize: 14, fontWeight: 700, letterSpacing: "1.4px", textTransform: "uppercase" }}>
                    5 DAYS / 4 NIGHTS
                  </p>
                </div>
                <span style={{ background: "var(--lv2-gold)", color: "#241a00", fontSize: 10, fontWeight: 700, letterSpacing: "-0.5px", padding: "4px 12px", flexShrink: 0 }}>
                  TOP RATED
                </span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div className="lv2-photo-tile" style={{ height: 420 }}>
                <img alt="Ocean Expedition Pass" src={imgOcean} style={{ height: "100%", left: "-16.67%", width: "133.33%", top: 0 }} />
              </div>
              <div style={{ paddingTop: 16 }}>
                <h3 style={{ color: "var(--lv2-navy-deep)", fontSize: 24, fontWeight: 400, lineHeight: 1.33, marginBottom: 8, fontFamily: "var(--font-noto-serif)" }}>
                  Ocean Expedition Pass
                </h3>
                <p style={{ color: "var(--lv2-muted)", fontSize: 14, fontWeight: 700, letterSpacing: "1.4px", textTransform: "uppercase" }}>
                  SEASONAL UNLIMITED
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div className="lv2-photo-tile" style={{ height: 420 }}>
                <img alt="Northern Lights Chase" src={imgNorthernLights} style={{ height: "100%", left: "-16.66%", width: "133.33%", top: 0 }} />
              </div>
              <div style={{ paddingTop: 16 }}>
                <h3 style={{ color: "var(--lv2-navy-deep)", fontSize: 24, fontWeight: 400, lineHeight: 1.33, marginBottom: 8, fontFamily: "var(--font-noto-serif)" }}>
                  Northern Lights Chase
                </h3>
                <p style={{ color: "var(--lv2-muted)", fontSize: 14, fontWeight: 700, letterSpacing: "1.4px", textTransform: "uppercase" }}>
                  GUIDED NIGHT TOURS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--lv2-navy-deep)", padding: "128px 48px", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none", backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(27,42,74,1) 0%, rgba(27,42,74,0) 50%)" }} />
        <div style={{ position: "relative", zIndex: 10, maxWidth: 1440, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
          <h2 style={{ color: "#fff", fontSize: 48, fontWeight: 400, letterSpacing: "2.4px", textAlign: "center", lineHeight: 1, fontFamily: "var(--font-noto-serif)" }}>
            Begin Your Expedition
          </h2>
          <p style={{ color: "#fff", fontSize: 20, fontWeight: 300, textAlign: "center", opacity: 0.7, maxWidth: 672, lineHeight: 1.625 }}>
            Secure your place on our next voyage to the ends of the earth. Space is limited, the experience is
            infinite.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 24, paddingTop: 16 }}>
            <Link to="/booking" className="lv2-btn-cream">REQUEST BROCHURE</Link>
            <Link to="/resort-v2" className="lv2-btn-outline-navy">CONSULT AN EXPERT</Link>
          </div>
        </div>
      </section>

      <SiteFooter />

      <button className="lv2-fab" aria-label="Chat">
        <img alt="Chat" style={{ width: 20, height: 20 }} src={imgChatIcon} />
      </button>
    </div>
  );
}
