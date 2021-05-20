import React, { Fragment } from 'react'
import image1 from '../img/food1.jpg'
import image2 from '../img/food2.jpg'
import image3 from '../img/food3.jpg'
import image4 from '../img/food4.jpg'
import image5 from '../img/food5.jpg'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './CarouselAlice.css'

const handleDragStart = (e) => {
    e.preventDefault();
}

const items = [
    <img src={image1} className="item" alt="Pizza"  onDragStart={handleDragStart} />,
    <img src={image2} className="item" alt="Sushi" onDragStart={handleDragStart} />,
    <img src={image3} className="item" alt="Salad" onDragStart={handleDragStart} />,
    <img src={image4} className="item" alt="Pasta" onDragStart={handleDragStart} />,
    <img src={image5} className="item" alt="Steak" onDragStart={handleDragStart} />
]


const CarouselAlice = () => {
    return (
        <Fragment>
            <AliceCarousel
                autoPlay
                autoPlayInterval="10000"
                mouseTracking items={items}
            />
        </Fragment>
    )
}


export default CarouselAlice;