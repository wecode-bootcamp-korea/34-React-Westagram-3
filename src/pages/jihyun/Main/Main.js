import React from 'react';
import './main.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
const MainJiHyun = () => {
  return (
    <div id="mainContainer">
      {/* <!-- 1.상위 네이게이터 --> */}
      <nav>
        <div id="navUls">
          <ul id="leftNav">
            <li>
              <img
                className="MainLogo"
                src="./images/jihyun/logoinstagram.png"
                alt="instagramlogo"
              />
            </li>
            <li>
              <span className="MainWestagram">westagram</span>
            </li>
          </ul>

          <ul id="middleNav">
            <li>
              <input type="text" placeholder="검색" />
            </li>
          </ul>

          <ul id="rightNav">
            <li>
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt="navigation"
              />
            </li>
            <li>
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="heart"
              />
            </li>
            <li className="profileLi">
              <button type="button" className="profileBtn">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                  alt="user"
                />
              </button>
            </li>
          </ul>
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
          <div className="feeds">
            {/* <!-- 2-1-1. 상단 게시자 이름 --> */}
            <ul className="feedTop">
              <li>
                <img src="./images/jihyun/wecode.jpeg" alt="wecode" />
              </li>
              <li>canon_mj</li>
              <li>
                <i className="fas fa-ellipsis-h" />
              </li>
            </ul>
            {/* <!-- 2-1-2. 사진 --> */}
            <img
              src="/images/jihyun/giraffe.jpg"
              alt="giraffe"
              className="giraffe"
            />
            {/* <!-- 2-1-3. 피드 하단 내용들 --> */}
            <div id="feedBottomContents">
              {/* <!-- 피드 하단 내용 - 아이콘들 --> */}
              <div className="imgIcons">
                <ul className="imgIconsLeft">
                  <li>
                    <svg
                      aria-label="좋아요"
                      className="_8-yf5"
                      color="#262626"
                      fill="#262626"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z" />
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-label="댓글 달기"
                      className="_8-yf5"
                      color="#262626"
                      fill="#262626"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path
                        d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-label="게시물 공유"
                      className="_8-yf5"
                      color="#262626"
                      fill="#262626"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="22"
                        x2="9.218"
                        y1="3"
                        y2="10.083"
                      />
                      <polygon
                        fill="none"
                        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </li>
                </ul>
                <svg
                  aria-label="저장"
                  className="bookMark"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <polygon
                    fill="none"
                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              {/* <!-- 피드 하단 내용 - 좋아요 누른 내용 --> */}
              <div className="likeMessage">
                <img src="./images/jihyun/wecode.jpeg" alt="likes" />
                <p>
                  <span className="thick">aineworld</span>님
                  <span className="thick">외 10명</span>이 좋아합니다.
                </p>
              </div>
              {/* <!-- 피드 하단 내용 - 피드 하단 작성글 내용 --> */}
              <p className="feedText">
                <span className="thick">cannon_mj</span> 위워크에서 진행한
                베이킹 클래스...
                <span className="gray">더 보기</span>
              </p>
            </div>
            {/* <!-- 댓글기능 --> */}
            <section>
              <ul id="comments">
                <li id="0">
                  <p>
                    <span className="user">user0</span> 댓글썻당0
                  </p>
                  <span>
                    <button type="button" className="heartBtn emptyBtn">
                      <svg
                        className="emptyHeart"
                        color="#8e8e8e"
                        fill="#8e8e8e"
                        height="12"
                        viewBox="0 0 24 24"
                        width="12"
                      >
                        <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z" />
                      </svg>
                    </button>
                    <button type="button" className="delBtn">
                      삭제
                    </button>
                  </span>
                </li>
                <li id="1">
                  <p>
                    <span className="user">user0</span> 댓글썻당0
                  </p>
                  <span>
                    <button type="button" className="heartBtn emptyBtn">
                      <svg
                        className="emptyHeart"
                        color="#8e8e8e"
                        fill="#8e8e8e"
                        height="12"
                        viewBox="0 0 24 24"
                        width="12"
                      >
                        <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z" />
                      </svg>
                    </button>
                    <button type="button" className="delBtn">
                      삭제
                    </button>
                  </span>
                </li>
              </ul>
              <form className="contentForm">
                <input placeholder="댓글 달기..." />
                <button type="submit" className="addBtn">
                  게시
                </button>
              </form>
            </section>
          </div>
        </div>
        {/* <!-- 3.오른쪽 스토리피드 --> */}
        <section id="mainRightWrapper">
          <div className="mainRight">
            {/* <!-- 오른쪽 top --> */}
            <div className="userTemplate">
              <p>
                <img src="./images/jihyun/wecode.jpeg" alt="wecodeLogo" />
              </p>
              <ul>
                <li>wecode_bootcamp</li>
                <li>WeCode ㅣ 위코드</li>
              </ul>
            </div>
            {/* <!-- 스토리 영역 --> */}
            <div id="story">
              <p className="storyTitle">
                <span className="gray">스토리</span>
                <span style={{ fontWeight: 'bold' }}>모두 보기</span>
              </p>
              <div id="storyUsers">
                <div className="userTemplate">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <ul>
                    <li>_yum_s</li>
                    <li>16분 전</li>
                  </ul>
                </div>
                <div className="userTemplate">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <ul>
                    <li>drink_eat_drink</li>
                    <li>3시간 전</li>
                  </ul>
                </div>
                <div className="userTemplate">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <ul>
                    <li>hyukyc</li>
                    <li>20시간 전</li>
                  </ul>
                </div>
                <div className="userTemplate">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <ul>
                    <li>drink_eat_drink</li>
                    <li>3시간 전</li>
                  </ul>
                </div>
                <div className="userTemplate">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <ul>
                    <li>drink_eat_drink</li>
                    <li>3시간 전</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- 추천영역 --> */}
            <div id="story" className="recommend">
              <p className="storyTitle">
                <span className="gray">회원님을 위한 추천</span>
                <span style={{ fontWeight: 'bold' }}>모두 보기</span>
              </p>
              <div id="storyUsers">
                <div className="userTemplate">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <ul>
                    <li>joaaahye</li>
                    <li>_legend_a님 외 2명이...</li>
                  </ul>
                  <p className="blue">팔로우</p>
                </div>
                <div className="userTemplate ">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <ul>
                    <li>rampart81</li>
                    <li>ringo.seoul님 외 12...</li>
                  </ul>
                  <p className="blue">팔로우</p>
                </div>
                <div className="userTemplate">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <ul>
                    <li>shawnjjoo</li>
                    <li>jimmylee1220님 외 1...</li>
                  </ul>
                  <p className="blue">팔로우</p>
                </div>
              </div>
            </div>
            {/* <!-- 카피라이트 부분 --> */}
            <ul id="copyRight">
              <li>Instagram 정보·지원·홍보 센터·API· </li>
              <li>채용 정보·개인정보처리방침·약관·</li>
              <li>디렉터리·프로필·해시태그·언어</li>
              <p>© 2022 INSTAGRAM FROM META</p>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainJiHyun;
