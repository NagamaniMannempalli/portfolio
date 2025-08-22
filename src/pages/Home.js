function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
        padding: "40px",
        background: "#fffaf7", // light coral background for harmony
      }}
    >
      {/* Left: Picture */}
      <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
        <img
          src="/photo.jpeg"
          alt="My picture"
          style={{
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
            border: "4px solid #e9967a",
          }}
        />
      </div>

      {/* Right: Text */}
      <div style={{ flex: "1", padding: "20px 40px" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px", color: "#333" }}>
          👋 Hi, I'm{" "}
          <span style={{ color: "#e9967a" }}>Nagamani Mannempalli</span>
        </h1>
        <h3 style={{ color: "#444", marginBottom: "20px" }}>
          A Frontend Developer
        </h3>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.6",
            color: "#555",
            marginBottom: "25px",
            maxWidth: "600px",
          }}
        >
          I’m a 3rd-year Computer Science student with a strong focus on{" "}
          <b style={{ color: "#e9967a" }}>Frontend Development</b>. I
          specialize in building responsive, user-friendly, and visually
          appealing web applications using{" "}
          <b>React, JavaScript, HTML, and CSS</b>. My goal is to create smooth
          user experiences with clean and efficient code.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "20px" }}>
          <a
            href="/projects"
            style={{
              background: "#e9967a",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "500",
              transition: "0.3s",
              boxShadow: "0 4px 10px rgba(233,150,122,0.4)",
            }}
            onMouseOver={(e) =>
              (e.target.style.background = "#fff",
                e.target.style.border = '1px solid #e9967a',
                e.target.style.color='#e9967a'
              )
            }
            onMouseOut={(e) =>
              (e.target.style.background = "#e9967a",
                e.target.style.color='#fff'
              )

            }
          >
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
