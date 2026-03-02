import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>My Internshala</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/login" className="login">Login</Link></li>
        <li><Link to="/register" className="register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
