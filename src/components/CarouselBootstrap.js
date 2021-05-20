import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../img/food1.jpg'
import image2 from '../img/food2.jpg'
import image3 from '../img/food3.jpg'
import image4 from '../img/food4.jpg'
import image5 from '../img/food5.jpg'


const CarouselBootstrap = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block mx-auto"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className="mb-4">Find lovely Pizza recipes</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block mx-auto"
                    src={image2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                <h1 className="mb-4">Or maybe fancy some Sushi</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block mx-auto"
                    src={image3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                <h1 className="mb-4">How about some Salads</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block mx-auto"
                    src={image4}
                    alt="Third slide"
                />

                <Carousel.Caption>
                <h1 className="mb-4">Or Pasta</h1>
                </Carousel.Caption>                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block mx-auto"
                    src={image5}
                    alt="Third slide"
                />

                <Carousel.Caption>
                <h1 className="mb-4">And steaks</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}


export default CarouselBootstrap