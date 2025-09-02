import { useState } from "react";
import React from "react";
import Error from "../components/Error";
import {useNavigate} from "react-router-dom"
import toast from "react-hot-toast";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const Navigate=UseNavigate();
  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const response=await axios.post(`${process.env.BACKEND_URL}api/auth/register`,{
        username,email,password
      });

      if(!response){
        <Error message={"Server Down "}/>
        Navigate(0);
      }
      toast.success("User registered successfully");
      Navigate('/');
      
    } catch (error) {
      <Error message={error.message} />
    }
    
  };
  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Register Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br /><br />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Register;
