import { ActionTypes } from "../constants";

export const userLoginReducer=(state=[],{type,payload})=>{
   switch(type){
    case ActionTypes.SIGN_IN:
        return state=payload

    case ActionTypes.SIGN_OUT:
        return state=[]

        default:
            return state;
   }
}