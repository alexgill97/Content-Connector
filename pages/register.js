import { useState } from 'react';
import { registerUser, loginUser, logoutUser } from '../firebase/authFunctions';
import { useRouter } from 'next/router';

const register = () => {
  const router = useRouter();
  // const [name, setName] = useState('');
  // const [avatar, setAvatar] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [name, setName] = useState('');

  const onRegisterSubmit = (event) => {
    registerUser(event);
    router.push('/');
  };

  const onLoginSubmit = (event) => {
    loginUser(event);
    router.push('/');
  };

  const onLogoutSubmit = (event) => {
    logoutUser();
  };

  return (
    <div>
      <h1>Firebase Sign Up</h1>
      <form>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button onSubmit={onRegisterSubmit} type="submit">
          register
        </button>
        <button onSubmit={onLoginSubmit} type="submit">
          login
        </button>
        <button onSubmit={onLogoutSubmit} type="submit">
          login
        </button>
      </form>
    </div>
  );
};

export default register;
