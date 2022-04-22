import React from 'react';
import { InfoCard } from './InfoCard';

// import styles from '../../styles/freelancerView.scss';

const MainView = ({ styles, businesses }) => {
  const businessList = businesses.map(
    ({ img, location, title, description, star, price, total }) => (
      <InfoCard
        img={img}
        location={location}
        title={title}
        description={description}
        star={star}
        price={price}
        total={total}
        styles={styles}
      />
    )
  );

  return (
    <main className={styles.main_view}>
      <section className={styles.project_list}>
        <h1>Freelacer View</h1>

        <div className={styles.business_list}>{businessList}</div>
      </section>

      <section className={styles.map_section}>
        <Map />
      </section>
    </main>
  );
};

export default MainView;
