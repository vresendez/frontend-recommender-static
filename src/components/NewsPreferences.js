import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/NewsPreferences.css';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../config';

const NewsPreferences = ({ onPreferencesSubmit }) => {
    const [selectedtags, setSelectedtags] = useState([]);
    const [toptags, setToptags] = useState([]); // This will hold the top 5 tags
    // const [queryParams, setQueryParams] = useState({});
    const navigate = useNavigate();
    const params = useParams(); // Get params from the URL
    useEffect(() => {
        // Log the current URL
        console.log('Current URL:', window.location.href);
        const fetchtags = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/data`);
                if (response.data) {
                    const tagCounts = response.data.reduce((acc, row) => {
                        const tag = row[4];
                        if (tag && tag !== 'Not Available') {
                            acc[tag] = (acc[tag] || 0) + 1;
                        }
                        return acc;
                    }, {});

                    // Sort tags by count in descending order
                    const sortedtags = Object.keys(tagCounts).sort(
                        (a, b) => tagCounts[b] - tagCounts[a]
                    );

                    // Get the top 5 tags
                    const top5tags = sortedtags.slice(0, 5);
                    setToptags(top5tags);
                    
                } else {
                    console.log('Unexpected API response:', response);
                }
            } catch (error) {
                console.error('Error fetching tags:', error);
            }
        };
        fetchtags();
    }, []);
    
    const handletagToggle = (tag) => {
        setSelectedtags((prev) =>
            prev.includes(tag) ? prev.filter((c) => c !== tag) : [...prev, tag]
        );
    };

    const handleSubmit = () => {
        console.log('Submitting tags:', selectedtags);
        onPreferencesSubmit(selectedtags);
      
        // Payload to be sent to the backend
        const payload = {
          userId: params.id,
          age: params.age,
          location: params.location,
          gender: params.gender,
          education: params.education,
          condition: params.condition,
          selectedTags: selectedtags,
        };
      
        // POST request to your backend
        axios.post(`${API_URL}/api/submitPreferences`, payload)
          .then(response => {
            console.log('Preferences saved:', response.data);
          })
          .catch(error => {
            console.error('Error saving preferences:', error);
          });
      
        // Navigate to the next page
        const path = `/website/${params.id}/${params.age}/${params.location}/${params.gender}/${params.education}/${params.condition}`;
        navigate(path, { replace: true, state: { selectedTags: selectedtags } });
      };
      

    return (
        <div className="preferences-form">
            <p>Deze nieuwsaanbeveler geeft je de relevante nieuwstitels van de dag. Selecteer je <b className='title'>favoriete nieuwsonderwerp</b> door erop te klikken om met de aanbevelingen te beginnen.</p>
            <div className="tags">
                {toptags.map((tag, index) => (
                    <button
                        key={tag}
                        className={`tag-button ${selectedtags.includes(tag) ? 'selected' : ''}`}
                        onClick={() => handletagToggle(tag)}
                    >
                        {index + 1}. {tag}
                    </button>
                ))}
            </div>
            <button className="submit-button" onClick={handleSubmit}>Voer uw voorkeuren voor nieuwsonderwerpen in en ga verder met de nieuwsaanbeveler</button>
        </div>
    );
};

export default NewsPreferences;
