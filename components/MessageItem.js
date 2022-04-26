import React, { useRef, useEffect } from 'react';
// import Moment from "react-moment";
import styles from '../styles/Message.module.scss';

const MessageItem = ({ msg, user1 }) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msg]);

  return (
    <>
      {msg.from === user1 ? (
        <div className={styles.message_user1}>{msg.text}</div>
      ) : (
        <div className={styles.message_user2}>{msg.text}</div>
      )}
    </>
  );
};

export default MessageItem;
