import React from 'react';
import './Home.css'; // Jika Anda memiliki CSS untuk Home

function Home() {
    return (
        <div className="home-container">
            <h1>Selamat Datang di Website Kami</h1>
            <p>
                Kami adalah tim yang berdedikasi untuk memberikan solusi perangkat lunak terbaik. 
                Dengan pengalaman bertahun-tahun di industri, kami berkomitmen untuk membantu 
                klien kami mencapai tujuan mereka melalui teknologi inovatif.
            </p>
            <img src="https://source.unsplash.com/random/800x400" alt="Welcome" className="home-image" />
        </div>
    );
}

export default Home;
