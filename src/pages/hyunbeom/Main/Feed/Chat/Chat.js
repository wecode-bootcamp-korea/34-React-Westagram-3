import React, { useState } from 'react';

function Chat(props) {
  let [red, setRed] = useState('');

  return (
    <div key={props.i} className="feeds-like__chat-friends">
      <div className="feeds-like__chat-friends-left">
        <span className="bold">neceosecius</span>
        <span>{props.chats} </span>
      </div>
      <div className="feeds-like__chat-friends-right">
        <button className="like-button">
          <i
            onClick={() => {
              let copy = [...props.chat];
              copy.splice(props.i, 1);
              props.setChat(copy);
            }}
            className="fa fa-x gray"
          />
          <i
            onClick={() => {
              red === 'fa-solid' ? setRed('') : setRed('fa-solid');
            }}
            className={`fa-regular fa-heart gray + ${red}`}
          />
        </button>
      </div>
    </div>
  );
}

export default Chat;
