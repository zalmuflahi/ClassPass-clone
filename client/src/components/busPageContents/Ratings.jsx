import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Ratings extends React.Component {
    constructor() {
        super();

        this.state = {
            rating: 4
        };
    }

    onStarClick(nextValue) {
        this.setState({ rating: nextValue });
    }

    render() {
        const { rating } = this.state;

        return (
            <div>
                <h2>{rating}</h2>
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
            </div>
        );
    }
}

export default Ratings 