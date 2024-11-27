import axios from "axios"
import { ActionTypes } from "../constants"

export const userLoginAction=(value)=>{
     console.log(value,"============value")
    return async function(dispatch){
        await axios.post("https://dummyjson.com/auth/login",value)
        .then(resp=>{
            dispatch(
                {
                    type:ActionTypes.SIGN_IN,
                    payload:resp.data
                }
            )
        }).catch(err=>{
            console.log(err.resp);
        })
    }

}

export const logoutAction=()=>{
    return {
        type:ActionTypes.SIGN_IN,
        payload:[]
    }
}