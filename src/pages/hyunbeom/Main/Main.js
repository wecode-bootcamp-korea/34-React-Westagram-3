import React, { useState } from 'react';
import Nav from './Nav/Nav';
import User from './Nav/NavMenu/User';
import data from './data';
import Feeds from './Feed/Feed';
import './main.scss';

//TODO:이 파일들은 전역에 적용 되야 할 파일입니다. index.js에서 이미 import 하고 있어서 중복으로 import 할 필요가 없습니다. SPA속성을 다시한번 떠올려보세요
// import '../styles/reset.css';
// import '../styles/common.css';

//컴포넌트를 나눠놓은건 좋지만, 보기 너무 어려워서 파일단위로 나눴습니다.
//Main 컴포넌트 파일에 진입했다면, Main 컴포넌트부터 보여야 합니다.
//컴포넌트는 파일단위로 분리해서 관리 해 주세요
//컴포넌트 선언은 화살표함수로 선언 해 주세요

function Main() {
  //setState로 바뀌지 않는 데이터는 state가 아닙니다. state에 저장하지않고도 쓸 수 있습니다.
  let [userInfo, setUserInfo] = useState(data);
  // boolean 타입을 다룬다면 의문문으로, 그리고 명확하게 이름 지어 주세요
  // isSearchBoxOpen, setIsSearchBoxOpen
  // isMenuBoxOpen, setIsMenuBoxOpen
  // 이렇게요
  let [modalBox, setModalBox] = useState(false);
  let [menuBox, setMenuBox] = useState(true);

  return (
    <>
      <Nav
        modalBox={modalBox}
        setModalBox={setModalBox}
        menuBox={menuBox}
        setMenuBox={setMenuBox}
      />

      <main
        className="mainpage"
        onClick={() => {
          setModalBox(false);
          setMenuBox(false);
        }}
      >
        {/*
         * 데이터의 유무에 따라 화면을 그리는 의도라면 조건문이 필요하지만, 일반적으로 데이터를 의도적으로 뺴서 만들지는 않습니다.
         * 상수데이터는 통신으로 받아오지않기때문애, 데이터가 있다면 무조건 들어옵니다.
         * map 메서드는 key가 반드시 필요합니다.
         * 매개변수는 인자로 들어올 데이터가 어떤 데이터인지 알기 쉽도록 이름지어 주세요. a 는 어떤 데이터인지 유추하기어렵습니다.
         */}
        <div className="feeds">
          {/* {userInfo.map((a, i) => {
            if (a.isLocationFeeds) {
              return <Feeds userInfo={userInfo[i]} />;
            }
          })} */}
          {data.map(feedLists => (
            <Feeds feedLists={feedLists} key={feedLists.id} />
          ))}
        </div>
        <div className="right">
          <div className="main-right">
            <div className="main-right-user">
              <User userInfo={userInfo[0]} />
            </div>
            <div className="main-right-story">
              <header className="main-right-story__header">
                <span className="gray">스토리</span>
                <span>모두보기</span>
              </header>
              {/* {userInfo.map((a, i) => {
                if (a.isLocationStory) {
                  return (
                    <div className="main-right-user">
                      <User userInfo={userInfo[i]} key={i} />
                    </div>
                  );
                }
              })} */}
            </div>
            <div className="main-right-story recommend">
              <header className="main-right-story__header">
                <span className="gray">회원님을 위한 추천</span>
                <span>모두보기</span>
              </header>
              <div className="main-right-user">
                <User userInfo={userInfo[6]} />
                <div className="user-info-follow">
                  <span>팔로우</span>
                </div>
              </div>
              <div className="main-right-user">
                <User userInfo={userInfo[6]} />
                <div className="user-info-follow">
                  <span>팔로우</span>
                </div>
              </div>
              <div className="main-right-user">
                <User userInfo={userInfo[7]} />
                <div className="user-info-follow">
                  <span>팔로우</span>
                </div>
              </div>
            </div>
            <footer>
              <span className="gray">
                Instagram 정보 · 지원 · 홍보 센터 · API ·
                <p>채용 정보 · 개인정보처리방침 · 약관 ·</p>
                디렉터리 · 프로필 · 해시태그 · 언어
              </span>
              <span className="gray"> © 2022 Instagram from Meta</span>
            </footer>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
