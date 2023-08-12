import React, { useState, useEffect } from 'react';
import './LoadSpinner.css'; // Import the CSS file

function LoadingSpinner() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setError(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading-spinner">
      {loading ? (
        <div className="loading-circle"></div>
      ) : error ? (
        <p className="error-message">An error occurred while loading.</p>
      ) : (
        <p>Content loaded successfully.</p>
      )}
    </div>
  );
}



export default LoadingSpinner;