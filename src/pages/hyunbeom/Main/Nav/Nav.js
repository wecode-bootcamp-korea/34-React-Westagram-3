import React, { useState } from 'react';
import ModalBox from './NavMenu/ModalBox';
import MenuBox from './NavMenu/MenuBox';

//props자리에서 구조분해할당 했습니다.
const Nav = ({ modalBox, menuBox, setModalBox, setMenuBox }) => {
  let [searchValue, setSearchValue] = useState('');
  // let [modalBox, setModalBox] = useState(false);
  //여기도 마찬가지로 data는 state로 넣지않아도 됩니다. 그래서 이 state는 불필요 합니다.
  // let [userInfo, setUserInfo] = useState(data);

  //이 함수가 기능인지 이름이 명확하면 더 좋겠습니다. 댓글을 삭제 하는 기능이면 removeComment 같이 기능을 생각해서 동사형으로 이름 지어주세요

  return (
    <nav className="nav-bar">
      <div className="nav-bar__left">
        <i className="fa-brands fa-lg fa-instagram" />

        <span className="logo">westagram</span>
      </div>
      <div className="nav-bar__search">
        <input
          onClick={() => {
            //클릭하면 항상 켜져있습니다. 끄는방법은 다른 메뉴를 눌러야만 꺼지는데, 이렇게 되면 불편해보입니다. 쉽게 토글로 구현할 수 있습니다
            //컨트롤 해야할 state의 상태만 변경 해 주면 끄고 킬 수 있습니다.
            setModalBox(!modalBox);
            // setMenuBox(false);
          }}
          onChange={event => {
            setSearchValue(event.target.value);
          }}
          type="text"
          placeholder="검색"
        />
        <i className="fa-solid fa-magnifying-glass" />
        {modalBox ? <ModalBox searchValue={searchValue} /> : null}
      </div>

      <div className="nav-bar__right">
        <i className="fa-regular fa-lg fa-compass" />
        <i className="fa-regular fa-lg fa-heart" />
        <i
          className="fa-regular fa-lg fa-user"
          onClick={() => {
            setMenuBox(!menuBox);
            // setModalBox(false);
          }}
        />
        {menuBox ? <MenuBox /> : null}
        <span className="dot" />
      </div>
    </nav>
  );
};

export default Nav;
