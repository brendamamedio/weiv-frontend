import React from 'react';
import './style/button-style.css'

export const Button = ({ textContent }) => {
  return (
    <>
      <button className='button'>{textContent}</button>
    </>
  );
};