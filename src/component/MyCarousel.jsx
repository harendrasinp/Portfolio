import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
export const MyCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ]
    };
    return (
        <motion.div className='w-[21rem] lg:w-[50rem]'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 1, delay: 1.9 }}>
            <Slider {...settings}>
                <div className='p-2 flex justify-center items-center flex-col border-[0.2rem] shadow-lg shadow-blue-950 rounded-md'>
                    <div>
                        <img className='w-full h-[12rem]' src="/certificate_Image/backend1.jpg" alt="Image 1" />
                    </div>

                    <div className='w-full flex justify-center items-center bg-slate-600'>
                        <p className='text-yellow-100'>Backend1</p>
                    </div>
                </div>

                <div className='p-2 flex justify-center items-center flex-col border-[0.2rem] shadow-lg shadow-blue-950 rounded-md'>
                    <div>
                        <img className='w-full h-[12rem]' src="/certificate_Image/backend2.jpg" alt="Image 1" />
                    </div>

                    <div className='w-full flex justify-center items-center bg-slate-600'>
                        <p className='text-yellow-100'>Backend2</p>
                    </div>
                </div>

                <div className='p-2 flex justify-center items-center flex-col border-[0.2rem] shadow-lg shadow-blue-950 rounded-md'>
                    <div>
                        <img className='w-full h-[12rem]' src="/certificate_Image/react1.jpg" alt="Image 1" />
                    </div>

                    <div className='w-full flex justify-center items-center bg-slate-600'>
                        <p className='text-yellow-100'>react1</p>
                    </div>
                </div>

                <div className='p-2 flex justify-center items-center flex-col border-[0.2rem] shadow-lg shadow-blue-950 rounded-md'>
                    <div>
                        <img className='w-full h-[12rem]' src="/certificate_Image/react2.jpg" alt="Image 1" />
                    </div>

                    <div className='w-full flex justify-center items-center  bg-slate-600'>
                        <p className='text-yellow-100'>react2</p>
                    </div>
                </div>

                <div className='p-2 flex justify-center items-center flex-col border-[0.2rem] shadow-lg shadow-blue-950 rounded-md'>
                    <div>
                        <img className='w-full h-[12rem]' src="/certificate_Image/frontend1.jpg" alt="Image 1" />
                    </div>

                    <div className='w-full flex justify-center items-center  bg-slate-600'>
                        <p className='text-yellow-100'>frontend1</p>
                    </div>
                </div>

                <div className='p-2 flex justify-center items-center flex-col border-[0.2rem] shadow-lg shadow-blue-950 rounded-md'>
                    <div>
                        <img className='w-full h-[12rem]' src="/certificate_Image/frontend2.jpg" alt="Image 1" />
                    </div>

                    <div className='w-full flex justify-center items-center bg-slate-600'>
                        <p className='text-yellow-100'>frontend2</p>
                    </div>
                </div>
                <div className='p-2 flex justify-center items-center flex-col border-[0.2rem] shadow-lg shadow-blue-950 rounded-md'>
                    <div>
                        <img className='w-full h-[12rem]' src="/certificate_Image/Python1.jpg" alt="Image 1" />
                    </div>

                    <div className='w-full flex justify-center items-center bg-slate-600'>
                        <p className='text-yellow-100'>Python1</p>
                    </div>
                </div>
            </Slider>
        </motion.div>
    )
}

