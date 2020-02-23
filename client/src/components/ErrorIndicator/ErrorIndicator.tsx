import React from 'react';
import './ErrorIndicator.scss';
import icon from './ErrorIndicatorIcon.png';

const ErrorIndicator = () => (
    <div className="error-indicator">
        <img src={icon} alt="error icon" />
        <span className="error">Oops!</span>
        <span>Something went terribly wrong!</span>
        <span>(we are already working on it)</span>
    </div>
);

export default ErrorIndicator;