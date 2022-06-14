import React from 'react';
import './main.scss';
import '../styles/reset.css';
import '../styles/common.css';
import { useState } from 'react';
import data from './data';

function Nav(props) {
  let [modal, setModal] = useState(false);
  let [searchValue, setSearchValue] = useState('');
  // let [modalBox, setModalBox] = useState(false);
  let [userInfo, setUserInfo] = useState(data);
  const filters = searchValue.length
    ? userInfo.filter(a =>
        a.title.toUpperCase().includes(searchValue.toUpperCase())
      )
    : [];

  function ModalBox() {
    return (
      <div className="modal">
        {filters.map((a, i) => {
          return <Modal filters={filters} i={i} />;
        })}
      </div>
    );
  }
  function Modal(props) {
    return (
      <div key={props.i} className="main-right-user">
        <User userInfo={filters[props.i]} />
      </div>
    );
  }

  function MenuBox() {
    return (
      <div className="menuBox">
        <div className="menuBoxIcon">
          <i class="fa-regular fa-circle-user"></i>
          <span>프로필</span>
        </div>
        <div className="menuBoxIcon">
          <i className="fa-regular fa-bookmark"></i>
          <span>저장됨</span>
        </div>
        <div className="menuBoxIcon">
          <i class="fa fa-gear"></i>
          <span>설정</span>
        </div>
        <div className="menuBoxIcon">
          <i class="fa fa-arrow-rotate-right"></i>
          <span>계정전환</span>
        </div>
        <div className="menuBoxLogout">
          <span>로그아웃</span>
        </div>
      </div>
    );
  }

  return (
    <nav className="nav-bar">
      <div className="nav-bar__left">
        <i className="fa-brands fa-lg fa-instagram"></i>

        <span className="logo">westagram</span>
      </div>
      <div className="nav-bar__search">
        <input
          onClick={() => {
            props.setModalBox(true);
            props.setMenuBox(false);
          }}
          onChange={event => {
            setSearchValue(event.target.value);
          }}
          type="text"
          placeholder="검색"
        />
        <i className="fa-solid fa-magnifying-glass"></i>
        {props.modalBox ? <ModalBox /> : null}
      </div>

      <div className="nav-bar__right">
        <i className="fa-regular fa-lg fa-compass"></i>
        <i className="fa-regular fa-lg fa-heart"></i>
        <i
          className="fa-regular fa-lg fa-user"
          onClick={() => {
            props.setMenuBox(!props.menuBox);
            props.setModalBox(false);
          }}
        ></i>
        {props.menuBox ? <MenuBox /> : null}
        <span className="dot"></span>
      </div>
    </nav>
  );
}

function Chat(props) {
  let [red, setRed] = useState('');

  return (
    <div key={props.i} className="feeds-like__chat-friends">
      <div className="feeds-like__chat-friends-left">
        <span className="bold">neceosecius</span>
        <span>{props.chats} </span>
      </div>
      <div className="feeds-like__chat-friends-right">
        <button className="like-button">
          <i
            onClick={() => {
              let copy = [...props.chat];
              copy.splice(props.i, 1);
              props.setChat(copy);
            }}
            className="fa fa-x gray"
          ></i>
          <i
            onClick={() => {
              red === 'fa-solid' ? setRed('') : setRed('fa-solid');
            }}
            className={`fa-regular fa-heart gray + ${red}`}
          ></i>
        </button>
      </div>
    </div>
  );
}

function User(props) {
  return (
    <>
      <div className="user-pic">
        <img src={props.userInfo.pic} />
      </div>
      <div className="user-info">
        <span className="user-info__text bold">{props.userInfo.title}</span>
        <span className="user-info__text gray">{props.userInfo.content}</span>
      </div>
    </>
  );
}

function Main() {
  let [chatInput, setChatInput] = useState('');
  let [chat, setChat] = useState(['이야~~~ 잘 만들었네!']);
  let [red, setRed] = useState('');
  let [userInfo, setUserInfo] = useState(data);
  let [modalBox, setModalBox] = useState(false);
  let [menuBox, setMenuBox] = useState(false);

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
        <div className="feeds">
          <article className="feeds-article">
            <div className="feeds-user-name">
              <img src="/images/hyunbeom/myPhoto.jpeg" />
              <span className="bold">hyunbeom__hi</span>
              <i className="fa fa-ellipsis"></i>
            </div>
            <div className="feeds-pic">
              <img src="/images/hyunbeom/feed.jpeg" />
            </div>
            <section className="feeds-like">
              <div className="feeds-like__icon">
                <div className="feeds-like__icon-left">
                  <i
                    onClick={() => {
                      red === 'fa-solid' ? setRed('') : setRed('fa-solid');
                    }}
                    className={`fa-regular fa-lg fa-heart big-heart + ${red}`}
                  ></i>
                  <i className="fa-regular fa-lg fa-flip-horizontal fa-comment"></i>
                  <i className="fa fa-lg fa-arrow-up-from-bracket"></i>
                </div>
                <div className="feeds-like__icon-right">
                  <i className="fa-regular fa-lg fa-bookmark"></i>
                </div>
              </div>
              <div className="feeds-like__config">
                <div className="feeds-like__config-pic"></div>
                <span>
                  <span className="bold">aineworld</span>님
                  <span className="bold">외 10명</span>이 좋아합니다
                </span>
              </div>
              <div className="feeds-like__chat-screen">
                <div className="feeds-like__chat-mine">
                  <span className="bold">canon_mj</span>
                  <span>위워크에서 진행한 도자기 클래스...</span>
                  <span className="gray">더 보기</span>
                </div>
                {chat.map((a, i) => {
                  let chats = a;

                  return (
                    <Chat
                      chatInput={chatInput}
                      chat={chat}
                      setChat={setChat}
                      chats={chats}
                      i={i}
                    />
                  );
                })}
              </div>
            </section>
            <span className="chating-time gray">42분 전</span>
            <form
              className="feeds-chating"
              onSubmit={event => {
                event.preventDefault();
                let copy = [...chat];
                copy.push(chatInput);
                setChat(copy);
                event.target.reset();
                setChatInput('');
              }}
            >
              <input
                className="feeds-chating-input"
                type="text"
                placeholder="댓글 달기..."
                onChange={event => {
                  setChatInput(event.target.value);
                }}
              />
              <button>게시</button>
            </form>
          </article>
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
              {userInfo.map((a, i) => {
                if (a.location === 'Story') {
                  return (
                    <div className="main-right-user">
                      <User userInfo={userInfo[i]} />
                    </div>
                  );
                }
              })}
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

{
  /* <div className="main-right-user">
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
</div> */
}
