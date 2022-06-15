import React, { useEffect } from 'react';
import { useState } from 'react';
import './main.scss';
const MainHooKyung = () => {
  const [comment, setComment] = useState();
  const [commentList, setCommentList] = useState([]);
  const [commentListJson, setCommentListJson] = useState([]);
  const [userId, setUserID] = useState(0);
  const [feedLike, setFeedLike] = useState(false);

  useEffect(() => {
    fetch('data/commentData.json')
      .then(res => res.json())
      .then(data => {
        setCommentListJson(data);
      });
  }, []);

  console.log(commentListJson);
  // 댓글 저장
  function addComment(e) {
    setComment(e.target.value);
  }
  // 댓글 추가
  const addItem = () => {
    return setCommentList([
      ...commentList,
      { id: new Date().getTime(), txt: comment },
    ]);
  };

  // 좋아요추가
  const feedLikeAdd = () => {
    setFeedLike(!feedLike);
  };

  return (
    <div className="mainHookyung">
      <header className="header">
        <nav className="menu">
          <h1 className="westargramLogo">
            <i className="fa-brands fa-instagram" />
            <p className="logo">Westargram</p>
          </h1>
          <div className="searchBar">
            <input className="searchBarInput" type="text" placeholder="검색" />
            <i className="fa-solid fa-magnifying-glass" />
          </div>
          <ul className="headerNav">
            <li>
              <img src="/images/hookyung/explore.png" alt="익스플로러 아이콘" />
            </li>
            <li>
              <img src="/images/hookyung/heart.png" alt="하트 아이콘" />
            </li>
            <li>
              <img src="/images/hookyung/profile.png" alt="프로필 아이콘" />
            </li>
          </ul>
        </nav>
      </header>
      <section className="sectionMain">
        <div className="sectionWrapper">
          <div className="feeds">
            <div className="article">
              <div className="articleHeader">
                <div className="headerUserInfo">
                  <img src="./images/hookyung/alex.jpg" alt="유저아이콘" />
                  <span className="headerId">kyungbaa__</span>
                </div>
                <i className="fa-solid fa-ellipsis" />
              </div>
              <div className="articleImage">
                <img src="./images/hookyung/diane.jpg" alt="피드이미지" />
              </div>
              <div className="articleIcon">
                <div className="iconLeft">
                  <div className="feedLike" onClick={feedLikeAdd}>
                    {feedLike === false ? (
                      <svg
                        aria-label="좋아요"
                        className="8Yf5"
                        color="#262626"
                        fill="#262626"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z" />
                      </svg>
                    ) : (
                      <svg
                        aria-label="좋아요 취소"
                        class="_ab6-"
                        color="#ed4956"
                        fill="#ed4956"
                        height="24"
                        role="img"
                        viewBox="0 0 48 48"
                        width="24"
                      >
                        <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                      </svg>
                    )}
                  </div>
                  <svg
                    aria-label="댓글 달기"
                    className="8Yf5"
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
                  <svg
                    aria-label="게시물 공유"
                    className="8Yf5"
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
                </div>
                <div className="iconRight">
                  <svg
                    aria-label="저장"
                    className="8Yf5"
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
              </div>

              <div className="artileCommenSection">
                <div className="feedLike">
                  <img
                    className="feedLikeImg"
                    src="./images/hookyung/alexander.jpg"
                    alt="dddd"
                  />
                  <p className="feedLikeUsers">
                    <b> aineworld</b>님 <b>외 10명</b>이 좋아합니다.
                  </p>
                </div>
                <div className="comments">
                  <div className="comment" />
                  {/* 댓글 반복 map */}
                  {/* {commentListJson.map((el, i) => {
                    return (
                      <CommentListJson
                        userCount={el.id}
                        userId={el.userId}
                        commentList={el.txt}
                        isLiked={el.isLiked}
                      />
                    );
                  })} */}
                  {commentList.map((el, i) => {
                    return (
                      <CommentList
                        userCount={i}
                        userId={userId}
                        commentList={el}
                        setCommentList={setCommentList}
                      />
                    );
                  })}

                  <span className="commentTime">54분 전</span>
                </div>
                <div className="commentWrite">
                  <input
                    className="commentContents"
                    type="text"
                    placeholder="댓글 달기..."
                    onChange={addComment}
                  />
                  <button className="commentWriteButton" onClick={addItem}>
                    게시
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mainRight">
            <div className="userInfos">
              <div className="userThumnail">
                <img
                  src="./images/hookyung/alex.jpg"
                  alt="유저 썸네일 이미지"
                />
              </div>
              <div className="userInfo">
                <span className="userInfoId">kyungbaa__</span>
                <span className="userInfoIdSub">Wecode | 위코드</span>
              </div>
            </div>
            {/* <!-- 스토리 --> */}
            <div className="userStoriesSection">
              <div className="storiesHeader">
                <span>스토리</span>
                <span>모두보기</span>
              </div>

              <div className="stories">
                {/* <!-- 개별스토리 --> */}
                <div className="story">
                  <div className="userThumnail">
                    <img
                      src="/images/hookyung/alexander.jpg"
                      alt="스토리썸네일이미지"
                    />
                  </div>
                  <div className="userThumnailInfo">
                    <span className="storyId">aineworld</span>
                    <span className="storyTime">2시간 전</span>
                  </div>
                </div>
                <div className="story">
                  <div className="userThumnail">
                    <img
                      src="/images/hookyung/alexander.jpg"
                      alt="스토리썸네일이미지"
                    />
                  </div>
                  <div className="userThumnailInfo">
                    <span className="storyId">aineworld</span>
                    <span className="storyTime">2시간 전</span>
                  </div>
                </div>
                <div className="story">
                  <div className="userThumnail">
                    <img
                      src="/images/hookyung/alexander.jpg"
                      alt="스토리썸네일이미지"
                    />
                  </div>
                  <div className="userThumnailInfo">
                    <span className="storyId">aineworld</span>
                    <span className="storyTime">2시간 전</span>
                  </div>
                </div>
                <div className="story">
                  <div className="userThumnail">
                    <img
                      src="/images/hookyung/alexander.jpg"
                      alt="스토리썸네일이미지"
                    />
                  </div>
                  <div className="userThumnailInfo">
                    <span className="storyId">aineworld</span>
                    <span className="storyTime">2시간 전</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 추천 시작--> */}
            {/* <!-- 추천헤더 --> */}
            <div className="recommendSection">
              <div className="recommendHeader">
                <span>회원님을 위한 추천</span>
                <span>모두 보기</span>
              </div>
              {/* <!-- 추천컨텐츠 --> */}
              <div className="recommends">
                {/* <!-- 개별추천 --> */}
                <div className="recommend">
                  <div className="recommendInfo">
                    <div className="recommendThumnail">
                      <img
                        src="/images/hookyung/cesarRincon.jpg"
                        alt="댓글 유저 썸네일 이미지"
                      />
                    </div>
                    <div className="recommendThumnailInfo">
                      <span className="recommendID">aineworld</span>
                      <span className="recommendCount">2시간 전</span>
                    </div>
                  </div>
                  <span className="recommendFollow">팔로우</span>
                </div>
                <div className="recommend">
                  <div className="recommendInfo">
                    <div className="recommendThumnail">
                      <img
                        src="/images/hookyung/cesarRincon.jpg"
                        alt="댓글 유저 썸네일 이미지"
                      />
                    </div>
                    <div className="recommendThumnailInfo">
                      <span className="recommendID">aineworld</span>
                      <span className="recommendCount">2시간 전</span>
                    </div>
                  </div>
                  <span className="recommendFollow">팔로우</span>
                </div>
                <div className="recommend">
                  <div className="recommendInfo">
                    <div className="recommendThumnail">
                      <img
                        src="/images/hookyung/cesarRincon.jpg"
                        alt="댓글 유저 썸네일 이미지"
                      />
                    </div>
                    <div className="recommendThumnailInfo">
                      <span className="recommendID">aineworld</span>
                      <span className="recommendCount">2시간 전</span>
                    </div>
                  </div>
                  <span className="recommendFollow">팔로우</span>
                </div>
              </div>
            </div>
            {/* <!-- 추천 끝 --> */}
            {/* <!-- footer 시작 --> */}
            <footer>
              <p>
                Instagram
                정보ㆍ지원ㆍ홍보ㆍ센터ㆍAPIㆍ채용정보ㆍ개인정보처리방식ㆍ약관ㆍ디렉토리ㆍ프로필ㆍ해시태그ㆍ언어
              </p>
              <p>Ⓒ2019 INSTAGRAM</p>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

/*
1.prop
{
  commentList: {id: 1654946706659, txt: 'aaa'}
  setCommentList: ƒ ()
  userCount: 1
  userId: 0
}

2.commentList 3.prev
[{ id: 1, txt: '댓글' }, {},{}]
*/

function CommentList(props) {
  const [addCommentLike, setAddCommentLike] = useState(false);
  const commentDelete = () => {
    // 코멘트 리스트를 수정하기 위해 props로 setCommentList 를 받아옴
    // prev는 받아온 댓글 객체 하나하나 변수명처럼 자유롭게 써도 무방하다.
    // prev를 filter함수로 수정한다. (전체 댓글 리스트와 유니크한 댓글을 비교하여 값이 같지 않은것만 반환한다.)
    props.setCommentList(prev => {
      return prev.filter(el => el.id !== props.commentList.id);
    });
  };

  const commentLike = () => {
    setAddCommentLike(!addCommentLike);
  };

  return (
    <div className="comment">
      <div className="commentView" key={props.commentList.id}>
        <span className="commentUserId">sald__ssaed_{props.userCount}</span>
        <span className="commentContent"> {props.commentList.txt}</span>
        <span className="commentLike" onClick={commentLike}>
          {addCommentLike === false ? (
            <i class="fa-regular fa-heart" />
          ) : (
            <i class="fa-solid fa-heart commentLikeTrue " />
          )}
        </span>
        <button className="commentDelete" onClick={commentDelete}>
          x
        </button>
      </div>
    </div>
  );
}
// function CommentListJson(props) {
//   return (
//     <div className="comment">
//       <div className="commentView" key={props.commentList.id}>
//         <span className="commentUserId">sald__ssaed_{props.userId}</span>
//         <span className="commentContent"> {props.commentList}</span>
//         <span className="commentLike" onClick={props.commentLike}>
//           {/* {props.commentLike === false ? (
//             <i class="fa-regular fa-heart" />
//           ) : (
//             <i class="fa-solid fa-heart commentLikeTrue " />
//           )} */}
//         </span>
//         {/* <button className="commentDelete" onClick={commentDelete}>
//           x
//         </button> */}
//       </div>
//     </div>
//   );
// }
export default MainHooKyung;
