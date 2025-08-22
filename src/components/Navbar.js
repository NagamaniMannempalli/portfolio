import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [hovered, setHovered] = useState(null);

  const linkStyle = {
    position: "relative",
    textDecoration: "none",
    color: "#fff",
    fontWeight: "500",
    fontSize: "16px",
    padding: "6px 10px",
    transition: "color 0.3s ease",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        background: "#e9967a", // 🍑 soft coral / dark salmon
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      }}
    >
      {/* Left side: name */}
      <h2 style={{ margin: 0, color: "#fff", fontWeight: "bold" }}>Nagamani</h2>

      {/* Right side: nav links */}
      <div style={{ display: "flex", gap: "25px" }}>
        {["/", "/skills", "/projects", "/about", "/contact"].map((path, idx) => {
          const names = ["Home", "Skills", "Projects", "About", "Contact"];
          const isHovered = hovered === idx;

          return (
            <Link
              key={path}
              to={path}
              style={linkStyle}
              onMouseOver={() => setHovered(idx)}
              onMouseOut={() => setHovered(null)}
            >
              {names[idx]}

              {/* underline animation */}
              <span
                style={{
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#fff",
                  transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.3s ease-in-out",
                }}
              ></span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
