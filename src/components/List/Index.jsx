import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogListAction } from "../../redux/actions/blogListActions";
import { Container, Table, Row, Col } from "react-bootstrap";

const ListDetails = () => {
    const blogListData = useSelector((state) => state.blogList.posts)
    //const loadingVal = useSelector((state) => state.loadingLate.payload);

    console.log(blogListData, "====blogListData")
    const[select,setSelect]=useState([]);
    //console.log(loadingVal, "====loadingVal")

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(blogListAction());
    }, [])
    
    const handleCheck=(e,index)=>{
           console.log(e.target.value,"===========checkVal")
           const val=e.target.value;
           const chval=document.getElementById(index).checked;
           if(chval){
             setSelect(objVal=>[...objVal,e.target.value])
           }
          

    }
    console.log(select,"========val")

    return (
        <>
            <div>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Id</th>
                                        <th>Title</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        blogListData?.map((item, index) => {
                                            return (
                                                <>
                                                    <tr key={index}>
                                                        <td>
                                                            <input type="checkbox" id={item.id} value={item.id} onChange={(e)=>handleCheck(e,item.id)} />
                                                        </td>
                                                        <td>{item.id}</td>
                                                        <td>{item.title}</td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                    <tr>

                                    </tr>

                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>


            </div>
        </>
    )
}
export default ListDetails;