import Calendar from './Calendar' 
import ReviewForm from './ReviewForm' 
import Ratings from './Ratings' 
import Reviews from './Reviews'

const LeftColumn = ({ business }) => {

    let gymDescription = business.info
    let gymName = business.businessname
    let gymArea = business.neighborhood
    let gymRating = business.rating
    // let reviews = business.reviews[0] 
    // console.log(reviews)


    return (
        <div id="left side column" className="flex-block w-1/2 pb-500">
            <div id="image container" className="aspect-[5/3] overflow-hidden rounded-md">
                <img className=" hover:scale-105 transition ease-in-out" src={business.picture}></img>
            </div>
            <div className="py-3">
                <h1 className="text-4xl font-black pb-2">{gymName} - {gymArea}</h1>
                <div className="flex items-center">
                    {/* <h3 className="text-xl font-semibold ">Rating</h3> */}
                    <Ratings/>
                </div>
                <p className="font-thin">{gymDescription}</p>
            </div>
                <hr></hr>
            <div className="py-3">
                <h1 className="text-2xl font-bold">Schedule</h1>
                <Calendar/> 
            </div>
                <hr></hr>
            <div className="py-3">
                {/* <h1 className="text-2xl font-bold pb-2">{gymName} Reviews</h1> */}
               
                            {/* <p>{reviews.content}</p> */}
                            
            </div>
                <hr></hr>
        </div>
    )}


export default LeftColumn