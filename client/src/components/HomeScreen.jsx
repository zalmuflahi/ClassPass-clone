import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from './CarouselItem';
import { useState, useEffect } from 'react'

const HomeScreen = () => {
    const [gyms, setGyms] = useState([])

    useEffect(() => {
        const request = async () => {
            let req = await fetch('http://127.0.0.1:3000/business');
            let res = await req.json();
            setGyms(res.businesses);
            console.log(res.businesses)
        }
        request();
    }, []);


    const images = ['https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto,w_1125/media_venue/evz5icjwo0hctbxc8yys.jpg',
        'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto,w_1125/media_venue/ym00yzc9mwaxskhbp0xo.jpg',
        'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto,w_1125/media_venue/cgs7gqb0hheq9uwkdgd1.jpg']
    
    // Add get request for all businesses

    return(
        <div className="mainComponents">
            <div className="HomeScreen">
                <Carousel className="p-6">
                    
                      
                    {gyms.map((gym)=>{
                        return(
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
                        )
                        })
                    }
                    
                </Carousel>
            </div>
        </div>
    )
}
export default HomeScreen