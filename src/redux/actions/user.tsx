import { LOGIN_ATTEMPT, LOGIN_SUCCESS , LOGOUT 
   ,REGISTER_SUCCESS , REGISTER_ATTEMPT  } from "../types";
import {baseURl} from '../../utils/constance'
import axios from 'axios';


export const loginuser = (username:String, password:String) => {
  return async (dispatch:any) => {
    dispatch({type: LOGIN_ATTEMPT});
    //call the backend
    try {
      const resp = await axios.post(`${baseURl}auth/login`, {
        username,
        password,
      });
      if (resp.data) {
        dispatch({
          type: LOGIN_SUCCESS,
          user: resp.data,
        });
        console.log(resp);
      }
    } catch (err) {
      console.log(err.response.data.message);
      dispatch({type: LOGIN_SUCCESS, error : err.response.data.message , });
    }
  };
};

export const logoutuser = () => {
  return  (dispatch:any) => {
  dispatch({
    type: LOGOUT, user : null
  });
}
}

export const registeruser = (username : String , password:String) => {
  return async (dispatch:any) => {
    dispatch({type: REGISTER_ATTEMPT});
    //call the backend
    try {
      const resp = await axios.post(`${baseURl}auth/signup`, {
        username,
        password,
      });
      if (resp.data) {
        dispatch({
          type: REGISTER_SUCCESS,
          register: resp.data,
        });
        console.log(resp);
      }
    } catch (err) {
      console.log(err.response.data.message);
      dispatch({type: REGISTER_SUCCESS, error : err.response.data.message , });
    }
  };
};
