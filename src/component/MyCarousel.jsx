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
                        <img className='w-full h-[12rem]' src="/certificate_Image/backend-Node.js.jpg" alt="Image 1" />
                    </div>

                    <div className='w-full flex justify-center items-center bg-slate-600'>
                        <p className='text-yellow-100'>backend Node.js</p>
                    </div>
                </div>

                <div className='p-2 flex justify-center items-center flex-col border-[0.2rem] shadow-lg shadow-blue-950 rounded-md'>
                    <div>
                        <img className='w-full h-[12rem]' src="/certificate_Image/backend-Node.js-Excellence.jpg" alt="Image 1" />
                    </div>

                    <div className='w-full flex justify-center items-center bg-slate-600'>
                        <p className='text-yellow-100'>backend Node.js Excellence</p>
                    </div>
                </div>

                <div className='p-2 flex justify-center items-center flex-col border-[0.2rem] shadow-lg shadow-blue-950 rounded-md'>
                    <div>
                        <img className='w-full h-[12rem]' src="/certificate_Image/React.js.jpg" alt="Image 1" />
                    </div>

                    <div className='w-full flex justify-center items-center bg-slate-600'>
                        <p className='text-yellow-100'>React.js</p>
                    </div>
                </div>

                <div className='p-2 flex justify-center items-center flex-col border-[0.2rem] shadow-lg shadow-blue-950 rounded-md'>
                    <div>
                        <img className='w-full h-[12rem]' src="/certificate_Image/React.js-Excellence.jpg" alt="Image 1" />
                    </div>

                    <div className='w-full flex justify-center items-center  bg-slate-600'>
                        <p className='text-yellow-100'>React.js Excellence</p>
                    </div>
                </div>

                <div className='p-2 flex justify-center items-center flex-col border-[0.2rem] shadow-lg shadow-blue-950 rounded-md'>
                    <div>
                        <img className='w-full h-[12rem]' src="/certificate_Image/Frontend.jpg" alt="Image 1" />
                    </div>

                    <div className='w-full flex justify-center items-center  bg-slate-600'>
                        <p className='text-yellow-100'>Frontend</p>
                    </div>
                </div>

                <div className='p-2 flex justify-center items-center flex-col border-[0.2rem] shadow-lg shadow-blue-950 rounded-md'>
                    <div>
                        <img className='w-full h-[12rem]' src="/certificate_Image/Frontend-Excellence.jpg" alt="Image 1" />
                    </div>

                    <div className='w-full flex justify-center items-center bg-slate-600'>
                        <p className='text-yellow-100'>Frontend Excellence</p>
                    </div>
                </div>
                <div className='p-2 flex justify-center items-center flex-col border-[0.2rem] shadow-lg shadow-blue-950 rounded-md'>
                    <div>
                        <img className='w-full h-[12rem]' src="/certificate_Image/python.jpg" alt="Image 1" />
                    </div>

                    <div className='w-full flex justify-center items-center bg-slate-600'>
                        <p className='text-yellow-100'>DSA Python</p>
                    </div>
                </div>
                <div className='p-2 flex justify-center items-center flex-col border-[0.2rem] shadow-lg shadow-blue-950 rounded-md'>
                    <div>
                        <img className='w-full h-[12rem]' src="/certificate_Image/python2.jpg" alt="Image 1" />
                    </div>

                    <div className='w-full flex justify-center items-center bg-slate-600'>
                        <p className='text-yellow-100'>DSA Python Excellence</p>
                    </div>
                </div>
            </Slider>
        </motion.div>
    )
}

