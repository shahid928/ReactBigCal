import axios from "axios"
import { ActionTypes } from "../constants"
import { hideLateLoadingAction, showLateLoadingAction } from "./loadingAction"

export const blogListAction2=(value)=>{
     return{
        type:ActionTypes.BLOG_LIST,
        payload:value
     }
}

export const blogListAction=(value)=>{
   debugger;
   return async function(dispatch){    
      await axios.get("https://dummyjson.com/posts")
      .then(resp=>{
       dispatch(showLateLoadingAction(true))  
        console.log(resp,"=======res");
    //  dispatch(showLateLoadingAction(true))  
        dispatch(
            {
                type:ActionTypes.BLOG_LIST,
                payload:resp.data
            }
        )
        setTimeout(()=>{
          dispatch(hideLateLoadingAction(false)) 
        },3000)
    
      }).catch(err=>{
        console.log(err.resp);
      })
   }
}