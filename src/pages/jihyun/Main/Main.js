import React from 'react';
import { useState, useEffect } from 'react';
import './main.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import Feed from './Feed';

const MainJiHyun = () => {
  const [feedsDATA, setFeedsDATA] = useState([
    {
      id: 0,
      writerId: 'jihyun',
      writerImg: './images/jihyun/floggy.jpeg',
      feedImg: '/images/jihyun/boat.jpeg',
      feedText: '하와이로 서핑갔다~ 유후...',
    },
    {
      id: 1,
      writerId: 'canon_mj',
      writerImg: './images/jihyun/wecode.jpeg',
      feedImg: '/images/jihyun/giraffe.jpg',
      feedText: '아마존 사파리에서 기린봤당...',
    },
  ]);

  return (
    <div id="mainContainer">
      {/* <!-- 1.상위 네이게이터 --> */}
      <nav>
        <div id="navBoxs">
          <div className="navBox" id="leftNav">
            <p>
              <img
                className="MainLogo"
                src="./images/jihyun/logoinstagram.png"
                alt="instagramlogo"
              />
            </p>
            <p>
              <span className="MainWestagram">westagram</span>
            </p>
          </div>

          <div className="navBox" id="middleNav">
            <p>
              <input type="text" placeholder="검색" />
            </p>
          </div>

          <div className="navBox" id="rightNav">
            <p>
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt="navigation"
              />
            </p>
            <p>
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="heart"
              />
            </p>
            <p className="profileLi">
              <button type="button" className="profileBtn">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                  alt="user"
                />
              </button>
            </p>
          </div>
          {/* <!--2.메뉴박스 --> */}
          <div id="menuBox" className="hidden">
            <button>프로필</button>
            <button>저장됨</button>
            <button>설정</button>
            <button>계정 전환</button>
            <button>로그아웃</button>
          </div>
        </div>
      </nav>
      {/* <!-- 3. 피드 본문 -->  */}
      <main>
        {/* <!-- 2.프로필 메뉴 박스--> */}
        <div id="feedWrapper">
          {/* <!-- 2-1.왼쪽 게시글피드 --> */}
          {feedsDATA.map(el => (
            <Feed
              id={el.id}
              writerId={el.writerId}
              writerImg={el.writerImg}
              feedImg={el.feedImg}
              feedText={el.feedText}
            />
          ))}
        </div>
        {/* <!-- 3.오른쪽 스토리피드 --> */}
        <section id="mainRightWrapper">
          <div className="mainRight">
            {/* <!-- 오른쪽 top --> */}
            <div className="userTemplate">
              <p>
                <img src="./images/jihyun/wecode.jpeg" alt="wecodeLogo" />
              </p>
              <div className="rightTemplate">
                <p>wecode_bootcamp</p>
                <p>WeCode ㅣ 위코드</p>
              </div>
            </div>
            {/* <!-- 스토리 영역 --> */}
            <div className="story">
              <p className="storyTitle">
                <span className="gray">스토리</span>
                <span style={{ fontWeight: 'bold' }}>모두 보기</span>
              </p>
              <div id="storyUsers">
                <div className="userTemplate">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <div className="rightTemplate">
                    <p>_yum_s</p>
                    <p>16분 전</p>
                  </div>
                </div>
                <div className="userTemplate">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <div className="rightTemplate">
                    <p>drink_eat_drink</p>
                    <p>3시간 전</p>
                  </div>
                </div>
                <div className="userTemplate">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <div className="rightTemplate">
                    <p>hyukyc</p>
                    <p>20시간 전</p>
                  </div>
                </div>
                <div className="userTemplate">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <div className="rightTemplate">
                    <p>drink_eat_drink</p>
                    <p>3시간 전</p>
                  </div>
                </div>
                <div className="userTemplate">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <div className="rightTemplate">
                    <p>drink_eat_drink</p>
                    <p>3시간 전</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- 추천영역 --> */}
            <div className="story recommend">
              <p className="storyTitle">
                <span className="gray">회원님을 위한 추천</span>
                <span style={{ fontWeight: 'bold' }}>모두 보기</span>
              </p>
              <div id="storyUsers">
                <div className="userTemplate">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <div className="rightTemplate">
                    <p>joaaahye</p>
                    <p>_legend_a님 외 2명이...</p>
                  </div>
                  <p className="blue">팔로우</p>
                </div>
                <div className="userTemplate ">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <div className="rightTemplate">
                    <p>rampart81</p>
                    <p>ringo.seoul님 외 12...</p>
                  </div>
                  <p className="blue">팔로우</p>
                </div>
                <div className="userTemplate">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <div className="rightTemplate">
                    <p>shawnjjoo</p>
                    <p>jimmylee1220님 외 1...</p>
                  </div>
                  <p className="blue">팔로우</p>
                </div>
              </div>
            </div>
            {/* <!-- 카피라이트 부분 --> */}
            <div id="copyRight">
              <p>Instagram 정보·지원·홍보 센터·API· </p>
              <p>채용 정보·개인정보처리방침·약관·</p>
              <p>디렉터리·프로필·해시태그·언어</p>
              <p className="copy">© 2022 INSTAGRAM FROM META</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainJiHyun;
