/* action 객체를 만드는 액션 생성자(action creators)들을 선언한다.*/

import { INCREMENT, DECREMENT, SET_COLOR } from './types';

export const increment = () => ({ type: INCREMENT });

export const decrement = () => ({ type: DECREMENT });

export const setColor = (color) => ({ type: SET_COLOR, color: color });
