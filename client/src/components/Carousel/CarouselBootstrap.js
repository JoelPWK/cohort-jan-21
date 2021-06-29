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
        <div className='carouselContainer'>
        {/* //Placed the whole Carousel in a container to put some gradient background */}
        <div className='carouselContainer'>
            <h2>Welcome to Recipe Book!</h2>
            <br/>
            <p>
            Meet your new cooking coach! Jump in to the new social media recipe app where you can create, share and save recipes from around the world!
            <br/>
            <br/>
            When you are ready, sign up to a <b>free</b> account to start your recipe book journey!
            <br/>
            <br/>
            </p>
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
        </div>
        </div>
    )
}

export default CarouselBootstrap;