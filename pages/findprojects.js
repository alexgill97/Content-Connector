import React, { useState } from 'react';
import styles from '../styles/freelancerView.module.scss';
import MapComponent from '../components/Freelancer_View/MapComponent';
import { InfoCard } from '../components/Freelancer_View/InfoCard';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase/clientApp';

import Message from '../components/Message';

const freelancerview = ({ searchResults }) => {
  const [selectedProject, setSelectedProject] = useState('');
  return (
    <div className={styles.freelancerview}>
      <main className={styles.main}>
        <section className={styles.project_list}>
          <h1>Posts In Your Area</h1>
          <div className={styles.infocard_container}>
            {searchResults.map((result) => {
              const image = result.avatar
                ? result.avatar
                : 'https://firebasestorage.googleapis.com/v0/b/content-connector-fb9f1.appspot.com/o/avatar%2FrveDkWrIOgTZ0D2Kzcq9fRYTEya2%2Fimage?alt=media&token=086ee938-6d45-49d5-915a-378965db7911';
              return (
                <div onDoubleClick={() => setSelectedProject(result.postTitle)}>
                  <InfoCard
                    key={result.uid}
                    uid={result.uid}
                    styles={styles}
                    avatar={image}
                    postTitle={result.postTitle}
                    description={result.description}
                  />
                  {selectedProject === result.postTitle && (
                    <Message profile={result} />
                  )}
                </div>
              );
            })}
          </div>
        </section>
        <section className={styles.map_section}>
          <MapComponent searchResults={searchResults} />
        </section>
      </main>
    </div>
  );
};

export default freelancerview;

export async function getServerSideProps() {
  const query = await getDocs(collection(firestore, 'posts'));
  const searchResults = [];
  query.forEach((doc) => {
    searchResults.push(doc.data());
  });
  return {
    props: {
      searchResults,
    },
  };
}
