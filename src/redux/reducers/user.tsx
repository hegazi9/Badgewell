import {LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS , REGISTER_ATTEMPT } from '../types';

const INITIAL_STATE = {user: null, register : null , loading: false, error: null , errorregister : null };
export default (state = INITIAL_STATE, action:any) => {
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
        register: action.register,
        loading: false ,
        errorregister: action.errorregister,
      };

    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };

    default:
      return state;
  }
};
