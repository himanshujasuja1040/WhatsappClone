import React, { useEffect, useState } from "react";
import { Input, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import "./RightBox.css";
import { db } from "../../firebase";
import firebase from "firebase";
import Message from "../Message/Message";
function RightBox(props) {
  const [inputMessage, setinputMessage] = useState("");
  const addingMessagetodb = () => {
    db.collection("messages").add({
      username: props.username,
      message: inputMessage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setinputMessage("");
  };

  return (
    <div className="rigthBox">
      <div className="uppermostBar">
        <div className="lefticons">
          <Avatar src={props.avatar} />
        </div>
        <div className="midtext">
          <h2>{props.username}</h2>
          <h5>Last Message ...</h5>
        </div>
        <div className="righticons">
          <SearchIcon className="icons" />
          <MoreHorizIcon className="icons" />
        </div>
      </div>

      <div className="messageContainer">
        <Message username={props.username} />
      </div>
      <div className="inputBox">
        <div className="inputBoxitems">
          <InsertEmoticonIcon className="icons" />
          <AttachFileIcon className="icons" />
          <Input
            className="inputMessagebar"
            value={inputMessage}
            onDoubleClick={addingMessagetodb}
            onChange={(e) => {
              setinputMessage(e.target.value);
            }}
          />
          <MicIcon className="icons" />
        </div>
      </div>
    </div>
  );
}

export default RightBox;
