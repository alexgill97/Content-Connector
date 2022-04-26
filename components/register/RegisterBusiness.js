import { useRouter, useEffect } from 'next/router';
import { AuthContext } from '../../firebase/context';
import React, { useState, useContext } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '../../firebase/clientApp';
import Geocode from 'react-geocode';

const RegisterBusiness = ({ setLoading, setStep }) => {
  const router = useRouter();
  const { currentUser, userData } = useContext(AuthContext);
  Geocode.setLanguage('en');

  Geocode.setRegion('na');

  Geocode.setApiKey('AIzaSyDNT14Q8_dETR4hSxsE94Ipd2qP3rqV4dE');

  const [data, setData] = useState({
    isBusiness: true,
    username: '',
    description: '',
    avatar: '',
    address: '',
    lat: '',
    lng: '',
    city: '',
    uid: currentUser,
    isOnline: true,
  });

  const registerUserDb = async (uid, data) => {
    await setDoc(doc(firestore, 'users', uid), {
      ...data,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onRegisterSubmit = () => {
    setLoading(true);
    setStep(3);
    Geocode.fromAddress(data.address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        const formData = { ...data, lat: lat, lng: lng };
        registerUserDb(currentUser, formData);
      },
      (error) => {
        console.error(error);
      }
    );
    setLoading(false);
  };

  return (
    <section>
      <h1>{data.uid}</h1>
      {data.username}
      {data.description}
      {data.address}
      <h3>Register a Business Account</h3>
      <form onSubmit={handleSubmit}>
        <div className="input_container">
          <label>Enter Business Name: </label>
          <input
            type="username"
            name="username"
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </div>
        <div className="input_container">
          <label>Description: </label>
          <input
            type="description"
            name="description"
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
        </div>
        <div className="input_container">
          <label>Address: </label>
          <input
            type="address"
            name="address"
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </div>
        <div className="input_container">
          <label>City: </label>
          <input
            type="city"
            name="city"
            onChange={(e) => setData({ ...data, city: e.target.value })}
          />
        </div>
        <button onClick={onRegisterSubmit}>register</button>
      </form>
    </section>
  );
};

export default RegisterBusiness;
