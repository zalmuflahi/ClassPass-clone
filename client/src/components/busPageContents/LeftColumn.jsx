import Calendar from './Calendar' 
import ReviewForm from './ReviewForm' 
import Ratings from './Ratings' 
import Reviews from './Reviews'

const LeftColumn = ({ business }) => {
    // const [isScheduling, setIsScheduling] = useState(false);
    // const [isScheduled, setIsScheduled] = useState(false);
    // const [scheduleErr, setScheduleErr] = useState('');


    let gymDescription = business.info
    let gymName = business.businessname
    let gymArea = business.address
    let gymRating = business.rating


    return (
        <div id="left side column" className="flex-block w-1/2 pb-500">
            <div id="image container" className="aspect-[5/3] overflow-hidden rounded-md">
                <img className=" hover:scale-105 transition ease-in-out" src={business.picture}></img>
            </div>
            <div className="pt-5 pb-5">
                <h1 className="text-4xl font-black pb-3">{gymName} - {gymArea}</h1>
                <h3 className="text-xl font-semibold pb-2 ">Rating</h3>
                <Ratings/>
                <p className="font-thin">{gymDescription}</p>
            </div>
                <hr></hr>
            <div className="pt-5 pb-5">
                <h1 className="text-2xl font-bold pb-2">Schedule</h1>
                <Calendar/> 
            </div>
                <hr></hr>
            <div className="pt-5 pb-5">
                <Reviews/>
                <ReviewForm/> 
                <h1 className="text-2xl font-bold pb-2">{gymName} Reviews</h1>
                {/* <h3 className="text-">display reviews (try to find premade element and put into a component)</h3> */}
            </div>
                {/* <hr></hr> */}
        </div>
    )}


export default LeftColumn