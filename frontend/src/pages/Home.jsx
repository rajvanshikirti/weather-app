import React from 'react';
import axios from 'axios';
import toast from "react-hot-toast"
const Home = () => {
    const handleLogout =async () => {
      const response= await  axios.get(`${import.meta.env.VITE_BACKEND_URL}api/auth/logout`);
      toast.success(response.data.message)
      console.log(response.data)
      
    };

    return (
        <div>
            Home
            <button onClick={handleLogout}>logout</button>
        </div>
    );
};

export default Home;