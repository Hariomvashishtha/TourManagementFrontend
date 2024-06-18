import React, { useState, useEffect } from 'react';

const AlertMessage = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  return (
    visible && (
      <div style={styles.alert}>
        {message}
      </div>
    )
  );
};

const styles = {
  alert: {
    padding: '10px 20px',
    backgroundColor: '#f44336', // Red color for the alert
    color: 'white',
    position: 'fixed',
    top: '10px',
    left: '10px',
    zIndex: 1000,
    borderRadius: '5px',
  },
};

export default AlertMessage;
