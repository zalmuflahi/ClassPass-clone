import { useEffect, useState } from "react"

const Reviews = () => {
    const [reviews, setReviews] = useState([]) 

    useEffect(() => {
        const request = async () => {
            let req = await fetch("http://localhost:3000/reviews")
            let res = await req.json()
            setReviews(res)
        }
    })
    return(
        
        <div>
            <h1 className='text-2xl font-bold pb-2'>Reviews: </h1>
            {
                reviews.map((review) => {
                    return(
                        <p>{review.content}</p>
                        //content is just a placeholder. Not sure what key is called in backend
                    )
                })
            }
        </div>
    )
}

export default Reviews 