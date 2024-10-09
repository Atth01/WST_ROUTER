import React from 'react';
import './News.css';

const articles = [
    {
        title: 'Berita 1: Inovasi Teknologi Terbaru',
        content: 'Teknologi terus berkembang dengan pesat. Inovasi terbaru dalam bidang AI dan machine learning memberikan dampak besar pada berbagai industri.',
        date: '1 Januari 2024'
    },
    {
        title: 'Berita 2: Perkembangan Ekonomi Global',
        content: 'Ekonomi global menunjukkan tanda-tanda pemulihan setelah masa sulit. Banyak negara mulai melihat pertumbuhan yang positif.',
        date: '5 Januari 2024'
    },
    {
        title: 'Berita 3: Kesehatan Mental di Era Digital',
        content: 'Kesehatan mental menjadi perhatian utama di era digital ini. Penting untuk menjaga keseimbangan antara kehidupan online dan offline.',
        date: '10 Januari 2024'
    }
];

function News() {
    return (
        <div className="news-container">
            <h1>News</h1>
            {articles.map((article, index) => (
                <div key={index} className="news-item">
                    <h2>{article.title}</h2>
                    <p className="news-date">{article.date}</p>
                    <p>{article.content}</p>
                </div>
            ))}
        </div>
    );
}

export default News;
