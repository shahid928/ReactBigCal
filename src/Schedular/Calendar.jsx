import { Calendar as BigCalendar,CalendarProps, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment)

const event=[
    {
        start:"",
        end:"",
        title:" My First Appointment"
    }
]

export default function Calendar22(props: Omit<BigCalendar ,"localizer"){
     return <BigCalendar  {...props}  localizer={localizer}  />  
}
// const MyCalendar = (props) => (
//   <div> 
//     <BigCalendar  {...props}   />  
   
//     {/* <Calendar
     
//       style={{ height: 500 }}
//     /> */}
//   </div>
//)

