import '../styles/globals.css';
import { UserContext } from '../firebase/context';
import { useUserData } from '../firebase/hooks';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from 'react-bootstrap';

import { auth } from '../firebase/clientApp';

function MyApp({ Component, pageProps }) {
  const userData = useUserData();
  console.log(userData);

  return (
    <SSRProvider>
      <UserContext.Provider value={userData}>
        <Navbar />
        <Component {...pageProps} />
      </UserContext.Provider>
    </SSRProvider>
  );
}

export default MyApp;
