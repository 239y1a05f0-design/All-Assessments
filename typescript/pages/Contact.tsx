import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    navigate("/"); // Redirect to Home page
  };

  return (
    <div className="contact-page">

      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We are here to help you 🚀</p>
      </header>

      <main className="contact-main">

        <section className="contact-info">
          <h2>Get in Touch</h2>
          <p>📧 support@myinternshala.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Hyderabad, India</p>
        </section>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>

      </main>

    </div>
  );
};

export default Contact;
