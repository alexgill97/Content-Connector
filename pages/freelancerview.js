import React from 'react';
import styles from '../styles/freelancerView.module.scss';
import MapComponent from '../components/Freelancer_View/MapComponent';
import { InfoCard } from '../components/Freelancer_View/InfoCard';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase/clientApp';

const freelancerview = ({ searchResults }) => {
  return (
    <div className={styles.freelancerview}>
      <main className={styles.main}>
        <section className={styles.project_list}>
          <h1>Freelancer View</h1>
          <div>
            {searchResults.map(({ avatar, description, postTitle, uid }) => {
              const image = avatar
                ? avatar
                : 'https://firebasestorage.googleapis.com/v0/b/content-connector-fb9f1.appspot.com/o/avatar%2FrveDkWrIOgTZ0D2Kzcq9fRYTEya2%2Fimage?alt=media&token=086ee938-6d45-49d5-915a-378965db7911';
              return (
                <InfoCard
                  key={uid}
                  uid={uid}
                  styles={styles}
                  avatar={image}
                  postTitle={postTitle}
                  description={description}
                />
              );
            })}
          </div>
        </section>
        <section className={styles.map_section}>
          <div className={styles.map_container}>
            {/* <MapComponent searchResults={searchResults} /> */}
          </div>
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
