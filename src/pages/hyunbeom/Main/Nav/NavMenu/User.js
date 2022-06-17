import React from 'react';

//props자리에서 구조분해할당 해 주세요
function User(props) {
  return (
    <>
      <div className="user-pic">
        <img src={props.userInfo.pic} />
      </div>
      <div className="user-info">
        <span className="user-info__text bold">{props.userInfo.title}</span>
        <span className="user-info__text gray">{props.userInfo.content}</span>
      </div>
    </>
  );
}

export default User;
