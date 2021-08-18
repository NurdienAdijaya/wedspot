import React from 'react';

import img1 from '../asset/images1.jpg';
import img2 from '../asset/images2.jpg';
import img3 from '../asset/images3.jpg';
import img4 from '../asset/image4.jpg';
import img5 from '../asset/image5.jpg';
import img6 from '../asset/image6.jpg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./image.css";
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css'

const ImageCarousel = () => {
    return (
        <div>
            <Carousel infiniteLoop autoPlay>
                <div className="image">
                    <img src={img1} alt=""/>
                </div>
                <div className="image">
                    <img src={img2} alt=""/>
                </div>
                <div className="image">
                    <img src={img3} alt=""/>
                </div>
                <div className="image">
                    <img src={img4} alt=""/>
                </div>
                <div className="image">
                    <img src={img5} alt=""/>
                </div>
                <div className="image">
                    <img src={img6} alt=""/>
                </div>
            </Carousel>
            
        </div>
    )
}

export default ImageCarousel

