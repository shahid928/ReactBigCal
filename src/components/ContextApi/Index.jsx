import React, { createContext, useContext } from "react";

const BioContext=createContext();

const BioProvider=()=>{
    const myName="Shahid Akhter"
    return(
        <>
        <BioContext.Provider value={myName}>

        </BioContext.Provider>
        
        </>
    )
}
export default BioProvider;