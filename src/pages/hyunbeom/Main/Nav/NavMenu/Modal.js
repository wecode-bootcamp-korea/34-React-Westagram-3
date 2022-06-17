import React from 'react';
import User from './User';

const Modal = ({ filters, i }) => {
  return (
    <div key={i} className="main-right-user">
      <User userInfo={filters[i]} />
    </div>
  );
};

export default Modal;
