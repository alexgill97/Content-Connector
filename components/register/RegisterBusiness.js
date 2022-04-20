import { registerUserDb, loginUser } from '../../firebase/authFunctions';
import { useRouter } from 'next/router';
import { AuthContext } from '../../firebase/context';
import React, { useState, useEffect, useContext } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const RegisterBusiness = () => {
  const router = useRouter();
  const [biography, setBiography] = useState('');
  const [address, setAddress] = useState('');
  const [postalcode, setPostalcode] = useState('');
  const [error, setError] = useState(null);

  const [data, setData] = useState({
    isBusiness: true,
    username: '',
    description: '',
    avatar: '',
    address: '',
    uid: '',
    isOnline: true,
  });

  const { currentUser, userData } = useContext(AuthContext);
  console.log('userData', data);

  const registerUserDb = async (userId, data) => {
    await setDoc(doc(firestore, 'users', userId), {
      ...data,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onRegisterSubmit = () => {
    console.log('data is', data);
    setData({ ...data, isBusiness: true, isOnline: true, avatar: '' });
    registerUserDb(currentUser, data);
    router.push('/');
  };

  return (
    <section>
      {data.username}
      {data.description}
      {data.address}
      <h3>Register a Business Account</h3>
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
        <button onClick={onRegisterSubmit}>register</button>
      </form>
    </section>
  );
};

export default RegisterBusiness;

// const onLoginSubmit = () => {
//   loginUser(email, password);
//   router.push('/');
// };
