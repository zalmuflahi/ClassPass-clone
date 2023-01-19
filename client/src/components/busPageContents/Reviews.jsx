const Reviews = ( { business }) => {
    
    let gymReview = business.reviews
    console.log(gymReview)


    return(
        <div>
            <h1 className="text-xl font-semibold pb-2 ">{business.businessname}  Reviews: </h1>
            {
                gymReview.map((review) => {
                    return (
                        <div>
                            <hr></hr>
                            <h1 className="text-xl font-semibold pb-2 ">{review.title}</h1>
                            <p>"{review.content}!"</p>
                            <p></p>
                            <hr></hr>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Reviews 