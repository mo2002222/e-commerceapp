import { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

function CreateAccount() {
  // States for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message , setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  // State for showing error messages
  const [errorMessage, setErrorMessage] = useState("");

  // Handling form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    try {
      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match");
        return;
      }
      const response = await fetch("http://localhost:3000/register",{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          Name: name,
          Email: email,
          PassWord: password
        })
      });
      const result = await response.json();
      if (response.ok) {
        // document.cookie = `token=${result.token}; path=/; max-age=3600; Secure; SameSite=Strict`;
        setMessage('Registration successful!');
        setTimeout(() => {
          navigate('/Login')
        }, 3000);
      } else {
        setMessage(result.error || 'Registration failed');
      }

    } catch (error) {
      console.error('Error:', error);
      setMessage('Something went wrong. Please try again.');
    }finally{
      setIsLoading(false)
    }

    // Simple success message (replace with API call logic)
    // Clear form fields (optional)
    // setName("");
    // setEmail("");
    // setPassword("");
    // setConfirmPassword("");
    // setErrorMessage("");
  };

  return (
    <div className="create-account-container">
      <form method="post" className="create-account-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <div className="form-group">
          <label htmlFor="name">UserNme</label>
          <input
            type="text"
            name="Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="PassWord"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);

            }}
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit" className="create-account-button">
        {isLoading ? 'Registering...' : 'Register'}
        </button>
        {message && <p className="text-center">{message}</p>}
        {isLoading && (
          <div className="loading-spinner" style={{ marginTop: '10px' }}>
            <div className="spinner"></div>
          </div>
        )}
      </form>

      <style>{`
        .spinner {
          width: 24px;
          height: 24px;
          border: 4px solid #ccc;
          border-top-color: #333;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>


      <h6 style={{position:"absolute",transform:"translate(-100px,330px)", top:"50%",left:"50%"}}>Already have an acount <Link to={'/Login'}><span style={{color:"blue"}}>login</span></Link> </h6>
    </div>
  );
}

export default CreateAccount;
