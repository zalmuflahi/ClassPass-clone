import Carousel from 'react-bootstrap/Carousel';

const CarouselItem = ({gym}) => {
    // console.log(gym.picture)
    return(
        // <div key={gym.id}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={gym.picture}
                    alt={gym.businessname}
                />
                <Carousel.Caption>
                    <h3>{gym.name}</h3>
                    <p>{gym.info}</p>
                </Carousel.Caption>
            </Carousel.Item>
        // </div>
    )
}
export default CarouselItem