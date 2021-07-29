import { Login } from '../../../constants/types';

const initialState = {
  token: ''
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case Login.LOGIN:
      return {
        ...state,
        token: payload.token
      };
    default:
      return state;
  }
}