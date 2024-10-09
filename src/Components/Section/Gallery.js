import React from 'react';
import './Gallery.css';

const images = [
    'https://source.unsplash.com/random/300x200?sig=1', // Gambar acak 1
    'https://source.unsplash.com/random/300x200?sig=2', // Gambar acak 2
    'https://source.unsplash.com/random/300x200?sig=3', // Gambar acak 3
    'https://source.unsplash.com/random/300x200?sig=4', // Gambar acak 4
    'https://source.unsplash.com/random/300x200?sig=5', // Gambar acak 5
    'https://source.unsplash.com/random/300x200?sig=6'  // Gambar acak 6
];

function Gallery() {
    return (
        <div className="gallery-container">
            <h1>Gallery</h1>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image} alt={`Gallery ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
