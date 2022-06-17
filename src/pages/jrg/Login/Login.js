import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './login.scss';
import { useState } from 'react';

const Login = () => {
  //hooks의 위치는 이곳입니다. 컴포넌트의 최상단 입니다.

  //id,pw를 관리하는 state를 객체 하나로 관리할 수 있습니다.
  const [userInfo, setUserInfo] = useState({ userId: '', userPw: '' });
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  //boolean 타입을 다룰 때는 의문문으로 이름 짓습니다.
  const [classSetting, setClassSetting] = useState(false);

  const navigate = useNavigate();

  //함수는 한가지 동작만 하는것이 좋습니다.
  //onSubmit 이라면 제출만 하는게 좋습니다. 분기처리는 분리해서 다른 함수 혹은 변수로 처리 할 수 있겠습니다.
  const onSubmit = e => {
    e.preventDefault();
    //이 조건문은 따로 뺴는게 좋겠습니다. 다른함수에서 여러번 쓰이고 있는데, 변수로 선언해서 포인팅만 해주면 똑같은 코드를 여러번 만들지 않아도 됩니다.
    // if (idValue.indexOf('@') !== -1 && pwValue.length > 5) {

    //   navigate('/main-jrg');
    // }

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
          //navigate도 함수이기때문에 바로 호출이 가능 합니다. 이 위치에서 토큰을 저장 후에 호출시키면 됩니다.
          navigate('/main-jeg');
        }
      });
    //fetch코드는 review/hookyung PR을 참고 하시기 바랍니다.
  };

  //이 함수를 id input과 pw input의 이벤트에 동일하게 등록시키면, 계산된 속성명이 동적으로 해당 name에 따른 value를 저장 합니다.
  const getUserInfo = e => {
    const { name, value } = e.target;
    e.preventDefault();
    setUserInfo({ ...userInfo, [name]: value });
  };

  //이 함수는 target의 value를 state에 업데이트하는 기능과
  //유효성검사로 classSetting 이라는 state를 변경하는 기능
  //2가지를 수행합니다.
  //함수는 한가지 기능만 수행하도록 만드는게 좋은 코드를 만드는 방법입니다.
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
      //응답 부분들도 역시 분기처리 해주는게 좋습니다. 통신은 언제나 성공을 보장하진 않습니다. 통신이 될 경우와 안될 경우를 고려 해야 합니다.
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          //저장 완료 보다는 회원가입 완료가 어울릴 것 같네요
          alert('저장 완료');
        }
      });
    e.target.reset();
  };

  //indexOf는 string에서 일치하는 첫번째 인덱스를 반환하기때문에 이 조건식과 어울리지 않습니다.
  //includes 메서드는 인자를 포함하고 있는지 없는지 여부를 판단하기때문에 이 경우에는 includes메서드가 맞겠습니다.
  // const isValid = idValue.indexOf('@') !== -1 && pwValue.length > 5;
  const isValid = idValue.includes('@') && pwValue.length > 5;

  return (
    //body라는 className은 적절하지 않습니다.
    //이미 body라는 태그가 모든 컴포넌트를 감싸고 있고, 이 태그가 어떤 역할을 하는지 기능적인 부분을 고려해서 이름 지어주는게 좋습니다.
    <div className="body">
      <div className="wrapDiv">
        <div className="inLine">
          <span className="titleLogin"> Westagram</span>
          <form className="loginForm" onSubmit={onSubmit}>
            <input
              className="idInput"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              // input의 계산된 속성명을 쓰려면, 해당 태그에 attribute를 등록해서 event객체에서 값을 찾으면 됩니다.
              name="userId"
              value={idValue}
              onChange={getId}
            />
            <input
              className="pwInput"
              type="password"
              placeholder="비밀번호"
              // input의 계산된 속성명을 쓰려면, 해당 태그에 attribute를 등록해서 event객체에서 값을 찾으면 됩니다.
              name="userPw"
              value={pwValue}
              onChange={getPw}
            />
            <button
              className={classSetting ? 'loginBtnActive' : 'loginBtnUnactive'}
              disabled={isValid ? false : true}
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
