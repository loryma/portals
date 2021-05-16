import React, { useState } from 'react';
import Popup from './Popup';
import './PageWithPopup.css';
import blockIcon from './block.svg';

function PageWithPopup() {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isInnerPopupOpened, setIsInnerPopupOpened] = useState(false);

  const closeFirstPopup = () => {
    setIsPopupOpened(false);
  };

  const openFirstPopup = () => {
    setIsPopupOpened(true);
  };

  const closeSecondPopup = (e) => {
    e.stopPropagation();
    setIsInnerPopupOpened(false);
  };

  const openSecondPopup = (e) => {
    e.stopPropagation();
    setIsInnerPopupOpened(true);
  }

  return (
    <div>
      <div className="avatar avatar--main" onClick={openFirstPopup}>
      </div>
      <Popup isOpened={isPopupOpened} onClose={closeFirstPopup}>
        <div className="user-info">
          <div className="avatar user-info__avatar">
          </div>
          <h2 className="user-info__name">
            Mister Kinski
          </h2>
          <div className="user-info__actions">
            <div className="user-info__actions-item" onClick={openSecondPopup}>
              <img alt="user-avatar" src={blockIcon} className="user-info__action-icon" />
              <div>
                Block user
              </div>
              <Popup isOpened={isInnerPopupOpened} onClose={closeSecondPopup}>
                <div className="block-user-popup">
                  <h4 className="block-user-popup__header">
                    Are you sure?
                  </h4>
                  <div className="block-user-popup__actions">
                    <button onClick={closeSecondPopup} className="block-user-popup__button">
                      Yes
                    </button>
                    <button onClick={closeSecondPopup} className="block-user-popup__button">
                      No
                    </button>
                  </div>
                </div>
              </Popup>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  )
};

export default PageWithPopup;