import React,{useContext} from "react";
import { GlobalInfo } from "./Index";
const ChildContext=()=>{
    
     const {appColor}=useContext(GlobalInfo);
     console.log(appColor,"=======appColor")
    return(
        <>
         <h1 style={{color:appColor}}> Child Content</h1>
        </>
    )
}

export default ChildContext;