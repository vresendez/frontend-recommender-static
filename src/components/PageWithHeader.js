import React from 'react'; // Ensure React is imported
import { useParams } from 'react-router-dom'; // Import useParams
import Header from './Header'; // Import Header, ensure the path is correct


// A wrapper component to capture URL parameters and pass them to the Header
const PageWithHeader = ({ children }) => {
    const params = useParams();
    return (
      <>
        <Header {...params} />
        {children}
      </>
    );
  };
export default PageWithHeader;
