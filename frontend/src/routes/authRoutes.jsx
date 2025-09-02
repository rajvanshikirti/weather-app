import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import React, {  Suspense }from 'react';
=======
import React from 'react';
import { lazy, Suspense } from 'react';
>>>>>>> 6a3fbfcd9d87e4151d424bad4a6a984442626879
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

function AuthRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Suspense>
    );
}

export default AuthRoutes;