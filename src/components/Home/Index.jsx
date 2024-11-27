import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogListAction } from "../../redux/actions/blogListActions";

const HomePage=()=>{
    // const blogListData=useSelector((state)=>state.blogList.posts)
    // console.log(blogListData,"====blogListData")
    // const dispatch=useDispatch();

    // useEffect(()=>{
    //        dispatch(blogListAction());
    // },[])
    return(
        <>
         {/* <h1> Home Page</h1> */}
        </>
    )
}
export default HomePage;