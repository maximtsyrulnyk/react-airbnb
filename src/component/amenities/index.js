import React, { useState } from 'react';
import './App.css';

const PropertyDetails = () => {
  const [amenities, setAmenities] = useState([
    { id: 1, name: 'Басейн', checked: false },
    { id: 2, name: 'Спортивний зал', checked: false },
    { id: 3, name: 'Безкоштовний сніданок', checked: false },
    { id: 4, name: 'Безкоштовний Wi-Fi', checked: true },
    { id: 5, name: 'Безкоштовний вуличний паркінг', checked: false },
    { id: 6, name: 'Дозволено розміщення з домашніми тваринами', checked: false },
    { id: 7, name: 'Трансфер до/з аеропорту', checked: false },
    { id: 8, name: 'Консьерж-сервіс', checked: false },
    { id: 9, name: 'Обслуговування номерів', checked: false },
    { id: 10, name: 'Підходить для дітей', checked: false },
  ]);

  const handleAmenityChange = (event) => {
    const id = parseInt(event.target.id);
    const checked = event.target.checked;
    const updatedAmenities = amenities.map((amenity) => {
      if (amenity.id === id) {
        return { ...amenity, checked };
      }
      return amenity;
    });
    setAmenities(updatedAmenities);
  };

  return (
    <div className="container">
      <h1>Деталі властивості</h1>

      <div className="details">
        <div className="amenities">
          <h2>Вигоди</h2>
          {amenities.map((amenity) => (
            <div className="amenity" key={amenity.id}>
              <input
                type="checkbox"
                id={amenity.id}
                checked={amenity.checked}
                onChange={handleAmenityChange}
              />
              <label htmlFor={amenity.id}>{amenity.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;