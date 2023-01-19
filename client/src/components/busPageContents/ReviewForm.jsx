const ReviewForm = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
        console.log('just writing this so I have changes to commit')

        const postReview = async () => {
            let req = await fetch("http://localhost:5173/reviews", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: {}
            })
        }
        postReview()
    }
    return (
        <div>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <br />
                    <label>First Name: </label>
                    <input type='text' name='first-name' />
                    <br />
                    <label>Last Name: </label>
                    <input type='text' name='last-name' />
                    <br />
                    <label>Review: </label>
                    <input type='text' name='review' />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ReviewForm