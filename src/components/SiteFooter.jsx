import "./SiteFooter.css";

// No dedicated pages exist for any of these yet, so they render inert
// rather than pointing at a fake destination (same reasoning as the
// "Experiences"/"Passes" nav links in SiteNav).
const footerLinks = ["Journal", "Our Story", "Sustainability", "Contact"];

/**
 * The one footer used on every page (Landing, Resort Detail, Booking) so
 * the footer UX is identical everywhere instead of drifting per page.
 */
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <span className="site-footer-brand">ARCTIC TRAVELS</span>
        <div className="site-footer-links">
          {footerLinks.map((link) => (
            <span key={link} className="site-footer-link" style={{ cursor: "default" }}>{link}</span>
          ))}
        </div>
        <span className="site-footer-copy">© 2026 Arctic Travels. The Digital Curator.</span>
      </div>
    </footer>
  );
}
