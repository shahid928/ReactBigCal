import { ActionTypes } from "../constants";

export const lateLoadingReducer=(state=false,{ type, payload})=>{
      
    switch(type){
        case ActionTypes.LOADING_SHOW:
            return{
                    // ...state,
                    payload:true
            }  
               
                //payload:false

            
        case ActionTypes.LOADING_HIDE:
            return{
                // ...state,
                payload:false
        }  
            // return state=false;
            
                // payload:true
            
            default:
                return state;
       

        
    }
      
}