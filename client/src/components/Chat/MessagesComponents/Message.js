import React from 'react';
import './Message.css';

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  if (user.name === name) {
    isSentByCurrentUser = true;
  }
  return (
    isSentByCurrentUser
      ? (
        //if the messsage is sent by the current user
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{name}</p>
          <div className="messageBox ">
            <p className="messageText colorWhite">{text}</p>
          </div>
        </div>
      )
      : (
        //if the message if sent by a different user
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundBlue">
            <p className="messageText colorDark">{text}</p>
          </div>
          <p className="sentText pl-10 ">{user}</p>
        </div>
      )
  );
}

export default Message;