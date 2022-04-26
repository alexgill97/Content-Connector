import React from 'react';
import Attachment from './svg/Attachment';
import styles from '../styles/Message.module.scss';

const MessageForm = ({ handleSubmit, text, setText, setImg }) => {
  return (
    <form className={styles.message_form} onSubmit={handleSubmit}>
      <input
        className={styles.message_input}
        type="text"
        placeholder="Enter message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label htmlFor="img">
        <Attachment />
      </label>
      <input
        className={styles.upload_input}
        onChange={(e) => setImg(e.target.files[0])}
        type="file"
        id="img"
        accept="image/*"
        style={{ display: 'none' }}
      />
      <button className={`${styles.message_submit}`}>Send</button>
    </form>
  );
};

export default MessageForm;
