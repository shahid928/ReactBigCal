import React,{ createContext, useState } from "react";
import ChildContext from "./ChildContext";


export const GlobalInfo=createContext();
const ContextDemo=()=>{
   
     const [color, setColor]=useState("green");

    return(
        <>
        <GlobalInfo.Provider value={{appColor:color}}  >
            <ChildContext />
        <h1> Root Content</h1>
        </GlobalInfo.Provider>
       
        </>
    )
}

export default ContextDemo;