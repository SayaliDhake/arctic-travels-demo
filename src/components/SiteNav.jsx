import { Link, useLocation } from "react-router-dom";
import "./SiteNav.css";

// "Locations" and "Resorts" map to real routes; "Experiences" and "Passes"
// have no dedicated page yet, so they render inert rather than pointing
// at a fake destination.
const navLinks = [
  { label: "Locations", to: "/" },
  { label: "Resorts", to: "/resort-v2" },
  { label: "Experiences", to: null },
  { label: "Passes", to: null },
];

/**
 * The one nav bar used on every page (Landing, Resort Detail, Booking) so
 * the nav UX is identical everywhere instead of drifting per page.
 */
export default function SiteNav() {
  const { pathname } = useLocation();

  return (
    <header className="site-nav">
      <Link to="/" className="site-nav-brand">ARCTIC TRAVELS</Link>
      <nav className="site-nav-links">
        {navLinks.map(({ label, to }) =>
          to ? (
            <Link
              key={label}
              to={to}
              className={`site-nav-link${pathname === to ? " active" : ""}`}
            >
              {label}
            </Link>
          ) : (
            <span key={label} className="site-nav-link" style={{ opacity: 0.55, cursor: "default" }}>
              {label}
            </span>
          )
        )}
      </nav>
      <Link to="/booking" className="site-nav-cta">Explore now</Link>
    </header>
  );
}
