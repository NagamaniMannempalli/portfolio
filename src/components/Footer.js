// Footer.js
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Nagamani Mannempalli</p>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/mannempalli-nagamani-8779b8353" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/NagamaniMannempalli" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>

      <style>{`
        .footer {
          background: #e9967a;
          padding: 20px;
          text-align: center;
          color: #fff;
          margin-top: 40px;
        }
        .footer-icons {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 12px;
        }
        .footer-icons a {
          color: #fff;
          font-size: 28px;
          transition: 0.3s;
        }
        .footer-icons a:hover {
          color: #333;
        }

        @media(max-width:768px){
          .footer-icons {
            gap: 15px;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
