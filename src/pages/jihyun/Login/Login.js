import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import './login.scss';

const LoginJiHyun = () => {
  const navigate = useNavigate(); // navigate1
  const [loginInfo, setLoginInfo] = useState({ name: '', password: '' });
  const [bolderValue, setBolderValue] = useState({
    idBolder: 'valid',
    pwBolder: 'valid',
  });
  const [placeholderValue, setPlaceholderValue] = useState({
    idPlaceHolder: '전화번호, 사용자 이름 또는 이메일',
    pwPlaceHolder: '비밀번호 6자리 이상',
  });

  // <1. id, password 입력값 받아오는 객체값 객체로 만듦>
  const onInput = e => {
    setLoginInfo(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });

    // <2. 로그인 인풋 보더 > - 처음과 값 있을시 valid (유효성 미통과시 red로 되기때문에 다시 돌려주기 위해)
    if (loginInfo.name !== '') {
      setBolderValue(prev => ({ ...prev, idBolder: 'valid' }));
    }
    if (loginInfo.password !== '') {
      setBolderValue(prev => ({ ...prev, pwBolder: 'valid' }));
    }
  };

  // 3.Submit시 id, pw 유효성 검사 - id : @를 포한한 6자리 이상 / pw : 6자리 이상
  const onSubmit = e => {
    e.preventDefault();

    if (loginInfo.name === '' && loginInfo.password === '') {
      return;
    }

    // 4. 아이디 유효성 미통과시 - placeholder 경고 ,bolder 레드로
    if (loginInfo.name.length < 6 || !loginInfo.name.includes('@')) {
      setLoginInfo(prev => ({ ...prev, name: '' }));
      setBolderValue(prev => ({ ...prev, idBolder: 'unvalid' }));
      setPlaceholderValue(prev => ({
        ...prev,
        idPlaceHolder: '@를 포함한, 6자리 이상!',
      }));
    }

    // 4. 비번 유효성 미통과시 - placeholder 경고 ,bolder 레드로
    if (loginInfo.password.length < 6) {
      setLoginInfo(prev => ({ ...prev, password: '' }));
      setBolderValue(prev => ({ ...prev, pwBolder: 'unvalid' }));
      setPlaceholderValue(prev => ({
        ...prev,
        pwPlaceHolder: '6자리 이상!',
      }));
    }

    // 5. 유효성 통과시 - submit 후, main으로 이동하기
    if (
      loginInfo.name.length >= 6 &&
      loginInfo.name.includes('@') &&
      loginInfo.password.length >= 6
    ) {
      navigate('/main-jihyun');
    }
  };

  return (
    <div id="loginWrapper">
      <div id="loginContainer">
        <p className="logo">westagram</p>

        <form id="loginForm" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder={placeholderValue.idPlaceHolder}
            className={bolderValue.idBolder}
            name="name"
            value={loginInfo.name}
            onInput={onInput}
          />
          <input
            type="password"
            placeholder={placeholderValue.pwPlaceHolder}
            className={bolderValue.pwBolder}
            name="password"
            value={loginInfo.password}
            onInput={onInput}
          />
          <button
            type="submit"
            disabled={
              loginInfo.name !== '' && loginInfo.password !== '' ? false : true
            }
            className={
              loginInfo.name !== '' && loginInfo.password !== ''
                ? 'fullBtn'
                : 'emptyBtn'
            }
          >
            로그인
          </button>
        </form>

        <p className="forgot">비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
};

export default LoginJiHyun;
