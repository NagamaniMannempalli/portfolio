// Home.js
function Home() {
  return (
    <div className="home-section">
      <div className="home-image">
        <img src="/photo.jpeg" alt="My picture" />
      </div>
      <div className="home-text">
        <h1>👋 Hi, I'm <span>Nagamani Mannempalli</span></h1>
        <h3>A Frontend Developer</h3>
        <p>
          I’m a 3rd-year Computer Science student with a strong focus on <b>Frontend Development</b>. 
          I specialize in building responsive, user-friendly, and visually appealing web applications using 
          <b> React, JavaScript, HTML, and CSS</b>.
        </p>
        <div className="home-buttons">
          <a href="/projects" className="projects-btn">View Projects</a>
          <a href="/Resume.pdf" download className="resume-btn">Download Resume</a>
        </div>
      </div>

      <style>{`
        .home-section {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 90vh;
          padding: 40px;
          background: #fffaf7;
          gap: 50px;
        }

        .home-image img {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          border: 4px solid #e9967a;
          transition: transform 0.3s ease;
        }
        .home-image img:hover {
          transform: scale(1.05);
        }

        .home-text h1 {
          font-size: 2.5rem;
          color: #333;
        }
        .home-text h1 span {
          color: #e9967a;
        }
        .home-text h3 {
          color: #444;
          margin-bottom: 20px;
        }
        .home-text p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #555;
          margin-bottom: 30px;
          max-width: 600px;
        }

        .home-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .home-buttons a {
          padding: 12px 22px;
          border-radius: 30px;
          font-weight: 500;
          text-decoration: none;
          transition: 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        /* View Projects Button */
        .projects-btn {
          background: #e9967a;
          color: #fff;
        }
        .projects-btn:hover {
          background: #fff;
          color: #e9967a;
          border: 1px solid #e9967a;
          box-shadow: 0 6px 15px rgba(233,150,122,0.3);
        }

        /* Download Resume Button */
        .resume-btn {
          background: #fff;
          color: #e9967a;
          border: 2px solid #e9967a;
        }
        .resume-btn:hover {
          background: #e9967a;
          color: #fff;
          box-shadow: 0 6px 15px rgba(233,150,122,0.4);
        }

        @media(max-width:1024px){
          .home-section{
            flex-direction: column;
            text-align: center;
          }
          .home-buttons{
            justify-content:center;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
