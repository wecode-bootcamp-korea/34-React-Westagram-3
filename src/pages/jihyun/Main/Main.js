import React from 'react';
import { useState } from 'react';
import './main.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import Feed from './Feed';

const names = [
  { name: 'Alice', korean: '앨리스' },
  { name: 'Abel', korean: '아벨' },
  { name: 'Adia', korean: '애디아' },
  { name: 'Alexandra', korean: '알렉산드라' },
  { name: 'Amber', korean: '엠버' },
  { name: 'Alexandra', korean: '알렉산드라' },
  { name: 'Amber', korean: '엠버' },
  { name: 'Baby', korean: '베이비' },
  { name: 'Benny', korean: '베니' },
  { name: 'Brooke', korean: '브루크' },
  { name: 'Bety', korean: '베티' },
  { name: 'Bency', korean: '벤씨' },
  { name: 'Bety', korean: '베티' },
  { name: 'Bency', korean: '벤씨' },
  { name: 'Callie', korean: '캘리' },
  { name: 'Camille', korean: '카밀' },
  { name: 'Caitlin', korean: '캐이틀린' },
  { name: 'Caroline', korean: '캐롤린' },
  { name: 'Charlotte', korean: '샬롯' },
  { name: 'Caitlin', korean: '캐이틀린' },
  { name: 'Caroline', korean: '캐롤린' },
  { name: 'Charlotte', korean: '샬롯' },
  { name: 'Danielle', korean: '대니엘' },
  { name: 'Dua Lipa', korean: '두아 리파' },
  { name: 'Della', korean: '델라' },
  { name: 'Dora', korean: '도라' },
  { name: 'Dorothy', korean: '도로시' },
  { name: 'Dora', korean: '도라' },
  { name: 'Dorothy', korean: '도로시' },
];

const MainJiHyun = () => {
  const [feedsDATA] = useState([
    {
      id: 0,
      writerId: 'canon_mj',
      writerImg: './images/jihyun/wecode.jpeg',
      feedImg: '/images/jihyun/giraffe.jpg',
      feedText: '아마존 사파리에서 기린봤당...',
    },
    {
      id: 1,
      writerId: 'jihyun',
      writerImg: './images/jihyun/floggy.jpeg',
      feedImg: '/images/jihyun/boat.jpeg',
      feedText: '하와이로 서핑갔다~ 유후...',
    },
  ]);
  const [searchShow, setSearchShow] = useState(false);
  const [menuIsShow, setmenuIsShow] = useState(false);
  const [searchList, setSearchList] = useState(names);

  // [질문] - 왜 한박자 늦게 실행되는지? <- C를 쓰고 지워야 리렌더링 됨.
  // 1. setState 콜백함수(modifier)는 비동기로 호출되는 함수임.
  // 2.만일 setState 콜백함수가 두번 실행이 된다면, 두 함수의 비동기 실행이 코드의 흐름대로 순서가 보장되지 않음
  // 따라서 위에 setState 콜백함수를 실행하여 state를 바꾸고, 이 state를 이용하여 두번째 setState 콜백함수를 실행한다면 오류 날 수도 있음.

  const onInput = e => {
    const searchValue = e.target.value;
    // setInputValue(prev => (prev = e.target.value));
    setSearchList(prev => {
      if (searchValue === '') {
        return [...names];
      }
      return names.filter(el => el.name.includes(searchValue));
    });
  };

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
              <input
                type="text"
                placeholder="검색"
                onInput={onInput}
                onFocus={e => setSearchShow(prev => !prev)}
                onBlur={e => setSearchShow(prev => !prev)}
              />
            </p>

            {/* 검색창 */}
            <div id="searchIdWeapper" className={searchShow ? '' : 'boxShow'}>
              <div id="searchId">
                {searchList.map((el, idx) => {
                  return (
                    <div className="idBox" key={idx}>
                      <p>
                        <i className="fas fa-user-circle userIcon" />
                      </p>
                      <div className="idBoxRight">
                        <p>{el.name}</p>
                        <p>{el.korean}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
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
              <button
                type="button"
                className="profileBtn"
                onClick={() => setmenuIsShow(prev => !prev)}
              >
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                  alt="user"
                />
              </button>
            </p>
          </div>

          {/* <!--2.메뉴박스 --> */}
          <div id="menuBox" className={menuIsShow ? null : 'hidden'}>
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
            // [리팩토링] - jsx에서 배열을 렌터링 할 땐, key를 prop으로 항상 넣어줘야 함! (해결ㅇ-key를 쓰는 곳 잘 모르겠음)
            <Feed
              key={el.id}
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
