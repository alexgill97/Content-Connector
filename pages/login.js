import { useState } from 'react';
import { loginUser } from '../firebase/authFunctions';
import { useRouter } from 'next/router';

const login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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


// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setData({ ...data, error: null, loading: true });
//   if (!email || !password) {
//     setData({ ...data, error: "All fields are required" });
//   }
//   try {
//     const result = await signInWithEmailAndPassword(auth,email,password
//     );
//     await updateDoc(doc(db, "users", result.user.uid), {
//       isOnline: true,
//     });

//     setData({
//       email: "",
//       password: "",
//       error: null,
//       loading: false,
//     });
//     navigate("/");
//   } catch (err) {
//     setData({ ...data, error: err.message, loading: false });
//   }
// };
