const Reviews = () => {
    return(
        <div>
            <h2>Reviews: </h2>
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