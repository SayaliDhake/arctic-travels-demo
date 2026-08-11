import { Link } from "react-router-dom";

/**
 * Reusable component pattern documented in the case study:
 * a single source of truth controlled via props (label, size, variant)
 * wherever it appears on the site, rather than duplicated per-page.
 */
export default function BookingCTA({
  label = "Book Here",
  variant = "primary", // "primary" | "outline" | "mono-solid" | "mono-outline"
  size = "md", // "sm" | "md" | "lg"
  to = "/booking",
}) {
  const sizes = {
    sm: { padding: "9px 16px", fontSize: 12 },
    md: { padding: "13px 26px", fontSize: 13.5 },
    lg: { padding: "16px 34px", fontSize: 14.5 },
  };
  const variants = {
    primary: { background: "var(--gold)", color: "#2a1f0a", border: "1px solid var(--gold)" },
    outline: { background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.7)" },
    "mono-solid": { background: "var(--mono-ink)", color: "#fff", border: "1px solid var(--mono-ink)" },
    "mono-outline": { background: "#fff", color: "var(--mono-ink)", border: "1px solid var(--mono-ink)" },
  };

  return (
    <Link
      to={to}
      className="mono-btn"
      style={{
        fontWeight: 700,
        ...sizes[size],
        ...variants[variant],
      }}
    >
      {label}
    </Link>
  );
}
