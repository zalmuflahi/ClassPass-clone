const Reviews = ({business}) => {
    return(
        <div>
            <h1>Reviews: </h1>
            {
                business.reviews?.map((review) => {
                    return(
                        <p key={review.id} >{review.content}</p>
                    )
                })
            }
        </div>
    )
}

export default Reviews 