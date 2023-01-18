import Carousel from 'react-bootstrap/Carousel';

const HomeScreen = () => {
    const images = ['https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto,w_1125/media_venue/evz5icjwo0hctbxc8yys.jpg',
        'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto,w_1125/media_venue/ym00yzc9mwaxskhbp0xo.jpg',
        'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto,w_1125/media_venue/cgs7gqb0hheq9uwkdgd1.jpg']

    // Add get request for index of businesses

        return(
        <div className="mainComponents">
            <div className="HomeScreen">
                <Carousel className="p-6">
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