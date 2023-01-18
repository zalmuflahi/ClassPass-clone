const CarouselItem = ({gym}) => {
    return(
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={gym.image}
                alt={gym.name}
            />
            <Carousel.Caption>
                <h3>{gym.name}</h3>
                <p>{gym.info}</p>
            </Carousel.Caption>
        </Carousel.Item>
    )
}
export default CarouselItem