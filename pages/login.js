import { useState } from 'react';
import { registerUser, loginUser, logoutUser } from '../firebase/authFunctions';
import { useRouter } from 'next/router';
import { auth } from '../firebase/clientApp';
import styles from '../styles/Login.module.css';
import { signOut } from 'firebase/auth';

const login = () => {
  const router = useRouter();
  // const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onRegisterSubmit = () => {
    registerUser(email, password);
    router.push('/');
  };

  const onLoginSubmit = () => {
    loginUser(email, password);
    router.push('/');
  };

  return (
    <section>
      <h3>Login to your Account</h3>
      <h3>{email}</h3>
      <form onSubmit={handleSubmit}>
        <div className="input_container">
          <label>Email: </label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input_container">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <button onClick={onLoginSubmit}>login</button>
    </section>
  );
};

export default login;
