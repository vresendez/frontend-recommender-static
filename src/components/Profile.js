import React from 'react';
import { Link, useParams } from 'react-router-dom';
import userIcon from './images/user.svg';

const UserProfile = () => {
    const { id, age, location, gender, education, condition } = useParams();

    let backLink;
    // Determine the destination based on the condition
    console.log(condition)
    if (condition === 'condition1') {
      backLink = `/chatbot/${id}/${age}/${location}/${gender}/${education}/${condition}`;
    } else if (condition === 'condition2') {
      backLink = `/news-preferences/${id}/${age}/${location}/${gender}/${education}/${condition}`;
    }
  return (
    <div>
      {backLink && <Link to={backLink} className="go-back-button">Go Back</Link>}

      <h1>Jouw profiel</h1>
      <div>
        {/* Display user icon/avatar */}
        <img src={userIcon} alt="User Icon" />
      </div>
      <div>
        {/* Display additional profile details from URL */}
        <p>ID: {id}</p>
        <p>Leeftijd: {age}</p>
        <p>Locatie: {location}</p>
        <p>Geslach: {gender}</p>
        <p>Onderwijs: {education}</p>

      </div>
    </div>
  );
}

export default UserProfile;