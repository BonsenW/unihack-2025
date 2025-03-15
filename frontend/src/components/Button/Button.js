import React from 'react';

function Button({ text, onClick, type = "primary" }) {
  return (
    <button className={`btn btn-${type} w-100`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
