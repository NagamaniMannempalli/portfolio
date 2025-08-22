import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your actual EmailJS IDs
    emailjs
      .send(
        "service_zj3u6p9",   // 👉 from EmailJS
        "template_65xixcj",  // 👉 from EmailJS
        formData,
        "hjbH-JjRSf3eDwaWj"    // 👉 from EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        background: "#fffaf7",
      }}
    >
      <h1 style={{ color: "#e9967a", marginBottom: "20px" }}>Get in Touch</h1>
      <p style={{ maxWidth: "600px", textAlign: "center", marginBottom: "30px", color: "#444" }}>
        I’d love to hear from you! Fill out the form below and I’ll get back to you as soon as possible.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        ></textarea>

        <button
          type="submit"
          style={{
            background: "#e9967a",
            color: "#fff",
            border: "none",
            padding: "12px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "500",
            transition: "0.3s",
          }}
        >
          Send Message
        </button>
      </form>

      {/* Status Message */}
      {status && (
        <p style={{ marginTop: "20px", color: status.includes("✅") ? "green" : "red" }}>
          {status}
        </p>
      )}
    </div>
  );
}

export default Contact;
