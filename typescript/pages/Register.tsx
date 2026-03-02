import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("All fields are required");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!form.agree) {
      setError("You must accept Terms & Conditions");
      return;
    }

    setError("");
    alert("Registration Successful 🎉");
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <p className="subtitle">Join My Internshala 🚀</p>

        {error && <p className="error">{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          onChange={handleChange}
        />

        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />

        <label className="checkbox">
          <input
            type="checkbox"
            name="agree"
            onChange={handleChange}
          />
          I agree to the Terms & Conditions
        </label>

        <button type="submit">Register</button>

        <p className="switch">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </form>
    </div>
  );
};

export default Register;
