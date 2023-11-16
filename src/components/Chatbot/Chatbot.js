import React from 'react';
import { useParams } from 'react-router-dom';

import '../styles/Chatbot.css';

const Chatbot = ({  }) => {
  
  const {participantID} = useParams();
  // let {age} = useParams();
  // let {location} = useParams();
  // let {gender} = useParams();
  // let {education} = useParams();
  let {condition} = useParams();
  // The src string with the participantID dynamically included
  const iframeSrc = `https://europe.webchat.botframework.com/embed/JosBotNL?s=0RTzI3dqyBM.7Jjjkfy5Xmgu6DaGi8SbSMvhytqaE4uy5CQvCOaDMFc&userID=${participantID}test&username=josbot_${condition}`;

  

  return (
    <div className="chatbot">
      
      <iframe
        src={iframeSrc} 
         style={{ minWidth: '300px', width: '100%', minHeight: '700px' }}
      ></iframe>
    </div>
  );
}

export default Chatbot;
