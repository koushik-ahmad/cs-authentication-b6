import React, { useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import { toast } from "react-hot-toast";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    // const email = event.target.email.value;
    // const password = event.target.password.value;
  }

  const handleEmailChange = (event) => {
    const email = event.target.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ ...errors, email: "Please provide a valid email" })
      setUserInfo({ ...userInfo, email: event.target.value })
    }
    else {
      setErrors({ ...errors, email: '' })
      setUserInfo({ ...userInfo, email: event.target.value })
    }
  }

  const handlePasswordChange = (event) => {
    const password = event.target.value;

    if (password.length < 6) {
      setErrors({ ...errors, password: 'must be at least 6 characters' })
      setUserInfo({ ...userInfo, password: event.target.value });
    }
    else {
      setErrors({ ...errors, password: '' });
      setUserInfo({ ...userInfo, password: event.target.value });
    }
  }

  return (
    <div className="login-container">
      <div className="login-title">
        Login
        <BiLogInCircle />
      </div>
      <form onSubmit={handleSubmit} className="login-form">

        <input type="email" name="email" placeholder="Your Email"
          value={userInfo.email}
          onChange={handleEmailChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <input type="password" name="password" placeholder="password"
          value={userInfo.password}
          onChange={handlePasswordChange}
        />

        {errors.password && <p className="error-message">{errors.password}</p>}
        <button>Login</button>

        <p>
          Don't have an account? <Link to="/signup">Sign up first</Link>
        </p>
      </form>

      <button>Google</button>
    </div>
  );
};

export default Login;
