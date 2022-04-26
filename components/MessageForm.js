import React from 'react';
import Attachment from './svg/Attachment';
import styles from '../styles/Message.module.scss';

const MessageForm = ({ handleSubmit, text, setText, setImg }) => {
  return (
    <div className={styles.message_form_container}>
      <form className={`${styles.message_form}`} onSubmit={handleSubmit}>
        <label htmlFor="img">
          <Attachment />
        </label>
        <input
          onChange={(e) => setImg(e.target.files[0])}
          type="file"
          id="img"
          accept="image/*"
          style={{ display: 'none' }}
        />

        <input
          type="text"
          placeholder="Enter message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className={`${styles.message_submit}`}>Send</button>
      </form>
    </div>
  );
};

export default MessageForm;
