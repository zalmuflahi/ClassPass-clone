const ReviewForm = () => {
    return(
        <div>
            <form>Leave a Review! 
                <br/>
                <label>First Name: </label> 
                <input type='text' name='first-name'/>
                <br/>
                <label>Last Name: </label>
                <input type='text' name='last-name'/>
                <br/>
                <label>Review: </label>
                <input type='text' name='review'/>
            </form>
        </div>
    )
}  

export default ReviewForm