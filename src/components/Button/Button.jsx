import React from 'react';

import "./Button.css";

const Button = ({btnName, handleClick}) => {
  return (
    <div className='box'>
      <button className='button' onClick={()=>handleClick()}>
        {btnName}
      </button>
    </div>
  );
};

export default Button;