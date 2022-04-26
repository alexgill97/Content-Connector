import React, { useRef, useEffect } from 'react';
// import Moment from "react-moment";
import styles from '../styles/Message.module.scss';

const MessageItem = ({ msg, user1 }) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msg]);

  return (
    <div
      className={
        msg.from === user1
          ? `${styles.message_wrapper} ${styles.own}`
          : `${styles.message_wrapper}`
      }
      ref={scrollRef}
    >
      {msg.from === user1 ? (
        <div className={`${styles.displayforId}`}>You:</div>
      ) : (
        <div className={`${styles.displayforId}`}>Them:</div>
      )}
      <p
        className={
          msg.from === user1
            ? `${styles.message_wrapper} ${styles.me}`
            : `${styles.message_wrapper} ${styles.friend}`
        }
      >
        {msg.media ? <img src={msg.media} alt={msg.text} /> : null}
        {msg.text}
        <br />
        <small>{/* <Moment fromNow>{msg.createdAt.toDate()}</Moment> */}</small>
      </p>
    </div>
  );
};

export default MessageItem;
