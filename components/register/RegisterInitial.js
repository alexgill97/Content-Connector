import { useState } from 'react';
import { registerUserAuth, loginUser } from '../../firebase/authFunctions';
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/clientApp';

const RegisterInitial = ({ setStep, setIsFreelancer, loading, setLoading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const onRegisterAuthSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        setLoading(false);
        setStep(2);
      })
      .catch(() => setError(true));
  };

  return (
    <div>
      {error && <h1>error...</h1>}
      <div hidden={loading}>
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

          <button onClick={onRegisterAuthSubmit}>register</button>
        </form>
        <button onClick={() => setIsFreelancer(true)}>Freelancer</button>
        <button onClick={() => setIsFreelancer(false)}>Business</button>
      </div>
    </div>
  );
};

export default RegisterInitial;
