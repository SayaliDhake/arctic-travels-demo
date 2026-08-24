import { Link } from "react-router-dom";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import "./ResortDetailV2.css";
import imgHero from "../assets/resort-v2/hero.png";
import imgFjord from "../assets/resort-v2/fjord-interior.png";
import { resorts } from "../data/content";

/**
 * Higher-fidelity Figma export of the resort detail page — navy/serif,
 * real photography, kept as a separate page ("/resort-v2") that the
 * primary nav's "Resorts" link now points to.
 */
export default function ResortDetailV2() {
  const resort = resorts[0];

  return (
    <div className="rv2">
      <SiteNav />

      <div className="rv2-hero">
        <img alt={`${resort.name} — aerial view over Norwegian coastline with aurora borealis`} className="rv2-hero-img" src={imgHero} />
        <div className="rv2-hero-scrim" />
      </div>

      <div className="rv2-identity">
        <div className="rv2-identity-inner">
          <div>
            <p className="rv2-eyebrow">{resort.location}</p>
            <h1 className="rv2-title">{resort.name}<br />Resort</h1>
          </div>
          <div>
            <div className="rv2-rating-row">
              <span className="rv2-stars">★★★★★</span>
              <span className="rv2-rating-text">{resort.rating}</span>
            </div>
            <p className="rv2-flagship">Arctic Flagship Property</p>
          </div>
        </div>
      </div>

      <div className="rv2-main">
        <div className="rv2-main-grid">
          <div>
            <div className="rv2-section-heading">
              <div className="rv2-section-heading-bar" />
              <h2>A Sanctuary in the Ice</h2>
            </div>
            <p className="rv2-body-copy">{resort.blurb}</p>
            <p className="rv2-body-copy">{resort.philosophy}</p>

            <div className="rv2-amenities-head">
              <span className="rv2-amenities-label">Curated Amenities</span>
              <span className="rv2-amenities-count">16 rooms available</span>
            </div>
            <div className="rv2-amenities-grid">
              {resort.amenities.map((a) => (
                <div key={a.label} className="rv2-amenity">
                  <p className="rv2-amenity-tag">{a.tag}</p>
                  <p className="rv2-amenity-name">{a.label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rv2-booking-card">
            <p className="rv2-booking-label">Starting From</p>
            <div className="rv2-booking-price-row">
              <span className="rv2-booking-price">{resort.price}</span>
              <span className="rv2-booking-price-unit">/ night</span>
            </div>

            <div className="rv2-field">
              <p className="rv2-field-label">Check In / Check Out</p>
              <div className="rv2-field-value">Select Dates</div>
            </div>

            <div className="rv2-field">
              <p className="rv2-field-label">Guests</p>
              <div className="rv2-field-value">2 Adults, 0 Children</div>
            </div>

            <Link to="/booking" className="rv2-check-btn" style={{ display: "block", textAlign: "center" }}>
              Check Availability
            </Link>

            <div className="rv2-perks">
              <div className="rv2-perk">Flexible Cancellation</div>
              <div className="rv2-perk">Airport Transfers</div>
            </div>
          </aside>
        </div>
      </div>

      <div className="rv2-experience">
        <div className="rv2-experience-photo">
          <img alt="Interior living space — floor-to-ceiling glass facing the fjord" src={imgFjord} />
        </div>
        <div className="rv2-experience-copy">
          <div className="rv2-experience-copy-inner">
            <p className="rv2-experience-eyebrow">The Experience</p>
            <h3 className="rv2-experience-heading">Radical<br />Simplicity.</h3>
            <p className="rv2-body-copy">
              Every material used in the construction was locally sourced or recycled, ensuring a carbon-neutral
              footprint that respects the Arctic ecosystem. Nothing superfluous. Everything intentional.
            </p>
            <a href="#" className="rv2-experience-link">View Sustainable Details</a>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
