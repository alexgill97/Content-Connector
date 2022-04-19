import { useState } from 'react';
import { registerUser, loginUser } from '../firebase/authFunctions';
import { useRouter } from 'next/router';

const register = () => {
  const router = useRouter();
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [value, setValue] = useState('freelancer');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onRegisterSubmit = () => {
    registerUser(email, password);
    router.push('/');
  };
  const handleChange = (e) => {
    setValue(`${e.target.value}`);
  };

  const onLoginSubmit = () => {
    loginUser(email, password);
    router.push('/');
  };
  console.log(value);
  return (
    <section>
      <h3>Register an Account</h3>
      <h3>{email}</h3>
      <form onSubmit={handleSubmit}>
        <div className="input_container">
          <label>Username: </label>
          <input
            type="name"
            name="name"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

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
        {value === 'business' ? <div>----------------Im a Business----------------</div> : <div>----------------Im a Freelancer----------------</div>}
      </form>
      <button onClick={onRegisterSubmit}>register</button>
      <button onClick={onLoginSubmit}>login</button>
    </section>
  );
};

export default register;
