import { useState } from 'react';
import Chat from './Chat/Chat';

//props 자리에서 구조분해할당 할 수 있습니다
function Feeds({ feedLists }) {
  let [red, setRed] = useState('');
  let [chat, setChat] = useState([]);
  let [chatInput, setChatInput] = useState('');
  return (
    <article className="feeds-article" key={feedLists.id}>
      <div className="feeds-user-name">
        <img src={feedLists.pic} />
        <span className="bold">{feedLists.title}</span>
        <i className="fa fa-ellipsis" />
      </div>
      <div className="feeds-pic">
        <img src={feedLists.feedPic} />
      </div>
      <section className="feeds-like">
        <div className="feeds-like__icon">
          <div className="feeds-like__icon-left">
            <i
              onClick={() => {
                red === 'fa-solid' ? setRed('') : setRed('fa-solid');
              }}
              className={`fa-regular fa-lg fa-heart big-heart + ${red}`}
            />
            <i className="fa-regular fa-lg fa-flip-horizontal fa-comment" />
            <i className="fa fa-lg fa-arrow-up-from-bracket" />
          </div>
          <div className="feeds-like__icon-right">
            <i className="fa-regular fa-lg fa-bookmark" />
          </div>
        </div>
        <div className="feeds-like__config">
          <div className="feeds-like__config-pic" />
          <span>
            <span className="bold">{feedLists.firstLikeUser}</span>님
            <span className="bold">외 {feedLists.likeCount}명</span>이
            좋아합니다
          </span>
        </div>
        <div className="feeds-like__chat-screen">
          <div className="feeds-like__chat-mine">
            <span className="bold">{feedLists.title}</span>
            <span>{feedLists.feedContent}</span>
            <span className="gray">더 보기</span>
          </div>
          <div className="feeds-like__chat-friends">
            <div className="feeds-like__chat-friends-left">
              <span className="bold">{feedLists.feedFirstUser}</span>
              <span>{feedLists.feedFirstChat}</span>
            </div>
          </div>
          {chat.map((a, i) => {
            //매개변수이름을 잘 지으면, 변수선언이 불필요해지고, 가독성이 좋아집니다.
            //map 메서드는 key props가 항상 필요합니다. 하지만 2번째 인자인 index로 쓰는것보다, 객체의 id를 활용 해 주세요
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
          //이벤트 함수 코드는 분리 해 주세요
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
  );
}
export default Feeds;
