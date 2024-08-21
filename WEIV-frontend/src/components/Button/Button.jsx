import React from 'react';
import './button-style.css';

export const Button = ({ textContent, className }) => {
  return (
    <button className={className}>
      {textContent}
    </button>
  );
};
