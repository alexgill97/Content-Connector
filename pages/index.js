import Head from 'next/head';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import firebaseApp from '../firebase/client';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Content Connector</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="" href="" />
      </Head>
      <Navbar />

      <main className=""></main>
    </div>
  );
}
