import React from 'react';
import './login.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const LoginJiHyun = () => {
  // < 폼 submit시 메인창 연결 >
  const navigate = useNavigate(); // navigate1

  const [loginInfo, setLoginInfo] = useState({ name: '', password: '' });
  const [btnColor, setBtnColor] = useState('');
  const [btnAble, setBtnAble] = useState(true);
  const [idBolder, setIdBolder] = useState('vaild');
  const [pwBolder, setPwBolder] = useState('vaild');
  const [idPlaceHolder, setIdPlaceHolder] = useState(
    '전화번호, 사용자 이름 또는 이메일'
  );

  const [pwPlaceHolder, setPwPlaceHolder] = useState('비밀번호 4자리 이상');

  // <1. id, password 입력값 받아오는 객체값 객체로 만듦>
  const onChangeInput = e => {
    setLoginInfo(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    // <2. 로그인 인풋 보더 > - 처음과 값 있을시 valid (유효성 미통과시 red로 되기때문에 다시 돌려주기 위해)
    if (loginInfo.name !== '') {
      setIdBolder('vaild');
    }

    if (loginInfo.password !== '') {
      setPwBolder('vaild');
    }

    // <3.  버튼 활성화 여부 판단 > - id,pw 값이 둘다 하나라도 있으면 버튼 색깔 바꿈
    // [질문1] - input값이 하나 써질때마다 계속 실행될텐데 더 좋은 방법 없을지??
    if (loginInfo.name !== '' && loginInfo.password !== '') {
      setBtnColor('fullBtn');
      setBtnAble(false);
    }
    if (loginInfo.name === '' || loginInfo.password === '') {
      setBtnColor('emptyBtn');
      setBtnAble(true);
    }
  }, [loginInfo]);

  // 3.Submit시 id, pw 유효성 검사
  const onSubmit = e => {
    e.preventDefault();

    if (loginInfo.name === '' && loginInfo.password === '') {
      return;
    }

    // 아이디 유효성
    if (loginInfo.name.length < 4 || !loginInfo.name.includes('@')) {
      setLoginInfo(prev => ({ ...prev, name: '' }));
      setIdPlaceHolder('@를 포함한, 4자리 이상!');
      setIdBolder('unvaild');
    }

    // 비번 유효성
    if (loginInfo.password.length < 4) {
      setLoginInfo(prev => ({ ...prev, password: '' }));
      setPwPlaceHolder('4자리 이상!');
      setPwBolder('unvaild');
    }

    // 유효성 통과시 submit 후, main으로 이동하기
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
            onChange={onChangeInput}
          />
          <input
            type="password"
            placeholder={pwPlaceHolder}
            className={pwBolder}
            name="password"
            value={loginInfo.password}
            onChange={onChangeInput}
          />
          <button type="submit" disabled={btnAble} className={btnColor}>
            로그인
          </button>
        </form>

        <p className="forgot">비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
};

export default LoginJiHyun;
