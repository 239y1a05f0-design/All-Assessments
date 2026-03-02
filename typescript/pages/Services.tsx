import { useState } from "react";
import "./Services.css";

const Services = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="page services-page">
      <h1>Our Services</h1>
      <p className="subtitle">
        We provide high-quality digital solutions 🚀
      </p>

      <div className="services-container">

       
        <div className="service-card">
          <h2>💻 Web Development</h2>
          <p>Modern, responsive websites using latest technologies.</p>

          {activeCard === 0 && (
            <div className="more-info">
              <p>
                We build fast, SEO-friendly websites using React, HTML, CSS,
                JavaScript, and modern frameworks.
              </p>
            </div>
          )}

          <button onClick={() => toggleCard(0)}>
            {activeCard === 0 ? "Show Less" : "Learn More"}
          </button>
        </div>

        
        <div className="service-card">
          <h2>📱 App Development</h2>
          <p>Android & iOS applications with smooth performance.</p>

          {activeCard === 1 && (
            <div className="more-info">
              <p>
                We develop high-performance mobile apps using React Native,
                Flutter, and modern mobile technologies.
              </p>
            </div>
          )}

          <button onClick={() => toggleCard(1)}>
            {activeCard === 1 ? "Show Less" : "Learn More"}
          </button>
        </div>

        
        <div className="service-card">
          <h2>🎨 UI / UX Design</h2>
          <p>Beautiful and user-friendly designs for your product.</p>

          {activeCard === 2 && (
            <div className="more-info">
              <p>
                We design intuitive user experiences with Figma, Adobe XD,
                and user-centered design principles.
              </p>
            </div>
          )}

          <button onClick={() => toggleCard(2)}>
            {activeCard === 2 ? "Show Less" : "Learn More"}
          </button>
        </div>

        
        <div className="service-card">
          <h2>📈 Digital Marketing</h2>
          <p>Grow your business with smart online strategies.</p>

          {activeCard === 3 && (
            <div className="more-info">
              <p>
                SEO, social media marketing, Google Ads, and content strategies
                to boost online visibility.
              </p>
            </div>
          )}

          <button onClick={() => toggleCard(3)}>
            {activeCard === 3 ? "Show Less" : "Learn More"}
          </button>
        </div>

       
        <div className="service-card">
          <h2>☁️ Cloud Services</h2>
          <p>Secure and scalable cloud solutions.</p>

          {activeCard === 4 && (
            <div className="more-info">
              <p>
                Cloud hosting, deployment, and maintenance using AWS, Azure,
                and Google Cloud.
              </p>
            </div>
          )}

          <button onClick={() => toggleCard(4)}>
            {activeCard === 4 ? "Show Less" : "Learn More"}
          </button>
        </div>

        
        <div className="service-card">
          <h2>🎓 Internship & Training</h2>
          <p>Learn industry-ready skills with real projects.</p>

          {activeCard === 5 && (
            <div className="more-info">
              <p>
                Hands-on internships, live projects, and mentorship in
                web development, UI/UX, and full-stack technologies.
              </p>
            </div>
          )}

          <button onClick={() => toggleCard(5)}>
            {activeCard === 5 ? "Show Less" : "Learn More"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Services;
