import {LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS , REGISTER_ATTEMPT } from '../types';

const INITIAL_STATE = {user: null, loading: false, error: null};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return {...INITIAL_STATE, loading: true};
    case LOGIN_SUCCESS:
      return {
        ...INITIAL_STATE,
        loading: false,
        user: action.user,
        error: action.error,
      };
    case REGISTER_ATTEMPT:
      return {...INITIAL_STATE, loading: true};

    case REGISTER_SUCCESS:
      return {
        user: action.register,
        loading: false ,
        error : null
      };

    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };

    default:
      return state;
  }
};
