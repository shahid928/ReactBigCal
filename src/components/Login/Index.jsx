import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
const Login = () => {

    const authDetails = useSelector((state) => state.authUser);
    console.log(authDetails, "=======authDetails")
     const checkLoginStorage=localStorage.getItem("token");

    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmitHandle = (e) => {
        const finalValue = {
            username: userEmail,
            password: password,
            expiresInMins: 30
        }
        dispatch(userLoginAction(finalValue))
        console.log(finalValue, "=======finalValue")
    }

    useEffect(() => {  
        debugger;
        if(checkLoginStorage ==null && authDetails ===undefined ){
            navigate("/login")
        }else{
            if (authDetails !== undefined) {
                if (authDetails.accessToken) {
                    localStorage.setItem("token", authDetails.accessToken);
                    navigate("/bloglist")
                }
                // else{
                //     navigate("/login")
                // }
            }
        }
       
    },[authDetails])


    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg={6}>
                        <Card className="my-4">
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" onChange={(e) => setUserEmail(e.target.value)} placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                    </Form.Group>

                                    <Button variant="success" onClick={onSubmitHandle} >Login</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </>
    )
}
export default Login;