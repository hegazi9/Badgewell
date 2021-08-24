import { CONTACTS_SUCCESS , CONTACTS_ERROR , CONTACTS_ATTEMPT} from "../types";
import API from '../../utils/interceptor';

let result: any[];

export const getcontacts = (page: number) => {
  return async (dispatch:any) => {
    dispatch({type: CONTACTS_ATTEMPT});
    //call the backend
    try {
      const resp = await API.get(`contacts?page=${page}&limit=10`);
      if (resp.data) {
        if(page == 1 )result = resp.data.docs 
        else result = [...result , ...resp.data.docs ]
        dispatch({
          type: CONTACTS_SUCCESS,
          contact: result ,
        });
        
        console.log( "api response -----> "  , resp.data.docs);
        console.log( "api result -----> "  , result);

      }
    } catch (err) {
      console.log(err.response.data.message);
      dispatch({type: CONTACTS_ERROR, error : err.response.data.message , });
    }
  };
};
