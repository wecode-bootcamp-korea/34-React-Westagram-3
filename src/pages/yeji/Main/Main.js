import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommentList from './CommentList';
import './main.scss';

const MainYeJi = () => {
  const [commentText, setCommentText] = useState('');
  const [commentCntList, setCommentCntList] = useState([]);
  // const [commentBtn, setcommentBtn] = useState('rgba(0, 149, 246, 0.3)');
  // const [btnDisabled, setBtnDisabled] = useState('disabled');
  //전역에서 변수 선언하는것보다 참조해야할 scope 기준으로 선언해 주는게 스코프 오염을 줄이는데 좋습니다.
  const copyList = [...commentCntList];

  //input에 입력된 댓글 값을 가져오기때문에, 함수이름은 getCommentValue가 좀더 어울려보입니다.
  const commentTextInput = event => {
    setCommentText(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (commentText.length === 0) return;

    //setCommentCntList에 직접 스프레드 연산자로 추가하는 방법이 있습니다.
    // copyList.push(commentText);
    setCommentCntList([...commentCntList, commentText]);
    setCommentText('');
  };

  //이 함수는 button 컬러를 둘중에 하나로 바꾸는 기능과
  //button disabled를 한번에 처리하는 함수 로 보입니다.
  //업데이트하는 컬러와 disabled 속성 모두 "둘중에 하나" 로 값이 결정됩니다.
  //연한색 아니면 진한색
  //disabled 아니면 abled
  //이런 값은 조건에 따라 해당 attribute에서 삼항연산자로 바로 처리해줄 수 있습니다. 함수없이.

  // const handleCheange = () => {
  //   if (commentText) {
  //     setcommentBtn('#0095f6');
  //     setBtnDisabled('');
  //   } else {
  //     setcommentBtn('rgba(0, 149, 246, 0.3)');
  //     setBtnDisabled('disabled');
  //   }
  // };
  //위의 함수를 동작시키기 위한 useEffect여서 함수가 없다면 이 useEffect도 없어도 됩니다.
  // useEffect(handleCheange, [commentText]);

  return (
    <div className="wrap">
      <nav className="header">
        <div className="inner">
          <h1 className="logo">
            <a href="/">Westagram</a>
          </h1>
          <div className="top-search">
            <input type="text" placeholder="검색어 입력" className="input" />
            <button type="submit" className="btn">
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </button>
          </div>
          <div className="util">
            <ul>
              <li>
                <a href="/">
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                    alt="탐색"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                    alt="하트"
                  />
                </a>
              </li>
              <li>
                <Link to="/">
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                    alt="마이페이지"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="main">
        <div className="feeds-wrap">
          <div className="story-wrap">
            <div className="items">
              {/* 여기부터 */}
              <div className="item">
                <div className="img">
                  <img src="/images/yeji/img1.jpg" alt="" />
                </div>
                <div className="name">all.about.seoul.trip</div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/images/yeji/img1.jpg" alt="" />
                </div>
                <div className="name">all.about.seoul.trip</div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/images/yeji/img1.jpg" alt="" />
                </div>
                <div className="name">all.about.seoul.trip</div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/images/yeji/img1.jpg" alt="" />
                </div>
                <div className="name">jeong9204</div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/images/yeji/img1.jpg" alt="" />
                </div>
                <div className="name">jeong9204</div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/images/yeji/img1.jpg" alt="" />
                </div>
                <div className="name">jeong9204</div>
              </div>
              {/* 여기까지 
              ui가 반복되는 코드는 데이터 구조 만들고, map 으로 구현 해 보세요!
              */}
            </div>
          </div>
          <div className="feeds">
            <article>
              <div className="nickname">
                <div className="in">
                  <div className="pic">
                    <img src="/images/yeji/img1.jpg" alt="" />
                  </div>
                  <div className="txt">jeong9204</div>
                </div>
                <div className="more">
                  <a href="/">
                    <svg
                      aria-label="옵션 더 보기"
                      className="_8-yf5 "
                      color="#262626"
                      fill="#262626"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <circle cx="12" cy="12" r="1.5" />
                      <circle cx="6" cy="12" r="1.5" />
                      <circle cx="18" cy="12" r="1.5" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="photo">
                <img src="/images/yeji/img2.jpg" alt="" />
              </div>
              <div className="info">
                <div className="icons">
                  <ul>
                    <li>
                      <a href="/">
                        <svg
                          aria-label="좋아요"
                          className="i-like "
                          color="#262626"
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <svg
                          aria-label="댓글 달기"
                          className="_8-yf5 "
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
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <svg
                          aria-label="게시물 공유"
                          className="_8-yf5 "
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
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="i-save">
                  <a href="/">
                    <svg
                      aria-label="저장"
                      className="_8-yf5 "
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
                  </a>
                </div>
              </div>
              <div className="like-txt">좋아요 4,374개</div>
              <div className="cnt">
                <a href="/" className="cnt-nick">
                  all.about.seoul.trip
                </a>
                <span className="in-txt">내용이 들어갑니다.....</span>
                <a href="/" className="more-txt">
                  더 보기
                </a>
              </div>
              <div className="comment-more">
                <a href="/">
                  댓글 <span>{copyList.length}</span>개 모두 보기
                </a>
              </div>
              <div className="comment-wrap">
                <div className="comment-cnt">
                  <ul id="commentCntList">
                    {/* <li>
                      <a href="/" className="comm-nick">
                        all.about.seoul.trip
                      </a>
                      <span>
                        댓글내용이 들어갑니다. 댓글내용이 들어갑니다. 댓글내용이
                        들어갑니다. 댓글내용이 들어갑니다. 댓글내용이
                        들어갑니다.
                      </span>
                      <a className="i-cancel" href="/">
                        닫기
                      </a>
                      <a href="/" className="i-heart">
                        <svg
                          aria-label="좋아요"
                          className="_8-yf5 "
                          color="#8e8e8e"
                          fill="#8e8e8e"
                          height="12"
                          role="img"
                          viewBox="0 0 24 24"
                          width="12"
                        >
                          <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z" />
                        </svg>
                      </a>
                    </li> */}
                    <CommentList
                      commentCntList={commentCntList}
                      setCommentCntList={setCommentCntList}
                    />
                    {/* {commentCntList.map(commentText => (
                      <li key={commentCntList.i}>
                        <a href="/" className="comm-nick">
                          jeong9204
                        </a>
                        <span>{commentText}</span>
                        <a className="i-cancel" href="/">
                          닫기
                        </a>
                        <a href="/" className="i-heart">
                          <svg
                            aria-label="좋아요"
                            className="_8-yf5 "
                            color="#8e8e8e"
                            fill="#8e8e8e"
                            height="12"
                            role="img"
                            viewBox="0 0 24 24"
                            width="12"
                          >
                            <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z" />
                          </svg>
                        </a>
                      </li>
                    ))} */}
                  </ul>
                </div>
                <div className="time">6분 전</div>
                <div className="comment-input">
                  <div className="comm-icon">
                    <svg
                      aria-label="이모티콘"
                      className="_8-yf5 "
                      color="#262626"
                      fill="#262626"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z" />
                    </svg>
                  </div>
                  <form id="commentForm" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      className="comm-input"
                      id="commentText"
                      placeholder="댓글달기..."
                      onChange={commentTextInput}
                      value={commentText}
                    />
                    <button
                      style={{
                        color:
                          commentText === ''
                            ? 'rgba(0, 149, 246, 0.3)'
                            : '#0095f6',
                      }}
                      className="comm-btn"
                      type="submit"
                      //disalbed 속성으로 막을 수 도 있지만, input의 값에 따라 comment가 입력되지 않게 return 해서 함수가 더이상 동작하지 않게 하는 방법도 있습니다.
                      // disabled={btnDisabled}
                    >
                      게시
                    </button>
                  </form>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="main-right">
          <div className="user-info">
            <div className="pic">
              <img src="/images/yeji/img1.jpg" alt="" />
            </div>
            <div className="info">
              <div className="user-id">
                <a href="/" id="myName">
                  jeong9204
                </a>
              </div>
              <span>정예지</span>
            </div>
            <div className="more">
              <a href="/">전환</a>
            </div>
          </div>
          <div className="recommend-wrap">
            <div className="title">회원님을 위한 추천</div>
            <ul>
              {/* 여기부터 */}
              <li>
                <div className="img">
                  <img src="/images/yeji/img1.jpg" alt="" />
                </div>
                <div className="txt">
                  <div className="tt">all.about.seoul.trip</div>
                  <p>Instagram 신규 가입</p>
                </div>
                <div className="follow-bt">
                  <a href="/">팔로우</a>
                </div>
              </li>
              <li>
                <div className="img">
                  <img src="/images/yeji/img1.jpg" alt="" />
                </div>
                <div className="txt">
                  <div className="tt">all.about.seoul.trip</div>
                  <p>Instagram 신규 가입</p>
                </div>
                <div className="follow-bt">
                  <a href="/">팔로우</a>
                </div>
              </li>
              <li>
                <div className="img">
                  <img src="/images/yeji/img1.jpg" alt="" />
                </div>
                <div className="txt">
                  <div className="tt">all.about.seoul.trip</div>
                  <p>Instagram 신규 가입</p>
                </div>
                <div className="follow-bt">
                  <a href="/">팔로우</a>
                </div>
              </li>
              <li>
                <div className="img">
                  <img src="/images/yeji/img1.jpg" alt="" />
                </div>
                <div className="txt">
                  <div className="tt">all.about.seoul.trip</div>
                  <p>Instagram 신규 가입</p>
                </div>
                <div className="follow-bt">
                  <a href="/">팔로우</a>
                </div>
              </li>
              <li>
                <div className="img">
                  <img src="/images/yeji/img1.jpg" alt="" />
                </div>
                <div className="txt">
                  <div className="tt">all.about.seoul.trip</div>
                  <p>Instagram 신규 가입</p>
                </div>
                <div className="follow-bt">
                  <a href="/">팔로우</a>
                </div>
              </li>
              {/* 여기까지 
              ui 반복되기때문에 map 으로 구현 해 보세요!
              */}
            </ul>
            <div className="more">
              <a href="/">모두 보기</a>
            </div>
          </div>
          <div className="addr-box">
            <div className="quick-link">
              <ul>
                {/* 여기부터 */}
                <li>
                  <a href="/">소개</a>
                </li>
                <li>
                  <a href="/">도움말</a>
                </li>
                <li>
                  <a href="/">홍보 센터</a>
                </li>
                <li>
                  <a href="/">API</a>
                </li>
                <li>
                  <a href="/">채용 정보</a>
                </li>
                <li>
                  <a href="/">개인정보처리방침</a>
                </li>
                <li>
                  <a href="/">약관</a>
                </li>
                <li>
                  <a href="/">위치</a>
                </li>
                <li>
                  <a href="/">인기 계정</a>
                </li>
                <li>
                  <a href="/">해시태그</a>
                </li>
                <li>
                  <a href="/">언어</a>
                </li>
                {/* 여기까지 map 으로 구현 해 보세요! */}
              </ul>
            </div>
            <address>&copy; 2022 INSTAGRAM FROM META</address>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainYeJi;
