import React from 'react';
import MapComponent from '../components/Freelancer_View/MapComponent';
import styles from '../styles/maptest.module.scss';

function maptest({ searchResults }) {
  return (
    <div className={styles.map_test}>
      <MapComponent searchResults={searchResults} />;
    </div>
  );
}

export default maptest;

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
