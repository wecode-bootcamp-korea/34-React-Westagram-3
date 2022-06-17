import React from 'react';

const MenuBox = () => {
  return (
    <div className="menuBox">
      {/* 아래에있는 반복된 UI는 map으로 구현할 수 있습니다. 
      && 은 단축평가 연산자 입니다. 단축평가에 대해서 찾아 보세요
      */}
      {MENU_BOX.map(menuBoxData => {
        return (
          <div className={menuBoxData.divClassName} key={menuBoxData.id}>
            {menuBoxData.iconClassName && (
              <i class={menuBoxData.iconClassName} />
            )}
            <span>{menuBoxData.content}</span>
          </div>
        );
      })}
      {/* <div className="menuBoxIcon">
        <i class="fa-regular fa-circle-user" />
        <span>프로필</span>
      </div>
      <div className="menuBoxIcon">
        <i className="fa-regular fa-bookmark" />
        <span>저장됨</span>
      </div>
      <div className="menuBoxIcon">
        <i class="fa fa-gear" />
        <span>설정</span>
      </div>
      <div className="menuBoxIcon">
        <i class="fa fa-arrow-rotate-right" />
        <span>계정전환</span>
      </div>
      <div className="menuBoxLogout">
        <span>로그아웃</span>
      </div> */}
    </div>
  );
};

export default MenuBox;

const MENU_BOX = [
  {
    id: 1,
    divClassName: 'menuBoxIcon',
    iconClassName: 'fa-regular fa-circle-user',
    content: '프로필',
  },
  {
    id: 2,
    divClassName: 'menuBoxIcon',
    iconClassName: 'fa-regular fa-bookmark',
    content: '저장됨',
  },
  {
    id: 3,
    divClassName: 'menuBoxIcon',
    iconClassName: 'fa fa-gear',
    content: '설정',
  },
  {
    id: 4,
    divClassName: 'menuBoxIcon',
    iconClassName: 'fa fa-arrow-rotate-right',
    content: '계정전환',
  },
  {
    id: 5,
    divClassName: 'menuBoxLogout',
    content: '로그아웃',
  },
];
