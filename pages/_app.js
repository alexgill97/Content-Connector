import '../styles/globals.css';
import { UserContext } from '../firebase/context';
import { useUserData } from '../firebase/hooks';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from 'react-bootstrap';

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <SSRProvider>
      <UserContext.Provider value={userData}>
        <Navbar user={userData} />
        <Component {...pageProps} />
      </UserContext.Provider>
    </SSRProvider>
  );
}

export default MyApp;
