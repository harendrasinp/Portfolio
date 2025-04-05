import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const MyCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className=' w-[15rem]'>
            <Slider {...settings}>
                <div><img className='w-[15rem] h-[10rem]' src="../public/background.jpg" alt="Image 1" /></div>
                <div><img className='w-[15rem] h-[10rem]' src="../public/myImage.jpg" alt="Image 2" /></div>
                <div><img className='w-[15rem] h-[10rem]' src="../public/background.jpg" alt="Image 3" /></div>
            </Slider>
        </div>
    )
}
