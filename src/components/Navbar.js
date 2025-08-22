import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { path: "/", name: "Home" },
    { path: "/skills", name: "Skills" },
    { path: "/projects", name: "Projects" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="navbar">
      <h2 className="navbar-name">Nagamani</h2>

      {/* Hamburger icon */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        {links.map((link, idx) => {
          const isHovered = hovered === idx;
          return (
            <Link
              key={link.path}
              to={link.path}
              onMouseOver={() => setHovered(idx)}
              onMouseOut={() => setHovered(null)}
            >
              {link.name}
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

      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 40px;
          background: #e9967a;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          position: relative;
        }
        .navbar-name {
          margin: 0;
          color: #fff;
          font-weight: bold;
        }
        .navbar-links {
          display: flex;
          gap: 25px;
        }
        .navbar-links a {
          position: relative;
          text-decoration: none;
          color: #fff;
          font-weight: 500;
          padding: 6px 10px;
        }

        /* Hamburger Menu */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }
        .hamburger span {
          width: 25px;
          height: 3px;
          background: #fff;
          transition: 0.3s;
        }
        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }
          .navbar-links {
            position: absolute;
            top: 100%;
            right: 0;
            background: #e9967a;
            flex-direction: column;
            width: 200px;
            display: none;
            padding: 20px;
            gap: 15px;
            border-radius: 0 0 10px 10px;
          }
          .navbar-links.open {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
