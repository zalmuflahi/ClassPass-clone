import { useState } from 'react' 
import DayTimePicker from '@mooncake-dev/react-day-time-picker' 

const Calendar = () => {
    const [isScheduling, setIsScheduling] = useState(false);
    const [isScheduled, setIsScheduled] = useState(false);
    const [scheduleErr, setScheduleErr] = useState('');

    const handleScheduled = date => {
        setIsScheduling(true);
        setScheduleErr(''); 
        setIsScheduling(false);
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
export default Calendar