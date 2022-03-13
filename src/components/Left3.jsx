import React from 'react';
import { useSelector } from 'react-redux';

function Left3() {
  const number = useSelector((state) => state.number);
  const color = useSelector((state) => state.color);

  return (
    <div>
      <h4>Left3</h4>
      <span style={{ color: color }}>number : {number}</span>
    </div>
  );
}

export default Left3;
