import React from 'react';
import '../components/styles/Website.css'; // Import Header, ensure the path is correct
import { useParams, Link } from 'react-router-dom';
import '../components/styles/Header.css'; // Import Header, ensure the path is correct

const Footer = ({ id, age, location, gender, education, condition }) => {
    // Use useParams to access URL parameters
  
    return (
      <footer className="footer">
         <Link className='link_two' to={`https://uva.fra1.qualtrics.com/jfe/form/SV_efgzmlDj2xyuY5w?imid=${id}&age=${age}&location=${location}&gender=${gender}&education=${education}&condition=${condition}&Q_Language=NL`}>
           Doorgaan met de enquête →
         </Link>
         <p>&copy; 2023. All Rights Reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  
