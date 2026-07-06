import { useState } from "react";
import { Link } from "react-router-dom";

export default function TestNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ borderBottom: "1px solid #ddd", background: "#fff" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "16px",
          display: "flex",
          gap: 24,
          alignItems: "center",
          position: "relative",
          zIndex: 9999,
        }}
      >
        <Link to="/" style={{ fontWeight: 700, textDecoration: "none" }}>
          Brand
        </Link>

        {/* ✅ Hover dropdown test */}
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          style={{ position: "relative" }}
        >
          <button
            type="button"
            style={{
              padding: "10px 12px",
              border: "1px solid #ccc",
              background: "#fff",
              cursor: "pointer",
              borderRadius: 8,
            }}
          >
            Services ▾
          </button>

          {open && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                left: 0,
                width: 240,
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: 12,
                boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                padding: 8,
                zIndex: 99999,
              }}
            >
              <Link to="/dummy/a" style={itemStyle}>
                Dropdown Item A
              </Link>
              <Link to="/dummy/b" style={itemStyle}>
                Dropdown Item B
              </Link>
              <Link to="/dummy/c" style={itemStyle}>
                Dropdown Item C
              </Link>
            </div>
          )}
        </div>

        <Link to="/dummy" style={{ textDecoration: "none" }}>
          Dummy Page
        </Link>
      </div>
    </header>
  );
}

const itemStyle = {
  display: "block",
  padding: "10px 10px",
  borderRadius: 10,
  textDecoration: "none",
  color: "#111",
};
