import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import CreateAppointment from './ModalAppointmentCreate';
import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import AppointmentDetails from './AppointmentDetails';

const localizer = momentLocalizer(moment);



const MyEventCalendar = (props) => {
  
   const [show, setShow] = useState(false);   
   const [showApp, setShowApp] = useState(false);   
   const [addEvent,setAddEvent]=useState([]);
   const [events,setEvents]=useState([]);
   const [selectedStartDate,setSelectedStartDate]=useState(null);
   const [eventTitle,setEventTitle]=useState("");
   const [selectEvents, setSelectEvents]=useState(null)

//    -------------------------
    const [startTime,setStartTime]=useState();
    const [stTime,setStTime]=useState("11:30");
    const [endTime,setEndTime]=useState("12:30");
    console.log(moment(startTime).toDate() );
     
    console.log(startTime,"=========startTime")

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   console.log(addEvent,"===========addEvent")
  // console.log(moment(date).set({hour:props.evStartTime.split(":")[0],minute:props.evStartTime.split(":")[1].toDate()}))

   const handleAddEvents=(newEvents)=>{
      setAddEvent([...addEvent,newEvents]);
   }

   const handleSelectedSlot=(slotInfo)=>{
    //setStartTime(moment(slotInfo.start).format("yyyy/dd/mm") );
    setSelectedStartDate(slotInfo.start)
    setShow(true)
    setSelectEvents(null)
   }

   const handleSelectedEvents=(event)=>{
    setShow(true);
    setSelectEvents(event);
    setEventTitle(event.title)
   }

   const handleSelectEvent=(event)=>{
       setShowApp(true);
       setSelectEvents(event);
       setEventTitle(event.title)
       console.log(events,"========events")
       console.log(events.title,"========eventTitle")
   }

   const saveEntry2=()=>{
     if(eventTitle && selectedStartDate){
        const newEvents={
           id:Math.random(),
           title:eventTitle + " "+ "Delhi",          
           start:selectedStartDate,
           //start:moment(startTime).set({hour:stTime.split(":")[0],minute:stTime.split(":")[1]}),
           end:moment(selectedStartDate).add(1,'hour').toDate()
        };
        setEvents([...events, newEvents]);
        setShow(false);
        setEventTitle('');
     }
   }

   const saveEntry=()=>{
    if(eventTitle && selectedStartDate){
        let hourVal=stTime.split(":")[0];
        let mintVal=stTime.split(":")[1]
       const newEvents={
          id:Math.random(),
          title:eventTitle,          
         // start:moment(startTime).set({hour:hourVal,minute:mintVal}).toDate() ,
          start:moment(selectedStartDate).set({hour:hourVal,minute:mintVal}).toDate(),
          //start:moment(startTime).set({hour:stTime.split(":")[0],minute:stTime.split(":")[1]}),
          end:moment(selectedStartDate).add(1,'hour').toDate()
       };
       setEvents([...events, newEvents]);
       setShow(false);
       setEventTitle('');
    }
  }

   
  
  return(
    <>
    <div>
    <Calendar
      localizer={localizer}
      events={events}
      // events={addEvent}
      startAccessor="start"
      endAccessor="end"      
      style={{ height: 500 }}
      selectable={true}
      onSelectSlot={handleSelectedSlot}
      onSelectEvent={handleSelectEvent}
    // onSelectEvent={handleSelectedEvents}
      
     
    />
     {/* <CreateAppointment
       show={show}
       setShow={setShow}       
       setAddEvent={setAddEvent}
       onAddEvents={handleAddEvents}
       /> */}

     <Modal show={show} onHide={handleClose}>
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
                                id='eventTitle'
                                value={eventTitle}
                                autoFocus
                                onChange={(e) =>setEventTitle(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Tilte</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Please fill date"
                                id='date'
                                value={startTime}
                                autoFocus
                                onChange={(e) =>setStartTime(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Time</Form.Label>
                            <Form.Control
                                type="time"
                                placeholder="Please fill date"
                                id='date'
                                value={stTime}
                                autoFocus
                                onChange={(e) =>setStTime(e.target.value)}
                            />
                        </Form.Group>
                        {/* <Form.Group
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
                        </Form.Group> */}


                    </Form>
                    <button type='submit' onClick={saveEntry} className='primary'>Submit</button>
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

            <AppointmentDetails 
             show={showApp}
             setShow={setShowApp}
             events={events}
             setEvents={setEvents}
             eventTitle={eventTitle}
             selectEvents={selectEvents}
             setSelectEvents={setSelectEvents}
             showApp={showApp}
             setShowApp={setShowApp}
            />

  </div>
    </>
  )
  
}
export default MyEventCalendar;