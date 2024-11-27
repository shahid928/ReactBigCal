import { ActionTypes } from "../constants";

export const blogListReducer=(state=[],{type,payload})=>{
   
    switch(type){
        case ActionTypes.BLOG_LIST:
            return state=payload

        default:
            return state;
    }
}