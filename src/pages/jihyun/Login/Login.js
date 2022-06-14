import React from 'react';
import './login.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginJiHyun = () => {
  const navigate = useNavigate(); // navigate1
  const [loginInfo, setLoginInfo] = useState({ name: '', password: '' });
  const [idBolder, setIdBolder] = useState('valid'); // [질문]state를 없앨 순 없을지?
  const [pwBolder, setPwBolder] = useState('valid'); // [질문]state를 없앨 순 없을지?
  const [idPlaceHolder, setIdPlaceHolder] = useState(
    '전화번호, 사용자 이름 또는 이메일'
  ); // [질문]state를 없앨 순 없을지?
  const [pwPlaceHolder, setPwPlaceHolder] = useState('비밀번호 4자리 이상'); // [질문]state를 없앨 순 없을지?

  const onInput = e => {
    // <1. id, password 입력값 받아오는 객체값 객체로 만듦>
    setLoginInfo(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    // <2. 로그인 인풋 보더 > - 처음과 값 있을시 valid (유효성 미통과시 red로 되기때문에 다시 돌려주기 위해)
    // 임시 주석처리 (red로 됐다가, 글자 하나라도 입력시 다시 회색으로)
    if (loginInfo.name !== '') {
      setIdBolder('valid');
    }
    if (loginInfo.password !== '') {
      setPwBolder('valid');
    }
  };

  // 3.Submit시 id, pw 유효성 검사
  const onSubmit = e => {
    e.preventDefault();

    if (loginInfo.name === '' && loginInfo.password === '') {
      return;
    }

    // 아이디 유효성 미통과시 - placehoder 경고 ,bolder 레드로
    if (loginInfo.name.length < 4 || !loginInfo.name.includes('@')) {
      setLoginInfo(prev => ({ ...prev, name: '' }));
      setIdPlaceHolder('@를 포함한, 4자리 이상!');
      setIdBolder('unvalid');
    }

    // 비번 유효성 미통과시 - placehoder 경고 ,bolder 레드로
    if (loginInfo.password.length < 4) {
      setLoginInfo(prev => ({ ...prev, password: '' }));
      setPwPlaceHolder('4자리 이상!');
      setPwBolder('unvalid');
    }

    // 유효성 통과시 - submit 후, main으로 이동하기
    if (
      loginInfo.name.length >= 4 &&
      loginInfo.name.includes('@') &&
      loginInfo.password.length >= 4
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
            placeholder={idPlaceHolder}
            className={idBolder}
            name="name"
            value={loginInfo.name}
            onInput={onInput}
          />
          <input
            type="password"
            placeholder={pwPlaceHolder}
            className={pwBolder}
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

// [리팩트링1 - state는 loginInfo만 남겨놓기] (일부만 해결ㅇ)
// state를 많이 쓰게되면, 개발하다 헷갈리게 되서 잘못 될 수도 있음. 따라서 state를 최소화 하는게 좋음
// 지금 대부분의 state는 loginInfo의 상태에 따라 변동되고 있음. 따라서 loginInfo를 이용하고, 그 외 state는 없애는게 나음
