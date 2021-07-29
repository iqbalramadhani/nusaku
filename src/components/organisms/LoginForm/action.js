import axios from 'axios'
import { Login, RequestResult } from '../../../constants/types'
import { BaseUrl } from '../../../constants/value'


export const login = (user, callback) => async (dispatch)=> {
  try {
    console.log("ON ACTION")
    const res = await axios.post(`${BaseUrl.ACCOUNT}/auth/login`, {
        user
    });

    dispatch({
        type: Login.LOGIN,
        payload: res.data
    })
    callback();
   
   } catch(err){
       dispatch({
           type: RequestResult.ERROR,
           payload: err
       })
   }
}
