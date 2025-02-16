import React from "react";
import "./Chatbox.css"; // Make sure to create and use a CSS file for styling

const Chatbox = () => {
  return (
    <div className="chatbox-container">
      <div className="chatbox">
        <textarea className="chat-messages" readOnly />
        <div className="chat-input-container">
          <input type="text" className="chat-input" placeholder="Ask the query..." />
          <button className="send-button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;