import React from 'react';
import Image from 'next/image';
import styles from '../styles/info_card.module.scss';

export const UserInfoCard = ({ profile }) => {
  return (
    <main className={styles.info_card}>
      <section className={styles.info_card_image}>
        <img src={profile.avatar} />
      </section>
      <section className={styles.info_card_info}>
        <h3>{profile.username}</h3>
        <div className={styles.info_card_right_title_empty}></div>
        <div className={styles.description_city}>
        <p>{profile.description}</p>
        </div>
        <p><em><b>{profile.city}</b></em></p>
      </section>
    </main>
  );
};
