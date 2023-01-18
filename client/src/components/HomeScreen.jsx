import Carousel from 'react-bootstrap/Carousel';

const HomeScreen = () => {
    const images = ['https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/ah6gk5dv88gv6cryl7jl.jpg',
        'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto,w_1125/media_venue/zruefsw4okc5wwlashui.jpg',
        'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto,w_1125/media_venue/qh2p1nz3xys9h41m74ty.jpg']
    return(
        <div className="mainComponents">
            <div className="HomeScreen">
                Homescreen
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={images[0]}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={images[1]}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={images[2]}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
export default HomeScreen