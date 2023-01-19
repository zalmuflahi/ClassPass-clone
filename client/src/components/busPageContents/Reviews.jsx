import StarRatingComponent from 'react-star-rating-component';
const Reviews = ({business}) => {
    return(
        <div>
            {
                business.reviews?.map((review) => {
                    return(
                        <div>
                            <h1 className="text-l font-bold">{review.title}</h1>
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={review.rating}
                            />
                            <p key={review.id} >{review.content}</p>
                        </div>
                    )
                })
            }
            </div>
    )
}

export default Reviews 