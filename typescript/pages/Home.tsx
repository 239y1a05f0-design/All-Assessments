import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      
  
      <section className="hero">
        <h1>Welcome to Our Internshala 🚀</h1>
        <p>Your one-stop place for amazing services</p>

        <button
          className="hero-btn"
          onClick={() => navigate("/services")}
        >
          Get Started
        </button>
      </section>

      
      <img
        src=""
        alt="home"
        className="home-img"
      />

      
      <section className="features">
        <h2>Our Features</h2>

        <div className="cards">
          <div className="card">
            <h3>Fast</h3>
            <p>Quick and responsive user experience.</p>
          </div>

          <div className="card">
            <h3>Secure</h3>
            <p>Your data is protected and safe.</p>
          </div>

          <div className="card">
            <h3>Reliable</h3>
            <p>Trusted by users worldwide.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
