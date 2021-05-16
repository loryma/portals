import React from 'react';
import Portal from './Portal';
import './Popup.css';

const Popup = ({ children, onClose, isOpened }) => {
  if (!isOpened) return null;

  const handleCloseClick = (e) => {
    e.stopPropagation();
    onClose();
  }

  return (
    <Portal>
      <div className="popup" role="dialog">
        <div 
          className="overlay" 
          role="button"
          tabIndex={0}
          onClick={handleCloseClick}
        ></div>
          <div className="content">
            {children}
          </div>
      </div>
    </Portal>
  )
};

export default Popup;