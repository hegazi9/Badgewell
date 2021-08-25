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
          nextPage : resp.data.hasNextPage
        });
      console.log(result);
      console.log(resp.data.hasNextPage);

      
      }
    } catch (err) {
      dispatch({type: CONTACTS_ERROR, error : err.response.data.message , });
    }
  };
};
