import React from 'react'; // Ensure React is imported
import { useParams } from 'react-router-dom'; // Import useParams
import Footer from './Footer'; // Import Header, ensure the path is correct


// A wrapper component to capture URL parameters and pass them to the Header
const PageWithFooter = ({ children }) => {
    const params = useParams();
    return (
      <>
        <Footer {...params} />
        {children}
      </>
    );
  };
export default PageWithFooter;
