import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        background: "#e9967a", // coral theme
        padding: "20px",
        textAlign: "center",
        color: "#fff",
        marginTop: "40px",
      }}
    >
      <p style={{ marginBottom: "12px", fontWeight: "500" }}>
        © {new Date().getFullYear()} Nagamani Mannempalli
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <a
          href="https://www.linkedin.com/in/mannempalli-nagamani-8779b8353"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", fontSize: "28px", transition: "0.3s" }}
          onMouseOver={(e) => (e.target.style.color = "#333")}
          onMouseOut={(e) => (e.target.style.color = "#fff")}
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/NagamaniMannempalli"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", fontSize: "28px", transition: "0.3s" }}
          onMouseOver={(e) => (e.target.style.color = "#333")}
          onMouseOut={(e) => (e.target.style.color = "#fff")}
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
