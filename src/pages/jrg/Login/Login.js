import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './login.scss';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    if (idValue.indexOf('@') !== -1 && pwValue.length > 5) {
      navigate('/main-jrg');
    }

    fetch('http://10.58.7.17:8000/users/signin', {
      method: 'post',
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          localStorage.setItem('token', res.access_token);
        }
      });
  };

  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const [classSetting, setClassSetting] = useState(false);

  const getId = event => {
    event.preventDefault();
    setIdValue(event.target.value);
    if (idValue.indexOf('@') !== -1 && pwValue.length > 5) {
      setClassSetting(true);
    } else {
      setClassSetting(false);
    }
  };

  const getPw = event => {
    event.preventDefault();
    setPwValue(event.target.value);
    if (idValue.indexOf('@') !== -1 && pwValue.length > 5) {
      setClassSetting(true);
    } else {
      setClassSetting(false);
    }
  };

  const signUp = e => {
    e.preventDefault();
    console.log(idValue, pwValue);
    fetch('http://10.58.7.17:8000/users/signup', {
      method: 'post',
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          alert('저장 완료');
        }
      });
    e.target.reset();
  };

  return (
    <div className="body">
      <div className="wrapDiv">
        <div className="inLine">
          <span className="titleLogin"> Westagram</span>
          <form className="loginForm" onSubmit={onSubmit}>
            <input
              className="idInput"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={idValue}
              onChange={getId}
            />
            <input
              className="pwInput"
              type="password"
              placeholder="비밀번호"
              value={pwValue}
              onChange={getPw}
            />
            <button
              className={classSetting ? 'loginBtnActive' : 'loginBtnUnactive'}
            >
              로그인
            </button>
          </form>
          <form onSubmit={signUp}>
            <button className="loginBtnActive">회원가입</button>
          </form>

          <a className="forgotPw" href="">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
