import moment from 'moment';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Modal, Col, Row, Container,Table  } from 'react-bootstrap';


const AppointmentDetails = (props) => {

    // const [show, setShow] = useState(false);
    const handleClose = () => props.setShow(false);
    const handleShow = () => props.setShow(true);
    const appointmentList = props.events;
    const { title, id, start, end } = props.events[0] !== undefined ? props.events[0] : "";
    console.log(appointmentList, title, id, start, end, "========appointmentList")

    const deleteEvents=()=>{
        //alert("hi")
        debugger;
        if(props.selectEvents){
           const updatedEvents= appointmentList.filter((evt)=>evt !==props.selectEvents);
           console.log(updatedEvents,"==========updatedEvents")
           props.setEvents(updatedEvents);
          props.setShowApp(false);
           props.setSelectEvents(null);
  
        }
     }

    return (
        <>
            <Modal size="lg" show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Appointment List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container lg={12}>
                        <Row>
                            <Col>
                                {
                                    appointmentList.length <=1 ?
                                        <>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Title</th>
                                                        <th>Start Time</th>
                                                        <th>End Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    Object.keys(appointmentList).map((item, index) => {
                                                        const vall = Object.keys(item);
                                                        return (
                                                            <>
                                                                <tr key={index}>
                                                                     <td>{appointmentList[item].id}</td>
                                                                    <td>{appointmentList[item].title}</td>
                                                                   
                                                                    <td>{`${appointmentList[item].start}`}</td>
                                                                    <td>{`${appointmentList[item].end}`}</td>
                                                                    {/* <td>
                                                                     {
                                                                        appointmentList[item].map((key)=>{
                                                                             const tt=item[key]
                                                                            return (
                                                                                <>
                                                                                {console.log(item[key],"=======item[key")}
                                                                                <span >{key.title}</span>
                                                                                </>
                                                                            )
                                                                        })
                                                                     } </td>                                                                 */}
                                                                    {/* <td>{Object.values[item]}</td> */}
                                                                    {/* <td>{Object.values(item)[3]}</td> */}
                                                                </tr>
                                                            </>
                                                        )
                                                    })
                                                }
                                                   
                                                </tbody>
                                            </Table>

                                            <table>
                                               

                                            </table>
                                        </>
                                        :
                                        <>


                                            <div>
                                                {`${moment(start).format("DD/MM/YYYY")}`}
                                            </div>

                                        </>
                                }
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
<Button variant="secondary" onClick={deleteEvents}>
Delete Appointment
</Button>

</Modal.Footer>
            </Modal>
        </>
    )
}

export default AppointmentDetails;

