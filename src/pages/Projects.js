import React from "react";

function Projects() {
  const projects = [
    {
      title: "Todo App",
      description: "A simple todo list app with React where you can add, delete, and mark tasks as completed.",
      tech: "React, CSS",
      liveLink: "https://todo-app-rust-iota-16.vercel.app/",
      githubLink: "https://github.com/NagamaniMannempalli/Todo-App.git",
      image: "https://res.cloudinary.com/dq28vzzk1/image/upload/v1755870726/todo_neqmw0.png",
    },
    {
      title: "Weather App",
      description: "Weather forecasting app using OpenWeather API with dynamic city search.",
      tech: "React, API, CSS",
      liveLink: "https://weather-app-sigma-ecru-74.vercel.app/",
      githubLink: "https://github.com/NagamaniMannempalli/Weather-app.git",
      image: "https://res.cloudinary.com/dq28vzzk1/image/upload/v1755870660/weather_rvpnmt.png",
    },
    {
  title: "Medicine Tracker App",
  description: "A React app to manage medicines with a calendar view. Users can add, view, and delete medicines, and see medicines scheduled for each day in a responsive card layout.",
  tech: "React, Context API, React Router, CSS, react-calendar",
  liveLink: "https://prescription-remainder.vercel.app/", // replace with your deployed URL
  githubLink: "https://github.com/NagamaniMannempalli/Prescription-Remainder.git",
  image: "https://res.cloudinary.com/dsflmmlw4/image/upload/v1755960520/Screenshot_from_2025-08-23_20-16-51_a4vfgs.png", // replace with your project screenshot URL
},
{
  title: "Lost and Found App",
  description: "A platform to report and track lost & found items with features like item reporting, searching, and pagination.",
  tech: "React, CSS, JavaScript, LocalStorage",
  liveLink: "https://lost-and-found-tawny.vercel.app/",
  githubLink: "https://github.com/NagamaniMannempalli/Lost-and-Found.git",
  image: "https://res.cloudinary.com/dsflmmlw4/image/upload/v1756060685/Screenshot_from_2025-08-25_00-08-18_fk6e6a.png",
}


  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><b>Tech Stack:</b> {project.tech}</p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">🔗 Live Demo</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">💻 GitHub</a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .projects-container {
          padding: 40px;
          text-align: center;
        }
        .projects-list {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .project-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          padding: 20px;
          width: 300px;
          transition: transform 0.3s ease-in-out;
        }
        .project-card img {
          width: 100%;
          border-radius: 8px;
          margin-bottom: 15px;
        }
        .project-card:hover {
          transform: translateY(-8px);
        }
        .project-links a {
          margin: 0 10px;
          text-decoration: none;
          color: coral;
          font-weight: bold;
        }

        @media(max-width:768px){
          .projects-list{
            justify-content: center;
            gap: 15px;
          }
        }
      `}</style>
    </div>
  );
}

export default Projects;
