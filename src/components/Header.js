import React from 'react'; // Ensure React is imported
import '../components/styles/Header.css'; // Import Header, ensure the path is correct

import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';

// Header component that accepts URL parameters
const Header = ({ id, age, location, gender, education, condition }) => {


 return (
  <header className='header'>
    <nav className='nav'>
      <ul>
        <Link className='link' to={`/profile/${id}/${age}/${location}/${gender}/${education}/${condition}`}>
          Profiel
        </Link>

        <Link className='link_two' to={`https://uva.fra1.qualtrics.com/jfe/form/SV_37wTXCn9lZyhwh0?ID=${id}&age=${age}&location=${location}&gender=${gender}&education=${education}&condition=${condition}&Q_Language=NL`}>
          Doorgaan met de enquête
        </Link>
      </ul>
    </nav>
  </header>
    );
}
export default Header;