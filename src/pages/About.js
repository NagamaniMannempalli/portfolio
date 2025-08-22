import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";


function About() {
  return (
    <>
      <section className="about">
        <div className="about-container">
          {/* Left Side - Image */}
          <div className="about-image">
            <img
              src="/photo.jpeg" // replace with your actual photo path
              alt="Nagamani Mannempalli"
            />
          </div>

          {/* Right Side - Text */}
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hi, I'm <strong>Nagamani Mannempalli</strong>, a 3rd Year B.Tech
              Computer Science student passionate about building modern web
              applications and solving real-world problems.
            </p>
            <p>
              I specialize in <strong>Frontend Development</strong> with strong
              skills in React.js, JavaScript, HTML, CSS, and modern UI frameworks.
            </p>
            <p>
              I am seeking internship opportunities to apply my skills, learn from
              industry experts, and contribute to impactful projects.
            </p>

            {/* Skills Icons */}
            <div className="skills-icons">
              <FaReact />
              <FaJsSquare />
              <FaHtml5 />
              <FaCss3Alt />
            </div>
          </div>
        </div>
      </section>

      {/* Inline CSS */}
      <style>{`
        .about {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 50px 20px;
          background-color: #f9f9f9;
        }

        .about-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          max-width: 1100px;
          width: 100%;
          align-items: center;
        }

        .about-image img {
          width: 280px;
          height: 280px;
          border-radius: 20px;
          object-fit: cover;
          box-shadow: 0px 5px 15px rgba(0,0,0,0.2);
        }

        .about-text h2 {
          font-size: 36px;
          margin-bottom: 20px;
          color: #333;
        }

        .about-text p {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 15px;
          color: #555;
        }

        .skills-icons {
          margin-top: 20px;
          display: flex;
          gap: 20px;
          font-size: 40px;
          color: coral;
        }

        .skills-icons svg {
          transition: transform 0.3s ease, color 0.3s ease;
          cursor: pointer;
        }

        .skills-icons svg:hover {
          transform: scale(1.2);
          color: #ff7043;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .about-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .about-image img {
            margin: 0 auto;
          }
        }
      `}</style>
    </>
  );
}

export default About;
