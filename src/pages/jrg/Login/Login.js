import React from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import "./Login.scss";
import {useState} from 'react';

const Login = () => {

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        if(idValue.indexOf('@')!== -1 && pwValue.length > 5) {
            navigate("/main")
        }
    }

    const [idValue,setIdValue] = useState("");
    const [pwValue,setPwValue] = useState("");

    const [classSetting,setClassSetting] = useState(false);

    const getId = (event) => {
        event.preventDefault();
        setIdValue(event.target.value);
        if(idValue.indexOf('@')!== -1 && pwValue.length > 5) {
            setClassSetting(true);
        } else{
            setClassSetting(false)
        }
        console.log(classSetting);
    }

    const getPw = (event) => {
        event.preventDefault();
        setPwValue(event.target.value);
        if(idValue.indexOf('@')!== -1 && pwValue.length > 5) {
            setClassSetting(true)
        } else {
            setClassSetting(false)
        }
        console.log(classSetting);
    }

    return (
        <div className="body">
            <div className="wrapDiv">
                <div className="inLine">
                    <span className="titleLogin"> Westagram</span>
                    <form className="loginForm" onSubmit={onSubmit}>
                        <input className="idInput" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" value={idValue} onChange={getId}/>
                        <input className="pwInput" type="password" placeholder="비밀번호" value={pwValue} onChange={getPw}/>
                        <button className={classSetting? "loginBtnActive":"loginBtnUnactive"}>로그인</button>
                    </form>
                    <a className="forgotPw" href="">비밀번호를 잊으셨나요?</a>
                 </div>
            </div>
        </div>
    );
};


export default Login;