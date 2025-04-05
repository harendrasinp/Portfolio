import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const MyCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1,
    };
    return (
        <div className=' w-[18rem]'>
            <Slider {...settings}>
            <div><img className='w-[20rem] h-[10rem]'src="../public/certificate_Image/backend1.jpg"alt="Image 1"/>
            </div>
            <div><img className='w-[20rem] h-[10rem]'src="../public/certificate_Image/backend2.jpg"alt="Image 1"/>
            </div>
            <div><img className='w-[20rem] h-[10rem]'src="../public/certificate_Image/react1.jpg"alt="Image 1"/>
            </div>
            <div><img className='w-[20rem] h-[10rem]'src="../public/certificate_Image/react2.jpg"alt="Image 1"/>
            </div>
            <div><img className='w-[20rem] h-[10rem]'src="../public/certificate_Image/frontend1.jpg"alt="Image 1"/>
            </div>
            <div><img className='w-[20rem] h-[10rem]'src="../public/certificate_Image/frontend2.jpg"alt="Image 1"/>
            </div>
                
            </Slider>
        </div>
    )
}

