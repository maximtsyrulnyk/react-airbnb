import React, { useState } from 'react';
import './index.css';

const PropertyDetails = () => {
  const [guests, setGuests] = useState(2);
  const [bedrooms, setBedrooms] = useState(1);
  const [beds, setBeds] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);

  const handleGuestsChange = (event) => {
    setGuests(parseInt(event.target.value));
  };

  const handleBedroomsChange = (event) => {
    setBedrooms(parseInt(event.target.value));
  };

  const handleBedsChange = (event) => {
    setBeds(parseInt(event.target.value));
  };

  const handleBathroomsChange = (event) => {
    setBathrooms(parseInt(event.target.value));
  };

  return (
    <div className="container">
      <h1>Деталі властивості</h1>

      <div className="details">
        <div className="detail">
          <label htmlFor="guests">Кількість гостей:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={guests}
            onChange={handleGuestsChange}
          />
        </div>

        <div className="detail">
          <label htmlFor="bedrooms">Спальні:</label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={bedrooms}
            onChange={handleBedroomsChange}
          />
        </div>

        <div className="detail">
          <label htmlFor="beds">Ліжка:</label>
          <input
            type="number"
            id="beds"
            name="beds"
            value={beds}
            onChange={handleBedsChange}
          />
        </div>

        <div className="detail">
          <label htmlFor="bathrooms">Ванні кімнати:</label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={bathrooms}
            onChange={handleBathroomsChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;