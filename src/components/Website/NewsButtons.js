import React from 'react';
import '../styles/NewsButtons.css';  // Importing a stylesheet

const NewsButtons = ({ selectedtags, ontagClick, }) => {
    console.log(typeof ontagClick);  // Debugging line
    return (
        <div className="buttons-container">
            {selectedtags.map(tag => (
            <button
                key={tag}
                className="news-button"
                onClick={() => ontagClick(tag)}
                >
                {tag}
            </button>
            ))}
        </div>
    );
};

export default NewsButtons;
