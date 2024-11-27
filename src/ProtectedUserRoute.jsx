import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedUserRoute=()=>{
    debugger;
    let auth=localStorage.getItem("token");
    if(auth !==undefined && auth?.length >0){
       return <Outlet />
    }
    else{
        <Navigate to="/login" />
    }
}
export default ProtectedUserRoute;