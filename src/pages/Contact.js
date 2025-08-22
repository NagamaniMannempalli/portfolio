import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({name:"", email:"", message:""});
  const [status, setStatus] = useState("");

  const handleChange = (e)=> setFormData({...formData, [e.target.name]: e.target.value});
  const handleSubmit = (e)=>{
    e.preventDefault();
    emailjs.send(
      "service_zj3u6p9",
      "template_65xixcj",
      formData,
      "hjbH-JjRSf3eDwaWj"
    ).then(
      (result)=>{
        setStatus("✅ Message sent successfully!");
        setFormData({name:"", email:"", message:""});
      },
      (error)=>{
        setStatus("❌ Failed to send message. Try again.");
      }
    );
  }

  return (
    <div className="contact-container">
      <h1>Get in Touch</h1>
      <p>I’d love to hear from you! Fill out the form below and I’ll get back to you as soon as possible.</p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required/>
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required/>
        <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {status && <p className={status.includes("✅") ? "success":"error"}>{status}</p>}

      <style>{`
        .contact-container {
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px;
          background: #fffaf7;
          text-align:center;
        }
        .contact-container h1 {
          color: #e9967a;
          margin-bottom: 20px;
        }
        .contact-container p {
          max-width: 600px;
          margin-bottom: 30px;
          color: #444;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
          width: 100%;
          max-width: 400px;
        }
        input, textarea {
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #ddd;
        }
        button {
          background: #e9967a;
          color: #fff;
          border: none;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: 0.3s;
        }
        button:hover{
          background:#fff;
          color:#e9967a;
          border:1px solid #e9967a;
        }
        .success {color:green;margin-top:20px;}
        .error {color:red;margin-top:20px;}

        @media(max-width:768px){
          .contact-container{
            padding:20px;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;
