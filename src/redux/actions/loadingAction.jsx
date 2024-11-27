import { ActionTypes } from "../constants"

export const showLateLoadingAction=(value)=>{   
    return {
          type:ActionTypes.LOADING_SHOW,
          payload:value
        
    }
}

export const hideLateLoadingAction=(value)=>{
  
    return {
          type:ActionTypes.LOADING_HIDE,
          payload:value
          
    }
}