import '../styles/globals.scss';
import { AuthProvider } from '../firebase/context';
import Navbar from '../components/Navbar';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <Navbar /> */}
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
