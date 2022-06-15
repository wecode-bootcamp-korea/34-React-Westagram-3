import React from 'react';
import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import './login.scss';
const LoginHooKyung = () => {
  const navigate = useNavigate();
  const [id, setID] = useState('');
  const [pw, setPw] = useState('');
  const [buttonStatus, setButtonStatus] = useState(false);
  const [buttonColor, setButtonColor] = useState(0.3);
  function handleInputId(e) {
    setID(e.target.value);
  }
  function handleInputPw(e) {
    setPw(e.target.value);
  }

  function login() {
    // navigate('/main-hookyung');

    fetch('http://10.58.0.118:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(
        result => localStorage.setItem('ACCESS_TOKEN', result.ACCESS_TOKEN) // 객체 형태니까  result.ACCESS_TOKEN 객체 접근 방법으로 할것
      );
  }

  useEffect(() => {
    id.includes('@') && pw.length >= 5
      ? setButtonStatus(false)
      : setButtonStatus(true);
  }, [id, pw]);
  return (
    <main className="loginHookyung">
      <div className="loginBox">
        <h1 className="loginBoxLogo">Westargram</h1>
        <form className="loginForm">
          <input
            className="loginID"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onKeyUp={handleInputId}
          />
          <input
            className="loginPW"
            type="password"
            placeholder="비밀번호"
            onKeyUp={handleInputPw}
          />

          <button
            className="loginButton"
            type="button"
            disabled={buttonStatus}
            onClick={login}
          >
            로그인
          </button>

          <div className="devideLine">
            <div className="devideLineLine" />
            <span className="devideLineText">또는</span>
            <div className="devideLineLine" />
          </div>
          <div className="facebookLogin">
            <i className="fa-brands fa-facebook-square" />
            <span className="facebookLoginMove">Facebook으로 로그인</span>
          </div>
          <a className="forgotPassword">비밀번호를 잊으셨나요?</a>
        </form>
      </div>
    </main>
  );
};

export default LoginHooKyung;
