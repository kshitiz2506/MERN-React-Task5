import React, { useState } from 'react';
import './AgeCalculator.css'

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const handleInputChange = (e) => {
    setBirthdate(e.target.value);
  };

  const calculateAge = () => {
    const birthdateDate = new Date(birthdate);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - birthdateDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);

    setAge(Math.floor(ageInYears));
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <label>Enter your birthdate: </label>
      <input
        type="date"
        value={birthdate}
        onChange={handleInputChange}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && (
        <p>Your age is: {age} years</p>
      )}
    </div>
  );
}

export default AgeCalculator;
