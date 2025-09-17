import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  // States for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // State for showing error message
  const [errorMessage, setErrorMessage] = useState("");

  // Handling form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: email,
          PassWord: password,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        setTimeout(() => {
          navigate("/");
          location.reload();
        }, 3000);
      } else {
        setErrorMessage(result.error || "invalid Email or Password");
      }
    } catch (error) {
      console.log("error", error);
      setErrorMessage("Something went wrong. Please try again");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <h6
        style={{
          position: "absolute",
          transform: "translate(-130px,240px)",
          top: "50%",
          left: "50%",
        }}
      >
        {" "}
        not have an account replace to{" "}
        <Link to={"/Register"}>
          <span style={{ color: "blue" }}>Sign in</span>
        </Link>{" "}
      </h6>
    </div>
  );
}

export default Login;
