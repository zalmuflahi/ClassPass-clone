const Reviews = ({business}) => {
    console.log(business)
    return(
        <div>
            <h1>Reviews: </h1>
            {
                business.reviews?.map((review) => {
                    return(
                        <p key={review.id} >{review.content}</p>
                        //content is just a placeholder. Not sure what key is called in backend
                    )
                })
            }
        </div>
    )
}

export default Reviews 