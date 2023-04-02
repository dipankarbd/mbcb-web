import './ErrorView.css';
import React from 'react';

interface ErrorViewProps {
  errorMessage: string;
}

const ErrorView: React.FC<ErrorViewProps> = ({ errorMessage }) => {
  return (
    <div className="ErrorView">
      <h3>{errorMessage}</h3>
    </div>
  );
};

export default ErrorView;
