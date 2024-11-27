import moment from 'moment';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function CreateAppointment(props) {
    const [show, setShow] = useState(false);

    const [title, setTitle] = useState("");
    const [evDate, setEvDate] = useState("");
    const [evStartTime, setEvStarTime] = useState("");
    const [evEndTime, setEvEndTime] = useState("");

    const handleClose = () => props.setShow(false);
    const handleShow = () => props.setShow(true);

    const eventHandler = () => {
         const finalValue={
            id:Math.random(),
            title:title,
            date:"11/26/2024",  //evDate,
            start:evStartTime,
            end:evEndTime
           // startTime: moment(props.date).set({hour:props.evStartTime.split(":")[0],minute:props.evStartTime.split(":")[1].toDate()}),
           // endTime: moment(props.date).set({hour:props.evEndTime.split(":")[0],minute:props.evEndTime.split(":")[1].toDate()})
         }
        props.onAddEvents(finalValue);
        props.setShow(false);
         console.log(finalValue,"=========finalValue")

    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Tilte</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Please fill the events"
                                autoFocus
                                onChange={(e) =>setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="starDate"
                        >
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Please fill the events"
                                autoFocus
                                onChange={(e) =>setEvDate(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="starDate"
                        >
                            <Form.Label>Start Time</Form.Label>
                            <Form.Control
                                type="time"
                                placeholder="Please fill the events"
                                autoFocus
                                onChange={(e) => setEvStarTime(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="starDate"
                        >
                            <Form.Label>End Time</Form.Label>
                            <Form.Control
                                type="time"
                                placeholder="Please fill the events"
                                autoFocus
                                onChange={(e) =>setEvEndTime(e.target.value)}
                            />
                        </Form.Group>


                    </Form>
                    <button type='submit' onClick={eventHandler} className='primary'>Submit</button>
                </Modal.Body>
                {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default CreateAppointment;