import React from 'react'; // Ensure React is imported

import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';

// Header component that accepts URL parameters
const Header = ({ id, age, location, gender, education, condition }) => {


 return (
  <header className='header'>
    <nav className='nav'>
      <ul>
        <Link to={`/profile/${id}/${age}/${location}/${gender}/${education}/${condition}`}>
          Profile
        </Link>
      </ul>
    </nav>
  </header>
    );
}
export default Header;