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

const Main = () => {
  const [comment, setComment] = useState('');
  const [array, setArray] = useState([]);
  const [modal, setModal] = useState('close');

  //   const [searchValue, setSearchValue] = useState([]);
  const [dataList, setDataList] = useState([]);

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

  const onClickSearch = () => {
    {
      modal === 'open' ? setModal('close') : setModal('open');
    }
  };
  //리뷰 해서 올려드리기~
  const getComment = event => {
    event.preventDefault();
    setComment(event.target.value);
  };

  const summit = e => {
    e.preventDefault();
    setArray(enters => [...enters, comment]);
    e.target.reset();
  };

  const clickLike = e => {
    if (e.target.src === 'https://ifh.cc/g/L7KsFY.png') {
      e.target.src = 'https://ifh.cc/g/b41PGW.png';
    } else {
      e.target.src = 'https://ifh.cc/g/L7KsFY.png';
    }
  };

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
          onClick={onClickSearch}
          //   onChange={searchMatch}
        />
        <SearchProfile modal={modal} />
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
          {dataList.map((a, i) => (
            <FeedAdd
              key={i}
              profileName={a.userName}
              profileImage={a.profileImg}
              commentValue={a.commentValue}
              feedImg={a.feedImg}
              getComment={getComment}
              summit={summit}
              deleteComment={deleteComment}
              clickLike={clickLike}
              array={array}
            />
          ))}
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

const CommentAdd = ({ num, comment, deleteComment, clickLike }) => {
  return (
    <div className="comment_personal" id={num} key={num}>
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

const FeedAdd = props => {
  return (
    <div className="article_div">
      <article className="article">
        <div className="profile_head">
          <div className="profile_collect">
            <img
              src={props.profileImage}
              alt="profile"
              className="profile_normal"
            />
            <div className="profile_text">
              <p className="profile_name">{props.profileName}</p>
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
          <img src={props.feedImg} alt="feed" className="feed_image" />
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
            <p className="profile_name">{props.profileName}</p>
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
          {props.array.map((comment, index) => (
            <CommentAdd
              comment={comment}
              key={index}
              clickLike={props.clickLike}
              deleteComment={props.deleteComment}
            />
          ))}
        </div>

        <span className="comment_personal profile_desc">42분 전</span>

        <form className="input_comment" onSubmit={props.summit}>
          <input
            type="text"
            placeholder="댓글 달기..."
            className="comment_box"
            onChange={props.getComment}
          />
          <button className="upload_btn">게시</button>
        </form>
      </article>
    </div>
  );
};

export default Main;
