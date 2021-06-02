import React, { useEffect, useState } from "react";
import "./Message.css";
import firebase from "firebase";
import { db } from "../../firebase";

const Message = (props) => {
  const [messageData, setMessageData] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp")
      .onSnapshot((snapshot) => {
        setMessageData(snapshot.docs.map((data) => data.data()));
      });
  }, []);

  console.log(messageData);

  return (
    <div>
      {messageData
        ? messageData.map((message) => {
            return (
              <div
                className={
                  message.username === props.username
                    ? "messages sender"
                    : "messages"
                }
              >
                <h6>{message.username}</h6>
                <p>{message.message}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};
export default Message;
