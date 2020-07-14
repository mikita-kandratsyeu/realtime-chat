import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Messages = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="message-container justify-end">
          <p className="sent-text pr-10">{trimmedName}</p>
          <div className="message-box background-lightgreen">
            <p className="message-text color-black">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      )
      : (
        <div className="message-container justify-start">
          <div className="message-box background-light">
            <p className="message-text color-black">{ReactEmoji.emojify(text)}</p>
          </div>
          <p className="sent-text pl-10">{user}</p>
        </div>
      )
  );
};

export default Messages;
