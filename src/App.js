import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Website from './components/Website/Website.js';
import NewsPreferences from './components/NewsPreferences';
import UserProfile from './components/Profile.js';
import Chatbot from './components/Chatbot/Chatbot.js';
import PageWithHeader from './components/PageWithHeader.js';
import { API_URL } from './config';

import './App.css';

const App = () => {
  const [selectedtags, setSelectedtags] = useState([]);
  const [articles, setArticles] = useState([]);
  
const handlePreferencesSubmit = (tags) => {
    setSelectedtags(tags);
    axios.post(`${API_URL}/api/recommend`, { tags: tags })
      .then(response => {
        // Handle the response containing the recommendations
        setArticles(response.data.similar_articles);
      })
      .catch(error => {
        console.error('Error fetching recommendations:', error);
      });
  };

  

  return (
    <Router>
      <div className="App">
        
        <Routes>
        {/* Wrap each Route with PageWithHeader */}
          <Route path="/news-preferences/:id/:age/:location/:gender/:education/:condition" element={<PageWithHeader><NewsPreferences onPreferencesSubmit={handlePreferencesSubmit} /></PageWithHeader>} />
          <Route path="/website/:id/:age/:location/:gender/:education/:condition" element={<PageWithHeader><Website selectedtags={selectedtags} articles={articles} /></PageWithHeader>} />
          <Route path="/chatbot/:id/:age/:location/:gender/:education/:condition" element={<PageWithHeader><Chatbot articles={articles} /></PageWithHeader>} />
          <Route 
            path="/profile/:id/:age/:location/:gender/:education/:condition" 
            element={<PageWithHeader><UserProfile /></PageWithHeader>} 
          />
     
          </Routes>
      </div>
    </Router>
  );
};

export default App;

