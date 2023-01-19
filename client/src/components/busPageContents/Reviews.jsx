const Reviews = ({business}) => {
    return(
        <div>
            <h1>Reviews: </h1>
            {
                business.reviews.map((review) => {
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