import { CONTACTS_ATTEMPT , CONTACTS_SUCCESS } from "../types";

const INITIAL_STATE = {contact: null, loading: false};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONTACTS_ATTEMPT:
      return {...state, loading: true};
    case  CONTACTS_SUCCESS:
      return {
        ...INITIAL_STATE,
        loading: false,
        contact: action.contact,
      };

      
    default:
      return state;
  }
};
