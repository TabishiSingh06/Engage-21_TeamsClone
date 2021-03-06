import React from 'react';
import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form1">
    <input
      className="input1"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton1" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;