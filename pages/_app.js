import '../styles/globals.css';
import { UserContext } from '../firebase/context';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from 'react-bootstrap';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <UserContext.Provider>
        <Navbar />
        <Component {...pageProps} />
      </UserContext.Provider>
    </SSRProvider>
  );
}

export default MyApp;
