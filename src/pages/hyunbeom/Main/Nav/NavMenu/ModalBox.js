import React from 'react';
import Modal from './Modal';
import data from '../../data';

const ModalBox = ({ searchValue }) => {
  const filters = searchValue.length
    ? data.filter(a =>
        a.title.toUpperCase().includes(searchValue.toUpperCase())
      )
    : [];
  return (
    <div className="modal">
      {/* i가 아니라 key가 필요해보입니다 
      map의 매개변수를 사용해야하는데, filters 변수를 쓰고 있습니다. map 사용방법이 어색합니다. 다시 공부해보세요
      */}
      {filters.map((a, i) => {
        return <Modal filters={filters} i={i} />;
      })}
    </div>
  );
};

export default ModalBox;
