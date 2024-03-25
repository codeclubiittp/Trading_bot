import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AddUser from './pages/AddUser';
import UpdateUser from './pages/UpdateUser';
import FetchUser from './pages/FetchUser';

// components
import Navbar from './components/Navbar';

// authorization
import Login from './auth/Login';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/addUser" element={<AddUser />} />
                <Route path="/updateUser/:id" element={<UpdateUser />} />
                <Route path="/fetchUser/:id" element={<FetchUser />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;