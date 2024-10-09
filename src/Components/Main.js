// src/Components/Main.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Gallery from './Section/Gallery';
import News from './Section/News';
import About from './Section/About'; // Pastikan Anda memiliki About.js

function Main() {
    return (
        <Routes>
            <Route path="/" element={<News />} /> {/* Rute untuk Home */}
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default Main;