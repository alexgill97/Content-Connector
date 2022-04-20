import { useRouter } from 'next/router';
import { AuthContext } from '../../firebase/context';
import React, { useState, useContext } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '../../firebase/clientApp';

const RegisterFreelancer = ({ setLoading, setStep }) => {
  const router = useRouter();

  const { currentUser, userData } = useContext(AuthContext);

  const [data, setData] = useState({
    isBusiness: false,
    username: '',
    description: '',
    avatar: '',
    address: '',
    uid: currentUser,
    isOnline: true,
  });

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
    setLoading(true);
    setStep(3);
    setData({ ...data, isBusiness: false, isOnline: true, avatar: '' });
    registerUserDb(currentUser, data);
    setLoading(false);
  };

  return (
    <section>
      <h1>{data.uid}</h1>
      {data.username}
      {data.description}
      {data.address}
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

export default RegisterFreelancer;
