import '../styles/globals.css';
import { AuthProvider } from '../firebase/context';
import Navbar from '../components/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { SSRProvider } from 'react-bootstrap';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
