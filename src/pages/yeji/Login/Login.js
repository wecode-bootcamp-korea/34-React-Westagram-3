import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

const LoginYeJi = () => {
  const [userID, setUserID] = useState('');
  const handleIdInput = event => {
    event.preventDefault();
    setUserID(event.target.value);
  };

  console.log('id: ', userID);

  const [userPW, setuserPW] = useState('');
  const handlePassInput = event => {
    event.preventDefault();
    setuserPW(event.target.value);
  };
  console.log('pw: ', userPW);

  return (
    <div class="login-wrap">
      <div class="inner">
        <div class="logo">
          <Link to="/Main">Westagram</Link>
        </div>
        <div class="form-box">
          <form id="loginForm">
            <div class="box">
              <input
                type="text"
                id="userID"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={handleIdInput}
              />
            </div>
            <div class="box">
              <input
                type="password"
                id="userPW"
                placeholder="비밀번호"
                onChange={handlePassInput}
              />
            </div>
            <div class="login-btn">
              <button id="loginBtn" disabled>
                로그인
              </button>
            </div>
          </form>
        </div>
        <div class="find-pw">
          <a href="/">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginYeJi;
