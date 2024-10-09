// src/App.js
import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main'; // Pastikan Main tidak memiliki Router
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css';

function App() {
    return (
        <Router>
            <div className='d-block'>
                <Header />
                <div class="">
                    <Navbar className="" />
                    <Main className="main" />
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;