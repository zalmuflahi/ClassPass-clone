import { useNavigate } from "react-router-dom"

const CarouselItem = ({gym}) => {
    const navigate = useNavigate()

    const clickHandler = () =>{
        navigate(`/BusinessPage/${gym.id}`)
    }

    return(
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={gym.image}
                alt={gym.name}
                onClick={()=>{clickHandler()}}
            />
            <Carousel.Caption>
                <h3>{gym.name}</h3>
                <p>{gym.info}</p>
            </Carousel.Caption>
        </Carousel.Item>
    )
}
export default CarouselItem