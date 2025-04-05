import React from 'react'
import { techData } from '../techno.js/techData'
import { Download } from './Download'
import { motion } from 'framer-motion'
export const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5
                        lg:flex lg:flex-row lg:justify-center">
            <div className="lg:hidden w-fit mt-1">
                <Download />
            </div>
            {/* ----------------------------------------------Technology box-------------------------------------------- */}
            <motion.div className="w-[22rem] h-[13rem] bg-slate-800/80 rounded-md flex flex-col gap-4 justify-center items-center  cursor-pointer lg:w-[25rem] lg:h-[14rem]"
                initial={{opacity:0,y:180}}
                animate={{y:0,opacity:1}}
                transition={{delay:0,duration:1,ease:"easeInOut"}}>
                <div className=' w-full flex justify-center items-center gap-2'>
                    <div className="text-[1.2rem] text-gray-100 font-semibold">Technologies</div>
                    <div className="">
                        <img className='w-[1.8rem] h-[1.8rem]' src="https://cdn-icons-png.flaticon.com/128/1087/1087840.png" alt="techno" />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {techData.map((tech, index) => (
                        <div key={index} className="flex">
                            <img className='w-[1.5rem] h-[1.5rem]' src={tech.image} alt="js" />
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
            {/* ----------------------Projec box---------------------------------------------------- */}
            <div className="flex flex-col shadow-md bg-slate-800/80 w-[22rem] h-[13rem] rounded-[0.2rem] 
                            trasition duration-700 hover:scale-105 cursor-pointer
                            lg:w-[25rem] lg:h-[14rem]"
                            initial={{opacity:0,y:180}}
                            animate={{y:0,opacity:1}}
                            transition={{delay:0,duration:1,ease:"easeInOut"}}>
                <div className='w-full flex justify-center items-center gap-2'>
                    <div className="text-[1.2rem] text-gray-100 font-semibold">Projects</div>
                    <div className="">
                        <img className='w-[1.8rem] h-[1.8rem]' src="https://cdn-icons-png.flaticon.com/128/4257/4257674.png" alt="Project" />
                    </div>
                </div>
                <div className='flex justify-center items-center flex-col mt-4'>

                    <div className=" rounded-md p-1 text-blue-200  mb-1 hover:text-white">
                        <a href="https://vayusmarttool.netlify.app/" target='_blanck'>SmartTool App</a>
                    </div>

                    <div className=" rounded-md p-1 text-blue-200  mb-1 hover:text-white" >
                        <a href="https://shopingbuybusy.netlify.app/" target='_blanck'> BuyBusy-Online Shoping App</a>
                    </div>

                    <div className=" rounded-md p-1 text-blue-200  mb-1 hover:text-white">
                        <a href="https://vayuphotopholio.netlify.app/" target='_blanck'> Photofolio-Online album App</a>
                    </div>

                    <div className=" rounded-md p-1 text-blue-200  mb-1 hover:text-white">
                        <a href="https://vayuchatterup.netlify.app/" target='_blanck'> ChatterUp-Online Chatting App</a>
                    </div>

                </div>
            </div>
            {/* -----------------------------------Achivment Box------------------------------------------ */}
            <motion.div className="mb-[2rem] flex flex-col shadow-md bg-slate-800/80 w-[22rem] h-[15rem] rounded-[0.2rem] 
                             cursor-pointer lg:w-[25rem] lg:h-[14rem] lg:mb-0"
                            initial={{y:180,opacity:0}}
                            animate={{y:0,opacity:1}}
                            transition={{delay:0,duration:1,ease:"linear"}}>
                <div className='w-full flex justify-center items-center gap-2'>
                    <div className="text-[1.2rem] text-gray-100 font-semibold">Achievements</div>
                    <div className="">
                        <img className='w-[1.8rem] h-[1.8rem]' src="https://cdn-icons-png.flaticon.com/128/708/708906.png" alt="award" />
                    </div>
                </div>
                <div className='flex justify-center items-start flex-col mt-4'>
                    <div className='flex '>
                        <img className='w-[25px] h-[25px] mr-[2px]' src="https://cdn-icons-png.flaticon.com/128/1321/1321098.png" alt="certificate" />
                        <a className="text-blue-200 font-semibold text-[15px]" href="/pdf/Certificates/FrontEnd.pdf" target="_blank">Certification of FrontEnd</a>
                    </div>
                    <div className='flex'>
                        <img className='w-[25px] h-[25px] mr-[2px]' src="https://cdn-icons-png.flaticon.com/128/1321/1321098.png" alt="certificate" />
                        <a className="text-blue-200 font-semibold text-[15px]" href="./pdf/Certificates/Excellence-FrontEnd.pdf" target="_blank">Certification of Excellence in FrontEnd</a>
                    </div>
                    <div className='flex'>
                        <img className='w-[25px] h-[25px] mr-[2px]' src="https://cdn-icons-png.flaticon.com/128/1321/1321098.png" alt="certificate" />
                        <a className="text-blue-200 font-semibold text-[15px]" href="./public/pdf/Certificates/backend-nodejs.pdf" target="_blank">Certification of BackEnd with NodeJs</a>
                    </div>
                    <div className='flex'>
                        <img className='w-[25px] h-[25px] mr-[2px]' src="https://cdn-icons-png.flaticon.com/128/1321/1321098.png" alt="certificate" />
                        <a className="text-blue-200 font-semibold text-[15px]" href="/pdf/Certificates/Excellence-backend.pdf" target="_blank">Certification of Excellence in BackEnd with Node</a>
                    </div>
                    <div className='flex'>
                        <img className='w-[25px] h-[25px] mr-[2px]' src="https://cdn-icons-png.flaticon.com/128/1321/1321098.png" alt="certificate" />
                        <a className="text-blue-200 font-semibold text-[15px]" href="/pdf/Certificates/react.pdf" target="_blank">Certification of Reactjs</a>
                    </div>
                    <div className='flex'>
                        <img className='w-[25px] h-[25px] mr-[2px]' src="https://cdn-icons-png.flaticon.com/128/1321/1321098.png" alt="certificate" />
                        <a className="text-blue-200 font-semibold text-[15px]" href="/pdf/Certificates/Excellent-React.pdf" target="_blank">Certification of Excelence in Reactjs</a>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}
