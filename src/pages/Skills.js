import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Skills() {
  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">

        {/* Frontend Skills */}
        <div className="skill-card">
          <h3>HTML</h3>
          <div className="stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
        </div>
        <div className="skill-card">
          <h3>CSS</h3>
          <div className="stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
        </div>
        <div className="skill-card">
          <h3>JavaScript</h3>
          <div className="stars"><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
        </div>
        <div className="skill-card">
          <h3>React</h3>
          <div className="stars"><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
        </div>

        {/* Backend / Core Skills */}
        <div className="skill-card">
          <h3>Core Java</h3>
          <div className="stars"><FaStar /><FaStar /><FaStar /><FaStar /></div>
        </div>
        <div className="skill-card">
          <h3>Spring Framework</h3>
          <div className="stars"><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
        </div>
        <div className="skill-card">
          <h3>Spring Boot</h3>
          <div className="stars"><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
        </div>
        <div className="skill-card">
          <h3>REST APIs</h3>
          <div className="stars"><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
        </div>
        <div className="skill-card">
          <h3>Hibernate / JPA</h3>
          <div className="stars"><FaStar /><FaStar /><FaStar /><FaRegStar /></div>
        </div>

        {/* Database */}
        <div className="skill-card">
          <h3>SQL</h3>
          <div className="stars"><FaStar /><FaStar /><FaStar /><FaStar /></div>
        </div>
        

        {/* Tools */}
        <div className="skill-card">
          <h3>Git & GitHub</h3>
          <div className="stars"><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
        </div>
        <div className="skill-card">
          <h3>Postman</h3>
          <div className="stars"><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
        </div>

      </div>

      <style>{`
        .skills-section {
          padding: 50px;
          text-align: center;
          background: #f9f9f9;
        }
        .skills-section h2 {
          font-size: 2rem;
          margin-bottom: 30px;
          color: #333;
        }
        .skills-container {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }
        .skill-card {
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          width: 250px;
          text-align: center;
        }
        .skill-card h3 {
          margin-bottom: 15px;
          font-size: 1.2rem;
          color: #444;
        }
        .stars {
          color: #f39c12;
          font-size: 1.2rem;
        }

        @media(max-width:768px){
          .skills-container{
            justify-content: center;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}

export default Skills;