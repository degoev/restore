import React from "react";

import './error-indicator.css';

import icon from './error-icon.png';
let ErrorIndicator = () => {
     return (
     <div className="error-indicator">
          <img src={icon} alt="error indicator" />
          <span>Oops!</span>
          <span>something has been crashed </span>
          <span>(but we already resolving it)</span>
     </div>
     );
};

export default ErrorIndicator;