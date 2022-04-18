import { useState } from 'react';
import { registerUser } from '../firebase/authFunctions';
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

  return (
    <div>
      <h1>Firebase Sign Up</h1>
      <form onSubmit={onRegisterSubmit}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Let's go!</button>
      </form>
    </div>
  );
};

export default register;
