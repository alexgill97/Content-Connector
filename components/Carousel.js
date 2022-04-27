// import React, { useState } from 'react';

// import CaroueslBtn from './CarouselBtn';
// import styles from '../styles/slider.module.scss';

// export default function Slider({ portfolio }) {
//   const [slideIndex, setSlideIndex] = useState(1);

//   const nextSlide = () => {
//     if (slideIndex !== portfolio.length) {
//       setSlideIndex(slideIndex + 1);
//     } else if (slideIndex === portfolio.length) {
//       setSlideIndex(1);
//     }
//   };

//   const prevSlide = () => {
//     if (slideIndex !== 1) {
//       setSlideIndex(slideIndex - 1);
//     } else if (slideIndex === 1) {
//       setSlideIndex(portfolio.length);
//     }
//   };

//   const moveDot = (index) => {
//     setSlideIndex(index);
//   };

//   console.log(portfolio);

//   return (
//     <div className={styles.container_slider}>
//       {portfolio.map((obj, index) => {
//         return (
//           <div
//             key={obj.id}
//             className={
//               slideIndex === index + 1 ? styles.active_anim, styles.slide : styles.slide
//             }
//           >
//             <img src={portfolio.image} />
//           </div>
//         );
//       })}
//       <CaroueslBtn moveSlide={nextSlide} direction={'next'} />
//       <CaroueslBtn moveSlide={prevSlide} direction={'prev'} />

//       <div className={styles.container_dots}>
//         {Array.from({ length: 5 }).map((item, index) => (
//           <div
//             onClick={() => moveDot(index + 1)}
//             className={
//               slideIndex === index + 1
//                 ? 'styles.dot styles.active'
//                 : 'styles.dot'
//             }
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }
