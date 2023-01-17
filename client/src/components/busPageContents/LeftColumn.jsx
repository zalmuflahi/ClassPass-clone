import { useState } from 'react'
import DayTimePicker from '@mooncake-dev/react-day-time-picker' 

const LeftColumn = () => {
    const [isScheduling, setIsScheduling] = useState(false);
    const [isScheduled, setIsScheduled] = useState(false);
    const [scheduleErr, setScheduleErr] = useState('');

    let gymDescription = "Gym Description: Rumble is group fitness for the individual, and we believe that working out should be fun and effective. Rumble Boxing is an all-level, 45-minute boxing and strength training workout powered by a mega-watt sound system and custom playlists available only at Rumble. 10 rounds, 2 fists, 0 experience necessary."
    let gymName = "Gym Name"
    let gymArea = "Area"
    let gymRating = 4.5

    const handleScheduled = (date) => {
        setIsScheduling(true);
        setScheduleErr('');
        fakeRequest(date)
            .then(json => {
                setScheduleErr('');
                setIsScheduled(true);
                console.log('fake response: ', json);
            })
            .catch(err => {
                setScheduleErr(err);
            })
            .finally(() => {
                setIsScheduling(false);
            });
    handleScheduled()

    return (
        <div id="left side column" className="flex-block w-1/2 pb-500">
            <div id="image container" className="aspect-[5/3] overflow-hidden rounded-md">
                <img className=" hover:scale-105 transition ease-in-out" src="https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/psh7k9ugxtuvhviozoxw.jpg"></img>
            </div>
            <div className="pt-5 pb-5">
                <h1 className="text-4xl font-black pb-3">{gymName} - {gymArea}</h1>
                <h3 className="text-xl font-semibold pb-2 ">Rating</h3>
                <p className="font-thin">{(gymDescription.length < 200) ? gymDescription : gymDescription}</p>
            </div>
                <hr></hr>
            <div className="pt-5 pb-5">
                <h1 className="text-2xl font-bold pb-2">Schedule</h1>
                <h3 className="text-">Find a schedule component for this</h3>
                <DayTimePicker
                    timeSlotSizeMinutes={60}
                    isLoading={isScheduling}
                    isDone={isScheduled}
                    err={scheduleErr}
                    onConfirm={handleScheduled}
                />
            </div>
                <hr></hr>
            <div className="pt-5 pb-5">
                <h1 className="text-2xl font-bold pb-2">{gymName} Reviews</h1>
                <h3 className="text-">display reviews (try to find premade element and put into a component)</h3>
            </div>
                {/* <hr></hr> */}
        </div>
    )}
}  

export default LeftColumn