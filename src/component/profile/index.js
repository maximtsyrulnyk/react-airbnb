import React from 'react';
import './index.css'; 

const Profile = ({profileImg}) => {
  return (
    <div className="profile">
      <div className="profile-image">
        <img src={profileImg} alt="Profile Picture" />
      </div>

      <div className="profile-info">
        <h3 className="profile-name">Господар – Kerthy</h3>

        <div className="contact-details title__sub-block">
          <i className="phone-number title__sub-value">
            +123-456-7890
          </i>
          <i className="response-time title__sub-value">Протягом години</i>
          <i className="response-time title__sub-value">100% відсотків швидкості відгуку</i>
        </div>
        <p className="profile-description">
        Я кінорежисерка і телевізійний продюсер Остіна-Брукліна, якого можна знайти на велосипеді до Фермерського ринку...
        </p>

        <div className="additional-properties">

        </div>
      </div>
    </div>
  );
};

export default Profile;