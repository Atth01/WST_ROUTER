// src/Components/Section/Banner.js
import React, { useEffect, useState } from 'react';
import './Banner.css';

const images = [
    'https://source.unsplash.com/random/800x400?sig=1', // Gambar acak 1
    'https://source.unsplash.com/random/800x400?sig=2', // Gambar acak 2
    'https://source.unsplash.com/random/800x400?sig=3'  // Gambar acak 3
];

function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Ganti gambar setiap 3 detik

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="banner">
            <img src={images[currentIndex]} alt="Banner" className="banner-image" />
        </div>
    );
}

export default Banner;