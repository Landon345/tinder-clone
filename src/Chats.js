import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Yo whats up"
        timestamp="40 seconds ago"
        profilePic="..."
      />
    </div>
  );
}

export default Chats;
