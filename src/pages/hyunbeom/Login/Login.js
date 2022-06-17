import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';

//TODO:필요없는 코드는 지우거나, 이렇게 주석으로 TODO 혹은 FIXME라고 해두고 나중에 꼭 왼쪽 돋보기 탭에서 FIXME, TODO를 검색해 수정 혹은 삭제 해 주세요
// fetch('10.58.5.166:8000/users/signin', {
//   method: 'POST',
//   body: JSON.stringify({
//     email: 'exam@naver.com',
//     password: 'Exam123!',
//   }),
// })
//   .then(response => response.json())
//   .then(result => console.log('결과: ', result));
const ERROR_MESSAGE = {
  INVALID_EMAIL: '이메일이나 비밀번호를 확인 해 주세요',
  INVALID_PASSWORD: '이메일이나 비밀번호를 확인 해 주세요',
};

function Login() {
  const [userInfo, setUserInfo] = useState({ userId: '', userPw: '' });
  const navigate = useNavigate();

  // let [loginId, setLoginId] = useState('');
  // let [passwordId, setPasswordId] = useState('');
  // let [isDisabled, setIsDisabled] = useStat(true)
  //참고!! state는 const로 선언 해 주세요. let으로 하면 state 직접 수정 가능해서 안됩니다.

  //button disable은 button 자체에서 조건에 따라 버튼을 막고 풀기 때문에, goToMain함수 에서 분기처리는 불필요하겠습니다.
  // const goToMain = (id, password) => {
  //   if (id.indexOf('@') >= 0 && password.length >= 5) {
  //     navigate('/main-hyunbeom');
  //   } else {
  //     alert('올바르게 입력하세요');
  //   }
  // };

  //조건에 따라 true,false 값을 할당하는 식을 disabled 속성에 바로 적용하면, 함수와, state 모두 없어도 되겠습니다.
  // const btnHandler = (id, password) => {
  //   if (id.indexOf('@') >= 0 && password.length >= 5) {
  //     setIsDisabled(false);
  //   } else {
  //     setIsDisabled(true);
  //   }
  // };

  //useEffect는 마운트 이후에 원하지 않아도 한번은 동작 하기 때문에, login, password 값이 입력 됐을 '때' 체크하는 용도로 쓰기엔 과 합니다.
  // useEffect(() => {
  //   if (loginId && passwordId) {
  //     btnHandler(loginId, passwordId);
  //   }
  // }, [loginId, passwordId]);

  const { userId, userPw } = userInfo;

  const getUserInfo = e => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const enterService = e => {
    e.preventDefault();
    fetch('http://10.58.5.166:8000/users/signin', {
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
        if (result.access_token) {
          localStorage.setItem('token', result.access_token);
          navigate('/main-hyunbeom');
        } else {
          alert(ERROR_MESSAGE[result.message]);
        }
      })
      .catch(error => console.log(error));
  };
  const isValid = userId.indexOf('@') >= 0 && userPw.length >= 5;

  return (
    <main className="login">
      <article className="loginBox">
        <header className="loginHeader">
          <h1 className="loginHeaderLogo logo">Westagram</h1>
        </header>
        <form className="loginForm" onSubmit={enterService}>
          <input
            type="text"
            className="loginFormId"
            name="userId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={getUserInfo}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="loginFormPassword"
            name="userPw"
            // onChange={event => {
            //   props.setPasswordId(event.target.value);
            // }}
            //이벤트함수는 UI단에서 분리하고, 로직에서 관리될 수 있게 위치 조정 해 주세요
            onChange={getUserInfo}
          />

          <button
            type="submit"
            className="loginFormBtn"
            disabled={isValid ? false : true}
          >
            <span>로그인</span>
          </button>
        </form>
        <div className="loginText">
          <h3>비밀번호를 잊으셨나요?</h3>
        </div>
      </article>
    </main>
  );
}

//컴포넌트는 우선 나누고 시작 하지않아도 됩니다. 만들다보면 나눠야 할 UI단위가 보입니다. 그때 하나씩 나누면 됩니다.
//너무 잘게 나누거나, 아예나누지 않아도 가독성, 유지보수에 좋지않습니다.

export default Login;
