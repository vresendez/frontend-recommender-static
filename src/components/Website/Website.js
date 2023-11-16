import React, { useState, useEffect } from 'react';
import '../styles/Website.css';
import NewsButtons from './NewsButtons.js';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../config';

const Website = ({ selectedtags, articles }) => {
    const [selectedArticleId, setSelectedArticleId] = useState(null);
    const [filteredArticles, setFilteredArticles] = useState(articles);
    const params = useParams(); // Get params from the URL

    useEffect(() => {
        setFilteredArticles(articles);
    }, [articles]);

    const handleArticleClick = (id) => {
        setSelectedArticleId(prevId => prevId === id ? null : id);
    
        // Send click data to the backend
        const clickData = {
            userId: params.id,
            articleId: id,
            action: 'article_click'
        };
        sendClickDataToBackend(clickData);
    };
    
    const handleTagClick = (tag) => {
        if (tag === "All") {
            setFilteredArticles(articles);
        } else {
            const articlesByTag = articles.filter(article => article[4] === tag);
            setFilteredArticles(articlesByTag);
        }
    };
    const sendClickDataToBackend = (clickData) => {
        // Replace with your backend API endpoint
        axios.post(`${API_URL}/api/clickData`, clickData)
            .then(response => {
                console.log('Click data sent:', response.data);
            })
            .catch(error => {
                console.error('Error sending click data:', error);
            });
    };
    return (
        <div className="website-container">
            <h2>Deze nieuwsaanbeveler geeft je de relevante nieuwsartikelen</h2>
            <NewsButtons selectedtags={["All", ...selectedtags]} ontagClick={handleTagClick} />
            <ul className="news-list">
                {filteredArticles.map((article, index) => {
                    const [id, title, link, fullSummary, tag, imageUrl] = article; // Adjust according to your actual article object structure
                    const firstLineOfSummary = fullSummary.split('.')[0]; //
                    return (
                        <li key={id || index} className={`news-article ${selectedArticleId === id ? 'open' : ''}`} onClick={() => handleArticleClick(id)}>
                            <div className="header">
                                <h2>{title}</h2>
                            </div>
                            {selectedArticleId === id && (
                                <>
                                    
                                    <p>{firstLineOfSummary}.</p>
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Website;