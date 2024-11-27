import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogListAction } from "../../redux/actions/blogListActions";
import { Card, Container, Row, Col } from "react-bootstrap";
import '../../App.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { hideLateLoadingAction, showLateLoadingAction } from "../../redux/actions/loadingAction";

const BlogList = () => {
    debugger;
    const blogListData = useSelector((state) => state.blogList.posts)
    const loadingVal = useSelector((state) => state.loadingLate.payload);

    console.log(blogListData,  "====blogListData")
    console.log(loadingVal,  "====loadingVal")
    
    const dispatch = useDispatch();

    useEffect(() => {
       
        if(blogListData ===undefined){
            dispatch(blogListAction());
        }  
       

    }, [])
    return (
        <>
            <div className="mainSection">
                <Container >
                    <Row >
                        {
                            loadingVal ?
                            <div>
                            <Skeleton />
                            <Skeleton count={5} />
                            </div>
                                :
                                <Col lg={12} xl={12} className="my-4">
                                    <Row>
                                        {
                                            blogListData !== undefined ?
                                                <>
                                                    {
                                                        blogListData.map((item, index) => {
                                                            return (
                                                                <>
                                                                    <Col lg={4} >
                                                                        <Card className="my-1">
                                                                            <Card.Body >
                                                                                <Card.Title>{item.title}</Card.Title>
                                                                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                                                                <Card.Text>
                                                                                    {item.body.substring(0, 20)}{'...'}
                                                                                </Card.Text>
                                                                                <Card.Link href="#">Card Link</Card.Link>
                                                                                <Card.Link href="#">Another Link</Card.Link>
                                                                            </Card.Body>
                                                                        </Card>
                                                                    </Col>

                                                                </>
                                                            )
                                                        })
                                                    }

                                                </>

                                                :
                                              null 
                                        }
                                    </Row>
                                </Col>
                               
                        }

                    </Row>
                </Container>

            </div>

        </>
    )
}
export default BlogList;