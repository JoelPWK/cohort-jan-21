import React from 'react'
import './Carousel.css'
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../../Images/food1.jpg'
import image2 from '../../Images/food2.jpg'
import image3 from '../../Images/food3.jpg'
import image4 from '../../Images/food4.jpg'
import image5 from '../../Images/food5.jpg'

const CarouselBootstrap = () => {
    return (
        //Placed the whole Carousel in a container to put some gradient background
        <div className='carouselContainer'>
            <h2>Create and browse delicious recipes</h2>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        src={image1}
                        alt="Pizza"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={image2}
                        alt="Sushi"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={image3}
                        alt="Salad"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={image4}
                        alt="Pasta"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={image5}
                        alt="Steak"
                    />
                </Carousel.Item>
            </Carousel>
            <h2>Create and browse delicious recipes</h2>
        </div>
    )
}

export default CarouselBootstrap;