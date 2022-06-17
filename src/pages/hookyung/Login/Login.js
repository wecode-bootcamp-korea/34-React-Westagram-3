import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';

const ERROR_MESSAGE = {
  'INVALID EMAIL': '아이디 혹은 비밀번호를 확인 해 주세요',
  'INVALID PASSWORD': '아이디 혹은 비밀번호를 확인 해 주세요',
  'NOT EXISTS USER': '없는 유저 입니다',
};

const LoginHooKyung = () => {
  const [userInfo, setUserInfo] = useState({ userId: '', userPw: '' });

  const navigate = useNavigate();

  const { userId, userPw } = userInfo;

  const getUserInfo = e => {
    const { value, name } = e.target;
    setUserInfo({ [name]: value });
  };

  // const isValid = userId.length > 5 && userPw.length >= 5;

  const login = () => {
    fetch('http://10.58.0.118:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('통신실패');
      })
      .then(result => {
        if (result.ACCESS_TOKEN) {
          localStorage.setItem('ACCESS_TOKEN', result.ACCESS_TOKEN);
        }
        alert(ERROR_MESSAGE[result.MESSAGE]);
      })
      .catch(error => console.log(error)); // 객체 형태니까  result.ACCESS_TOKEN 객체 접근 방법으로 할것
  };

  return (
    <main className="loginHookyung">
      <div className="loginBox">
        <h1 className="loginBoxLogo">Westargram</h1>
        <form className="loginForm">
          <input
            className="loginID"
            type="email"
            name="userId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={getUserInfo}
          />
          <input
            className="loginPW"
            type="password"
            name="userPw"
            placeholder="비밀번호"
            onChange={getUserInfo}
          />

          <button
            className="loginButton"
            type="button"
            disabled={false}
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
