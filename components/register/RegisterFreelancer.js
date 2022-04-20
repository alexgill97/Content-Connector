import { registerUserDb, loginUser } from '../../firebase/authFunctions';
import { useRouter } from 'next/router';
import { AuthContext } from '../../firebase/context';
import React, { useState, useEffect, useContext } from 'react';

const RegisterFreelancer = () => {
  const router = useRouter();
  const [biography, setBiography] = useState('');
  const [address, setAddress] = useState('');
  const [postalcode, setPostalcode] = useState('');
  const [error, setError] = useState(null);

  const [data, setData] = useState({
    isBusiness: false,
    username: '',
    description: '',
    avatar: '',
    postalcode: '',
    isOnline: true,
  });

  const { currentUser, userData } = useContext(AuthContext);
  console.log('userData', data);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onRegisterSubmit = () => {
    console.log('data is', data);
    setData({ ...data, isBusiness: false, isOnline: true, avatar: '' });
    registerUserDb(currentUser, data);
    router.push('/');
  };

  return (
    <section>
      {data.username}
      {data.description}
      {data.postalcode}
      <h3>Register a Freelancer Account</h3>
      <form onSubmit={handleSubmit}>
        <div className="input_container">
          <label>Username: </label>
          <input
            type="username"
            name="username"
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </div>
        <div className="input_container">
          <label>description: </label>
          <input
            type="description"
            name="description"
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
        </div>
        <div className="input_container">
          <label>Postal Code: </label>
          <input
            type="postalcode"
            name="postalcode"
            onChange={(e) => setData({ ...data, postalcode: e.target.value })}
          />
        </div>
      </form>
      <button onClick={onRegisterSubmit}>register</button>
    </section>
  );
};

export default RegisterFreelancer;
