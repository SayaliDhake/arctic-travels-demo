import { useRef } from "react";
import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";
import ReviewStrip from "../components/ReviewStrip";
import ScrollIndicator from "../components/ScrollIndicator";
import ExplorationCards from "../components/ExplorationCards";
import BookingCTA from "../components/BookingCTA";
import Footer from "../components/Footer";

export default function Landing() {
  const exploreRef = useRef(null);

  // CTA strategy from the case study: the hero button never books directly —
  // it scrolls the user gracefully into the exploration section instead,
  // so nothing is asked of them before the emotional hook has landed.
  const scrollToExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <Nav transparent />
        <HeroSection onExploreClick={scrollToExplore} />
      </div>

      <ReviewStrip />
      <ScrollIndicator />

      <div ref={exploreRef}>
        <ExplorationCards />
      </div>

      <section style={{ background: "var(--navy)", color: "#fff", padding: "70px 0", textAlign: "center" }}>
        <div className="wrap">
          <h2 style={{ color: "#fff", fontSize: 28, marginBottom: 10 }}>Begin Your Expedition</h2>
          <p style={{ color: "#cdd6e3", maxWidth: 460, margin: "0 auto 28px" }}>
            Secure your place on our next voyage to the ends of the earth. Space is limited, the experience is
            infinite.
          </p>
          <BookingCTA label="Book Here" variant="primary" size="lg" to="/booking" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
