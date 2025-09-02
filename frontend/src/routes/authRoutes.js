import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
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