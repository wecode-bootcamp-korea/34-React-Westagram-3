import React, { useEffect } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginBox(props) {
  return (
    <article className="loginBox ">
      <header className="loginHeader">
        <h1 className="loginHeaderLogo logo">Westagram</h1>
      </header>
      <form
        className="loginForm"
        onSubmit={(event) => {
          event.preventDefault();
          props.goToMain(props.loginId, props.passwordId);
        }}
      >
        <input
          type="text"
          className="loginFormId"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={(event) => {
            props.setLoginId(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="loginFormPassword"
          onChange={(event) => {
            props.setPasswordId(event.target.value);
          }}
        />

        <button
          type="submit"
          className="loginFormBtn"
          disabled={props.isDisabled}
        >
          <span>로그인</span>
        </button>
      </form>
      <div className="loginText">
        <h3>비밀번호를 잊으셨나요?</h3>
      </div>
    </article>
  );
}

function Login() {
  const navigate = useNavigate();
  const goToMain = (id, password) => {
    if (id.indexOf("@") >= 0 && password.length >= 5) {
      navigate("/main");
    } else {
      alert("아니야");
    }
  };

  const btnHandler = (id, password) => {
    if (id.indexOf("@") >= 0 && password.length >= 5) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  let [loginId, setLoginId] = useState("");
  let [passwordId, setPasswordId] = useState("");

  let [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (loginId && passwordId) {
      btnHandler(loginId, passwordId);
    }
  }, [loginId, passwordId]);

  return (
    <main className="login">
      <LoginBox
        loginId={loginId}
        passwordId={passwordId}
        setLoginId={setLoginId}
        setPasswordId={setPasswordId}
        goToMain={goToMain}
        isDisabled={isDisabled}
      />
    </main>
  );
}

export default Login;
