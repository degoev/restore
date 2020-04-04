import React from "react";

import './error-indicator.css';

let ErrorIndicator = () => {
     return (
     <div className="error-indicator">
          <img src='./error-icon.png' alt="error icon" />
          <span className="boom">Oops!</span>
          <span>something has been crashed </span>
          <span>(but we already improving it)</span>
     </div>
     );
};

export default ErrorIndicator;