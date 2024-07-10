import React from 'react';
import './styles.css'; 

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-image">
        <img src="https://www.linkedin.com/pub/dir/Keerthi/Suresh" alt="Profile Picture" />
      </div>

      <div className="profile-info">
        <h3 className="profile-name">Kerthy</h3>
        <p className="profile-description">
          Кинорежисерка і телевізійний продюсер Остіна-Брукліна, якого можна
          знайти на велосипеді до Фермерського ринку...
        </p>

        <div className="contact-details">
          <a href="tel:+1234567890" className="phone-number">
            +123-456-7890
          </a>
          <span className="response-time">Протягом години</span>
        </div>

        <div className="additional-properties">
          <ul>
            <li>
              <i className="fas fa-child"></i>
              Підходить для дітей
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;