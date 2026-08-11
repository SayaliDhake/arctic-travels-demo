import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";
import ReviewStrip from "../components/ReviewStrip";
import ScrollIndicator from "../components/ScrollIndicator";
import ExplorationCards from "../components/ExplorationCards";
import BookingCTA from "../components/BookingCTA";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div style={{ background: "#fff" }}>
      <Nav variant="mono" />
      <HeroSection />
      <ReviewStrip />
      <ScrollIndicator />
      <ExplorationCards />

      <section className="wrap" style={{ padding: "56px 32px" }}>
        <div style={{ background: "var(--mono-bg-soft)", padding: "70px 40px", textAlign: "center" }}>
          <h2 className="mono-heading" style={{ fontSize: 30, marginBottom: 14 }}>Ready for the cold?</h2>
          <p style={{ maxWidth: 460, margin: "0 auto 26px", fontSize: 14.5, color: "var(--mono-muted)" }}>
            Your winter concierge is available 24/7 to curate your Arctic itinerary. Secure your seasonal pass
            today.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <BookingCTA label="Book Here" variant="mono-solid" size="md" to="/booking" />
            <BookingCTA label="View Lodging" variant="mono-outline" size="md" to="/resort/northern-solstice" />
          </div>
        </div>
      </section>

      <Footer variant="mono" />
    </div>
  );
}
