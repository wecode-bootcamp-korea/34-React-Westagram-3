import React, { createElement, useState, useEffect } from 'react';
import SearchProfile from './SearchProfile';
import './main.scss';

const IMGS = [
  {
    id: 1,
    src: 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png',
    alt: 'compass',
    className: 'logo_header',
  },
  {
    id: 2,
    src: 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png',
    alt: 'like',
    className: 'logo_header',
  },
  {
    id: 3,
    src: 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png',
    alt: 'friends',
    className: 'logo_header',
  },
];

//복잡한 코드여서 날잡고 리팩토링 해보시는걸 추천드립니다..
const Main = () => {
  const [comment, setComment] = useState('');
  //어떤 array인지 명확하면 좋겠습니다.
  const [array, setArray] = useState([]);
  const [modal, setModal] = useState(false);
  //   const [searchValue, setSearchValue] = useState([]);
  //개발에서 다루는 모든 정보는 data이고 value입니다.
  //제3자가 코드를 봤을 때 어떤 데이터가 들어있을지 변수만 보고 알 수 있도록 이름 짓는것도 좋은 코드를 만드는 방법입니다.
  const [dataList, setDataList] = useState([]);
  const [id, setId] = useState(10);

  // const searchMatch = e => {
  //   console.log(e.target.value);
  //   data.map((dataElement, index) => {
  //       setSearchValue(dataElement.profileImg, ),
  //       let userName = dataElement.userName,
  //       let status = dataElement.userName
  //   });
  // };

  useEffect(() => {
    fetch(`/data/datalist.json`)
      .then(res => res.json())
      .then(res => {
        setDataList(res);
      });
  }, []);

  //서치바를 누르면 modal이 나오게 하는 함수인데, className으로 보이고 안보이고 조정 하는것으로 생각됩니다.
  //이것도 삼항연산자로 true 일때 모달 UI 가 보이고, false일때 안보이게 UI 부분에서 직접 코딩 해 주시고
  // 이 함수는 서치바를 클릭했을 때 true false만 바꿔주는 setState만 있으면 됩니다.
  // const onClickSearch = () => {
  //   {
  //     modal === 'open' ? setModal('close') : setModal('open');
  //   }
  // };

  const toggleSearchBar = () => {
    setModal(!modal);
  };

  const getComment = event => {
    event.preventDefault();
    setComment(event.target.value);
  };

  const makeComment = event => {
    event.preventDefault();
    setArray([...array, comment]);
    setComment('');
  };

  const summit = e => {
    e.preventDefault();
    //함수형 업데이트는 이전의 값을 참조해서 업데이트할 때 필요한 업데이트 방식입니다.
    //무조건 함수형 업데이트를 해야 하는건 아닙니다. 목적에 맞게 선택해서 업데이트 해주시면 되겠습니다.
    setDataList([...dataList, { comment, id }]);
    //reset() 보단, input의 value를 초기화 해주는 setState를 사용하는게 올바른 방법이겠습니다.
    // e.target.reset();
    setId(id + 1);
  };

  //이 함수도 true false 만 바꿔주고, src의 주소만 삼항연산자로 갈아껴지게 하면 되겠습니다.
  const clickLike = e => {
    if (e.target.src === 'https://ifh.cc/g/L7KsFY.png') {
      e.target.src = 'https://ifh.cc/g/b41PGW.png';
    } else {
      e.target.src = 'https://ifh.cc/g/L7KsFY.png';
    }
  };

  //element를 직접 지우는것보다, comment가 저장되 있는 배열에서 filter메서드를 이용해 배열에서 빼고, 새로운 배열을 랜더링하는, 그리고 불변성을 지키는게 리액트적인 사고 방식으로 개발하는 방법입니다.
  const deleteComment = e => {
    e.target.parentNode.parentNode.remove();
  };

  return (
    <>
      <header className="header">
        <div className="header_instagram">
          <img
            src="https://ifh.cc/g/VRQJfZ.png"
            alt="logo"
            className="logo_instagram"
          />
          <span className="title">Westagram</span>
        </div>
        <input
          type="text"
          className="header_input"
          placeholder="&#128269; 검 색 "
          onClick={toggleSearchBar}
          //   onChange={searchMatch}
        />
        {/* // &&, || 단축평가 연산자를 찾아보세요! */}
        {modal && <SearchProfile />}
        <div className="header_logos">
          {IMGS.map(imgData => {
            return (
              <img
                key={imgData.id}
                src={imgData.src}
                alt={imgData.alt}
                className={imgData.className}
              />
            );
          })}
        </div>
      </header>
      <section className="section">
        <div className="left_div">
          {/* map의 매개변수 자리는 어떤 데이터가 들어오는지 유추하기 쉬운 매개변수로 적어주세요. a는 어떤 데이터가 들어올지 예상하기 정말 어렵습니다. */}
          {dataList.map((a, i) => (
            <FeedAdd
              key={i}
              profileName={a.userName}
              profileImage={a.profileImg}
              commentValue={a.commentValue}
              feedImg={a.feedImg}
              array={array}
              comment={comment}
              makeComment={makeComment}
              getComment={getComment}
              summit={summit}
              deleteComment={deleteComment}
              clickLike={clickLike}
            />
          ))}
          {/* 주석은 남겨놓지 않는것이 좋습니다. 
          코드만 봐도 어떤 코드인지 알 수 있는 코드가 좋은 코드 입니다.
          피치못하게 주석을 사용해야 한다면, TODO,FIXME를 활용 해 주세요 */}
          {/* TODO:나중에 지울 코드 
          
          이렇게요
          */}
          {/* <article>
            <div className="profile_head">
              <div className="profile_collect">
                <img
                  src="https://cdne-totv8-prod.azureedge.net/media/40824/firstteam_heungminson_2021_22.png?anchor=center&mode=crop&quality=100&width=500"
                  alt="profile"
                  className="profile_normal"
                />
                <div className="profile_text">
                  <p className="profile_name">_yum_s</p>
                </div>
              </div>
              <div className="logo_feed_right">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/512/512142.png"
                  alt="logo_more"
                  className="logo_feed"
                />
              </div>
            </div>
            <div className="img_box">
              <img
                src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="feed"
                className="feed_image"
              />
            </div>
            <div className="feed_bar">
              <div className="logo_feed_left">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/833/833472.png"
                  alt="like"
                  className="logo_feed"
                />
                <img
                  src="https://ifh.cc/g/Z7NpAO.png"
                  alt="comment"
                  className="logo_feed"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3580/3580382.png"
                  alt="share"
                  className="logo_feed"
                />
              </div>
              <div className="logo_feed_right">
                <img
                  src="https://ifh.cc/g/M7Hcft.png"
                  alt="tag"
                  className="logo_feed"
                />
              </div>
            </div>
            <div className="profile_like">
              <img
                src="https://cdne-totv8-prod.azureedge.net/media/40824/firstteam_heungminson_2021_22.png?anchor=center&mode=crop&quality=100&width=500"
                alt="profile"
                className="profile_small"
              />
              <div className="profile_text">
                <p className="profile_name">_yum_s</p>
              </div>
              <span>님 외 10명이 좋아합니다.</span>
            </div>
            <div className="comments">
              <div className="comment_example">
                <span className="profile_name">canon mj</span>
                <span>여기는 뉴 화이트 하트 레인!!</span>
                <a href="" className="profile_desc">
                  더 보기
                </a>
              </div>
              {array.map((comment, index) => (
                <CommentAdd
                  comment={comment}
                  num={index}
                  clickLike={clickLike}
                  deleteComment={deleteComment}
                />
              ))}
            </div>

            <span className="comment_personal profile_desc">42분 전</span>

            <form className="input_comment" onSubmit={summit}>
              <input
                type="text"
                placeholder="댓글 달기..."
                className="comment_box"
                onChange={getComment}
              />
              <button className="upload_btn">게시</button>
            </form>
          </article> */}
        </div>

        <div className="right_div">
          <div className="profile_collect">
            <img
              src="https://image.rocketpunch.com/company/99609/wecode_logo_1590553949.jpg?s=400x400&t=inside"
              alt="profile"
              className="profile_activate"
            />
            <div className="profile_text">
              <p className="profile_name">wecode_bootcamp</p>
              <p className="profile_desc">WeCode | 위코드</p>
            </div>
          </div>
          <div className="right_first_box">
            <div className="box_title">
              <span className="profile_desc">스토리</span>
              <span className="profile_name">모두 보기</span>
            </div>
            {/* profile_collect 라는 div 덩어리가 여러번 반복되고 있습니다. 반복되는 ui는 map 으로 구현 해 보세요. */}
            <div className="profile_collect">
              <img
                src="https://cdne-totv8-prod.azureedge.net/media/40824/firstteam_heungminson_2021_22.png?anchor=center&mode=crop&quality=100&width=500"
                alt="profile"
                className="profile_activate"
              />
              <div className="profile_text">
                <p className="profile_name">_yum_s</p>
                <p className="profile_desc">16분 전</p>
              </div>
            </div>
            <div className="profile_collect">
              <img
                src="https://cdne-totv8-prod.azureedge.net/media/40873/firstteam_harrykane_2021_22.png?anchor=center&mode=crop&quality=100&width=500"
                alt="profile"
                className="profile_activate"
              />
              <div className="profile_text">
                <p className="profile_name">drink_eat_drink</p>
                <p className="profile_desc">3시간 전</p>
              </div>
            </div>
            <div className="profile_collect">
              <img
                src="https://cdne-totv8-prod.azureedge.net/media/40818/firstteam_cristianromero_2021_22.png?anchor=center&mode=crop&quality=100&width=500"
                alt="profile"
                className="profile_activate"
              />
              <div className="profile_text">
                <p className="profile_name">hyukyc</p>
                <p className="profile_desc">20시간 전</p>
              </div>
            </div>
            <div className="profile_collect">
              <img
                src="https://cdne-totv8-prod.azureedge.net/media/40821/firstteam_ericdier_2021_22.png?anchor=center&mode=crop&quality=100&width=500"
                alt="profile"
                className="profile_activate"
              />
              <div className="profile_text">
                <p className="profile_name">jminkeek</p>
                <p className="profile_desc">2일 전</p>
              </div>
            </div>
          </div>
          <div className="right_second_box">
            <div className="box_title">
              <span className="profile_desc">회원님을 위한 추천</span>
              <span className="profile_name">모두 보기</span>
            </div>
            <div className="follow_line">
              <div className="profile_collect">
                <img
                  src="https://cdne-totv8-prod.azureedge.net/media/45652/dejan-kulusevski-head-min.png?anchor=center&mode=crop&quality=100&width=750"
                  alt="profile"
                  className="profile_normal"
                />
                <div className="profile_text">
                  <p className="profile_name">joaaaaaahey</p>
                  <p className="profile_desc">_legend_a님 외 2명이 ...</p>
                </div>
              </div>
              <span className="follow_btn">팔로우</span>
            </div>
            <div className="follow_line">
              <div className="profile_collect">
                <img
                  src="https://cdne-totv8-prod.azureedge.net/media/40828/firstteam_lucasmoura_2021_22.png?anchor=center&mode=crop&quality=100&width=500"
                  alt="profile"
                  className="profile_normal"
                />
                <div className="profile_text">
                  <p className="profile_name">rampart81</p>
                  <p className="profile_desc">ringo.in.seoul님 외 12...</p>
                </div>
              </div>
              <span className="follow_btn">팔로우</span>
            </div>
            <div className="follow_line">
              <div className="profile_collect">
                <img
                  src="https://cdne-totv8-prod.azureedge.net/media/40831/firstteam_oliverskipp_2021_22.png?anchor=center&mode=crop&quality=100&width=500"
                  alt="profile"
                  className="profile_normal"
                />
                <div className="profile_text">
                  <p className="profile_name">shawnjjoo</p>
                  <p className="profile_desc">jimmylee1220님 외 1...</p>
                </div>
              </div>
              <span className="follow_btn">팔로우</span>
            </div>
          </div>
          <p className="p_tag">
            Instagram 정보 · 지우너홍보 센터 · API · 채용 정보개인정보처리방침 ·
            약관 · 디렉터리 · 프로필 · 해시태그 · 언어
          </p>
          <p className="p_tag">ⓒ 2019 INSTAGRAM</p>
        </div>
      </section>
    </>
  );
};

//컴포넌트는 파일 단위로 나눠 주세요.
const CommentAdd = ({ num, comment, deleteComment, clickLike }) => {
  return (
    <div className="comment_personal" id={num} key={num}>
      {/* //key는 map에서 반환하는 element에 부여해 줍니다. */}
      <div key={num}>
        <span className="profile_name_comment">iamaboyyouarea</span>
        <span>{comment}</span>
        <span className="del_comment" onClick={deleteComment}>
          X
        </span>
      </div>
      <img
        src="https://ifh.cc/g/b41PGW.png"
        alt="like"
        className="comment_size"
        onClick={clickLike}
      />
    </div>
  );
};

const FeedAdd = ({
  profileName,
  profileImage,
  commentValue,
  feedImg,
  array,
  comment,
  getComment,
  summit,
  deleteComment,
  clickLike,
  makeComment,
}) => {
  return (
    <div className="article_div">
      <article className="article">
        <div className="profile_head">
          <div className="profile_collect">
            <img src={profileImage} alt="profile" className="profile_normal" />
            <div className="profile_text">
              <p className="profile_name">{profileName}</p>
            </div>
          </div>
          <div className="logo_feed_right">
            <img
              src="https://cdn-icons-png.flaticon.com/128/512/512142.png"
              alt="logo_more"
              className="logo_feed"
            />
          </div>
        </div>
        <div className="img_box">
          <img src={feedImg} alt="feed" className="feed_image" />
        </div>
        <div className="feed_bar">
          <div className="logo_feed_left">
            <img
              src="https://cdn-icons-png.flaticon.com/128/833/833472.png"
              alt="like"
              className="logo_feed"
            />
            <img
              src="https://ifh.cc/g/Z7NpAO.png"
              alt="comment"
              className="logo_feed"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/3580/3580382.png"
              alt="share"
              className="logo_feed"
            />
          </div>
          <div className="logo_feed_right">
            <img
              src="https://ifh.cc/g/M7Hcft.png"
              alt="tag"
              className="logo_feed"
            />
          </div>
        </div>
        <div className="profile_like">
          <img
            src="https://cdne-totv8-prod.azureedge.net/media/40824/firstteam_heungminson_2021_22.png?anchor=center&mode=crop&quality=100&width=500"
            alt="profile"
            className="profile_small"
          />
          <div className="profile_text">
            <p className="profile_name">{profileName}</p>
          </div>
          <span>님 외 100명이 좋아합니다.</span>
        </div>
        <div className="comments">
          <div className="comment_example">
            <span className="profile_name">canon mj</span>
            <span>여기는 뉴 화이트 하트 레인!!</span>
            <a href="" className="profile_desc">
              더 보기
            </a>
          </div>
          {array.map((comment, index) => {
            return (
              <CommentAdd
                comment={comment}
                key={index}
                // clickLike={clickLike}
                // deleteComment={deleteComment}
              />
            );
          })}
        </div>

        <span className="comment_personal profile_desc">42분 전</span>

        <form className="input_comment" onSubmit={makeComment}>
          <input
            type="text"
            placeholder="댓글 달기..."
            className="comment_box"
            value={comment || ''}
            onChange={getComment}
          />
          <button className="upload_btn">게시</button>
        </form>
      </article>
    </div>
  );
};

export default Main;
