import { useState } from 'react' 
import DayTimePicker from '@mooncake-dev/react-day-time-picker' 

const Calendar = () => {
    const [isScheduling, setIsScheduling] = useState(false);
    const [isScheduled, setIsScheduled] = useState(false);
    const [scheduleErr, setScheduleErr] = useState('');
    const fakeRequest = (x) => {
        console.log('appoinment scheduled')
    }

    const handleScheduled = date => {
        setIsScheduling(true);
        setScheduleErr(''); 
        // fakeRequest(date)
        //     .then(json => {
        //         setScheduleErr('');
        //         setIsScheduled(true);
        //         // console.log('fake response: ', json);
        //     })
        //     .catch(err => {
        //         setScheduleErr(err);
        //     })
        //     .finally(() => {
                 setIsScheduling(false);
        //     });
        }
        
    return(
        <DayTimePicker
            timeSlotSizeMinutes={15}
            isLoading={isScheduling}
            isDone={isScheduled}
            err={scheduleErr}
            onConfirm={handleScheduled}
        />
    )
}  


// function Calendar() {
//     const [isScheduling, setIsScheduling] = useState(false);
//     const [isScheduled, setIsScheduled] = useState(false);
//     const [scheduleErr, setScheduleErr] = useState('');
//     const handleScheduled = date => {
//         setIsScheduling(true);
//         setScheduleErr('');
//         fakeRequest(date)
//             .then(json => {
//                 setScheduleErr('');
//                 setIsScheduled(true);
//                 console.log('fake response: ', json);
//             })
//             .catch(err => {
//                 setScheduleErr(err);
//             })
//             .finally(() => {
//                 setIsScheduling(false);
//             });
//         return (
//             <DayTimePicker
//                 timeSlotSizeMinutes={15}
//                 isLoading={isScheduling}
//                 isDone={isScheduled}
//                 err={scheduleErr}
//                 onConfirm={handleScheduled}
//             />
//         );
//     }
// }
export default Calendar