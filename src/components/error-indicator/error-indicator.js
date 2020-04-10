import React from "react";

import './error-indicator.css';

//import icon from 'http://localhost:7700/Restore/src/components/error-indicator/error-icon.png'

let ErrorIndicator = () => {
     return (
     <div className="error-indicator">
          <img src='./error-icon.png' />
          <span>Oops!</span>
          <span>something has been crashed </span>
          <span>(but we already improving it)</span>
     </div>
     );
};

export default ErrorIndicator;