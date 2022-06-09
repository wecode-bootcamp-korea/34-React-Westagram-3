import React from "react";
import "./Main.scss";
import Nav from "../../components/Nav/Nav";

function Main() {
  return (
    <>
      <Nav></Nav>

      <main className="mainpage">
        <div className="feeds">
          <article className="feeds-article">
            <div className="feeds-user-name">
              <img src="/images/myPhoto.jpeg" />
              <span className="bold">hyunbeom__hi</span>
              <i className="fa fa-ellipsis"></i>
            </div>
            <div className="feeds-pic">
              <img src="/images/feed.jpeg" />
            </div>
            <section className="feeds-like">
              <div className="feeds-like__icon">
                <div className="feeds-like__icon-left">
                  <i className="fa-regular fa-lg fa-heart big-heart"></i>
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
                <div className="feeds-like__chat-friends">
                  <div className="feeds-like__chat-friends-left">
                    <span className="bold">neceosecius</span>
                    <span>이야~~~ 잘 만들었네 </span>
                  </div>
                  <div className="feeds-like__chat-friends-right">
                    <button className="like-button">
                      <i className="fa fa-x gray hidden"></i>
                      <i className="fa-regular fa-heart gray"></i>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <span className="chating-time gray">42분 전</span>
            <form className="feeds-chating">
              <input
                className="feeds-chating-input"
                type="text"
                placeholder="댓글 달기..."
              />
              <button>게시</button>
            </form>
          </article>
        </div>
        <div className="right">
          <div className="main-right">
            <div className="main-right-user">
              <div className="user-pic">
                <img src="/images/wecode.jpeg" />
              </div>
              <div className="user-info">
                <span className="user-info__text bold">wecode_bootcamp</span>
                <span className="user-info__text gray">WeCode | 위코드</span>
              </div>
            </div>
            <div className="main-right-story">
              <header className="main-right-story__header">
                <span className="gray">스토리</span>
                <span>모두보기</span>
              </header>
              <div className="main-right-user">
                <div className="user-pic">
                  <img src="/images/wecode.jpeg" />
                </div>
                <div className="user-info">
                  <span className="user-info__text bold">wecode_bootcamp</span>
                  <span className="user-info__text gray">WeCode | 위코드</span>
                </div>
              </div>
              <div className="main-right-user">
                <div className="user-pic">
                  <img src="/images/wecode.jpeg" />
                </div>
                <div className="user-info">
                  <span className="user-info__text bold">wecode_bootcamp</span>
                  <span className="user-info__text gray">WeCode | 위코드</span>
                </div>
              </div>
              <div className="main-right-user">
                <div className="user-pic">
                  <img src="/images/wecode.jpeg" />
                </div>
                <div className="user-info">
                  <span className="user-info__text bold">wecode_bootcamp</span>
                  <span className="user-info__text gray">WeCode | 위코드</span>
                </div>
              </div>
              <div className="main-right-user">
                <div className="user-pic">
                  <img src="/images/wecode.jpeg" />
                </div>
                <div className="user-info">
                  <span className="user-info__text bold">wecode_bootcamp</span>
                  <span className="user-info__text gray">WeCode | 위코드</span>
                </div>
              </div>
            </div>
            <div className="main-right-story recommend">
              <header className="main-right-story__header">
                <span className="gray">회원님을 위한 추천</span>
                <span>모두보기</span>
              </header>
              <div className="main-right-user">
                <div className="user-pic">
                  <img src="/images/wecode.jpeg" />
                </div>
                <div className="user-info">
                  <span className="user-info__text bold">wecode_bootcamp</span>
                  <span className="user-info__text gray">WeCode | 위코드</span>
                </div>
                <div className="user-info-follow">
                  <span>팔로우</span>
                </div>
              </div>
              <div className="main-right-user">
                <div className="user-pic">
                  <img src="/images/wecode.jpeg" />
                </div>
                <div className="user-info">
                  <span className="user-info__text bold">wecode_bootcamp</span>
                  <span className="user-info__text gray">WeCode | 위코드</span>
                </div>
                <div className="user-info-follow">
                  <span>팔로우</span>
                </div>
              </div>
              <div className="main-right-user">
                <div className="user-pic">
                  <img src="/images/wecode.jpeg" />
                </div>
                <div className="user-info">
                  <span className="user-info__text bold">wecode_bootcamp</span>
                  <span className="user-info__text gray">WeCode | 위코드</span>
                </div>
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
