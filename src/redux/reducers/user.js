import { LOGIN_USER, LOGOUT_USER, UPDATE_USER } from "../types";

const INITIAL_STATE = {
  user: null,
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATE_USER:
      return { ...state, user: action.payload };
    case LOGOUT_USER:
      return { ...INITIAL_STATE };

    default:
      return state;
  }
};
