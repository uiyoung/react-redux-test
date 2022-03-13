import React from 'react';
import { useDispatch } from 'react-redux';

function Right3() {
  const dispatch = useDispatch();
  const onClick = (type) => {
    dispatch({ type: type });
  };

  const onChangeColorPicker = (e) => {
    console.log(e.target.value);
    dispatch({ type: 'SET_COLOR', color: e.target.value });
  };

  return (
    <div>
      <h4>Right3</h4>
      <label>control </label>
      <button onClick={() => onClick('INCREMENT')}>+</button>
      <button onClick={() => onClick('DECREMENT')}>-</button>
      <br />
      <label>color </label>
      <input type="color" onChange={onChangeColorPicker}></input>
    </div>
  );
}

export default Right3;
