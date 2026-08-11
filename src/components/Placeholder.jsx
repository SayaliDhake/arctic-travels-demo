/**
 * Flat gray placeholder block used in the wireframe-stage screens —
 * stands in for imagery that hasn't gone through visual design yet.
 */
export default function Placeholder({ label = "IMAGE PLACEHOLDER", height = 200, dark = false, style = {} }) {
  return (
    <div
      style={{
        height,
        background: dark ? "#111213" : "#dcdcdc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <span
        style={{
          fontSize: 10.5,
          letterSpacing: "0.6px",
          textTransform: "uppercase",
          color: dark ? "rgba(255,255,255,0.5)" : "#8a8a8a",
        }}
      >
        {label}
      </span>
    </div>
  );
}
