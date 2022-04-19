import { registerUser, loginUser } from '../firebase/authFunctions';
import { useRouter } from 'next/router';
import { AuthContext } from '../firebase/context';
import React, { useState, useEffect, useContext } from 'react';

const RegisterFreelancer = () => {
  const [biography, setBiography] = useState('');
  const [postalcode, setPostalcode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <h3>Register a Freelancer Account</h3>
      <form onSubmit={handleSubmit}>
        <div className="input_container">
          <label>Postal Code: </label>
          <input
            type="postalcode"
            name="postalcode"
            onChange={(e) => setPostalcode(e.target.value)}
          />
        </div>

        <div className="input_container">
          <label>Biography: </label>
          <input
            type="biography"
            name="biography"
            onChange={(e) => setBiography(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default RegisterFreelancer;
