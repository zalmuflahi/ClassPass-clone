import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react'
import { useLinkClickHandler } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

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

    const navigate = useNavigate()

    const clickHandler = (gym) => {
        navigate(`/BusinessPage/${gym.id}`)
    }
    

    return(
        <div className="mainComponents">
            <div className="HomeScreen">
                <Carousel className="p-6">                      
                    {gyms.map((gym)=>{
                        return(
                            <Carousel.Item>
                                <img
                                    className=" w-100"
                                    src={gym.picture}
                                    alt={gym.businessname}
                                    onClick={()=>{clickHandler(gym)}}
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