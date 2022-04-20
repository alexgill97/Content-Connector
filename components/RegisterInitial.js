import { useState } from 'react';
import { registerUserAuth, loginUser } from '../firebase/authFunctions';
import { useRouter } from 'next/router';
import Logout from './Logout';
import RegisterBusiness from '../components/RegisterBusiness';
import RegisterFreelancer from '../components/RegisterFreelancer';

const RegisterInitial = () => {
  const router = useRouter();
  const [showInitial, setShowInitial] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [value, setValue] = useState(' ');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onRegisterAuthSubmit = (e) => {
    e.preventDefault();
    registerUserAuth(email, password);
    setShowInitial(true);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setValue(`${e.target.value}`);
  };

  const onLoginSubmit = () => {
    loginUser(email, password);
    router.push('/');
  };
  return (
    <div>
      <div hidden={showInitial}>
        <h3>Register an Account</h3>
        <h3>{email}</h3>
        <form onSubmit={onRegisterAuthSubmit}>
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
          <label>Select your role: </label>

          <select name="options" id="options" onChange={handleChange}>
            <option value="freelancer">Freelancer</option>
            <option value="business">Business</option>
          </select>
          <button onClick={onRegisterAuthSubmit}>register</button>
        </form>
      </div>
      {showInitial &&
        (value === 'business' ? <RegisterBusiness /> : <RegisterFreelancer />)}
        <div>If you already have an account registered, please Login..</div>
      <button onClick={onLoginSubmit}>login</button>
    </div>
  );
};

export default RegisterInitial;
