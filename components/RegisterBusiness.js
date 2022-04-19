import {} from '../firebase/authFunctions';
import { useRouter } from 'next/router';
import { AuthContext } from '../firebase/context';
import React, { useState, useEffect, useContext } from 'react';

const RegisterBusiness = () => {
  const router = useRouter();
  const [biography, setBiography] = useState('');
  const [address, setAddress] = useState('');
  const [postalcode, setPostalcode] = useState('');
  const [error, setError] = useState(null);
  const [value, setValue] = useState('freelancer');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <h3>Register a Business Account</h3>
      <form onSubmit={handleSubmit}>
        <div className="input_container">
          <label>Address: </label>
          <input
            type="address"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

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

export default RegisterBusiness;
