import React from "react";

function Projects() {
  const projects = [
    {
      title: "Todo App",
      description:
        "A simple todo list app with React where you can add, delete, and mark tasks as completed.",
      tech: "React, CSS",
      liveLink: "https://todo-app-rust-iota-16.vercel.app/", // Replace with your live deployed link
      githubLink: "https://github.com/NagamaniMannempalli/Todo-App.git", // Replace with your repo
      image: "https://res.cloudinary.com/dq28vzzk1/image/upload/v1755870726/todo_neqmw0.png", // Replace with screenshot
    },
    {
      title: "Weather App",
      description:
        "Weather forecasting app using OpenWeather API with dynamic city search.",
      tech: "React, API, CSS",
      liveLink: "https://weather-app-sigma-ecru-74.vercel.app/",
      githubLink: "https://github.com/NagamaniMannempalli/Weather-app.git",
      image: "https://res.cloudinary.com/dq28vzzk1/image/upload/v1755870660/weather_rvpnmt.png",
    },
  ];

  const styles = {
    container: {
      padding: "40px",
      textAlign: "center",
    },
    list: {
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    card: {
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      padding: "20px",
      width: "300px",
      transition: "transform 0.3s ease-in-out",
    },
    cardHover: {
      transform: "translateY(-8px)",
    },
    image: {
      width: "100%",
      borderRadius: "8px",
      marginBottom: "15px",
    },
    links: {
      marginTop: "10px",
    },
    link: {
      margin: "0 10px",
      textDecoration: "none",
      color: "coral",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h2>My Projects</h2>
      <div style={styles.list}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-8px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <img src={project.image} alt={project.title} style={styles.image} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <b>Tech Stack:</b> {project.tech}
            </p>
            <div style={styles.links}>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                🔗 Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                💻 GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
