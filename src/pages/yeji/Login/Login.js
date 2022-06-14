import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';

const LoginYeJi = () => {
  const navigate = useNavigate();
  const [userID, setUserID] = useState('');
  const handleIdInput = event => {
    setUserID(event.target.value);
  };

  const [userPW, setUserPW] = useState('');
  const handlePassInput = event => {
    setUserPW(event.target.value);
  };

  const [loginBtn, setloginBtn] = useState('rgba(0, 149, 246, 0.3)');
  const [btnDisabled, setBtnDisabled] = useState('disabled');
  const handleSubmit = e => {
    e.preventDefault();
    navigate('/main-yeji');
  };
  const handleCheange = () => {
    if (userID.includes('@') && userPW.length >= 5) {
      setloginBtn('#0095f6');
      setBtnDisabled('');
    } else {
      setloginBtn('rgba(0, 149, 246, 0.3)');
      setBtnDisabled('disabled');
    }
  };
  useEffect(handleCheange, [userID, userPW]);

  return (
    <div className="login-wrap">
      <div className="inner">
        <div className="logo">
          <Link to="/Main">Westagram</Link>
        </div>
        <div className="form-box">
          <form id="loginForm" onSubmit={handleSubmit}>
            <div className="box">
              <input
                type="text"
                id="userID"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={handleIdInput}
              />
            </div>
            <div className="box">
              <input
                type="password"
                id="userPW"
                placeholder="비밀번호"
                onChange={handlePassInput}
              />
            </div>
            <div className="login-btn">
              <button
                style={{ backgroundColor: loginBtn }}
                id="loginBtn"
                type="submit"
                disabled={btnDisabled}
              >
                로그인
              </button>
            </div>
          </form>
        </div>
        <div className="find-pw">
          <a href="/">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginYeJi;
