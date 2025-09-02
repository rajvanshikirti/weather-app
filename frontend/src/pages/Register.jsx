import { useState } from "react";
import React from "react";
<<<<<<< HEAD
=======
import Error from "../components/Error";
>>>>>>> 6a3fbfcd9d87e4151d424bad4a6a984442626879
import {useNavigate} from "react-router-dom"
import toast from "react-hot-toast";
import axios from 'axios';
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const Navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response=await axios.post(`${import.meta.env.VITE_BACKEND_URL}api/auth/register`,{
        username,email,password
      });
      console.log(response)

      if(!response){
        Navigate(0);
      }
      toast.success("User registered successfully");
      Navigate('/');
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
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
