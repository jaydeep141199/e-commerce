import React from 'react'
import img1 from '../others/images/1.png';
import img2 from '../others/images/1.jpeg';
import img3 from '../others/images/1.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


 const Slider = () => {
  return (
    
<Carousel autoPlay={true} showArrows={false} swipeable={false} showThumbs={false} thumbWidth={50} infiniteLoop>
                <div >
                    <img src={img1} className='w-full h-[350px]' alt="photos"/>
                 
                </div>
                <div>
                    <img src={img2} className='w-full h-[350px]'alt="photos"/>

                </div>
                <div>
                    <img src={img3} className='w-full h-[350px]'alt="photos"/>

                </div>
            </Carousel>


  );
};

export default Slider;
