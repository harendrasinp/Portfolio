import React from 'react'
import "./ComponentStyle.css"
import "./Mediaquery.css"
import { techData } from '../techno.js/techData'
export const Home = () => {
    return (
        <div className={"homeContainer"}>
            {/* ----------------------------------------------Technology box-------------------------------------------- */}
            <div className={"infoBox"} >
                <div className={"info-title"}>Technologies</div>
                <div className={"techno-Batch"}>
                    <img src="https://cdn-icons-png.flaticon.com/128/1087/1087840.png" alt="techno" />
                </div>
                <div className={"tech-list"}>
                    {techData.map((tech,index) => (
                        <div key={index} className={"tech"}>
                            <img src={tech.image} alt="js" /><span>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            {/* --------------------------------------Project box---------------------------------------------------------------- */}
            <div className={"infoBox"} >
                <div className={"info-title"}>Projects</div>
                <div className={"Project"}>
                    <img src="https://cdn-icons-png.flaticon.com/128/4257/4257674.png" alt="Project" />
                </div>
                <div>
                    <p class=" rounded-md p-1 text-blue-950  mb-1 hover:text-white"><a href="https://buy-busy-ten.vercel.app/"> BuBusy-Online Shoping App</a></p>
                    <p class=" rounded-md p-1 text-blue-950  mb-1 hover:text-white"><a href="https://vayuphotopholio.netlify.app/"> Photofolio-Online album App</a></p>
                    <p class=" rounded-md p-1 text-blue-950  mb-1 hover:text-white"><a href="https://vayuchatterup.netlify.app/"> ChatterUp-Online Chatting App</a></p>
                </div>
            </div>
            {/* ---------------------------------------------Achivment Box---------------------------------------------------------- */}
            <div className={"infoBox"}>
                <div className={"info-title"} id='achivment'>Achievements</div>
                <div className={"batch"}>
                    <img src="https://cdn-icons-png.flaticon.com/128/11881/11881960.png" alt="award" />
                </div>
                <div className='w-[100%] mt-[-45px] p-[6px] flex justify-center flex-col text-blue-950 '>
                    <div className='flex '>
                        <img className='w-[25px] h-[25px] mr-[2px]' src="https://cdn-icons-png.flaticon.com/128/2679/2679078.png" alt="certificate" />
                        <a  className="hover:text-orange-500 font-semibold text-[15px]" href="/pdf/Certificates/FrontEnd.pdf">Certification of FrontEnd</a>
                    </div>
                    <div className='flex'>
                        <img className='w-[25px] h-[25px] mr-[2px]' src="https://cdn-icons-png.flaticon.com/128/2679/2679078.png" alt="certificate" />
                        <a className="hover:text-orange-500 font-semibold text-[15px]" href="./pdf/Certificates/Excellence-FrontEnd.pdf">Certification of Excellence in FrontEnd</a>
                    </div>
                    <div className='flex'>
                        <img className='w-[25px] h-[25px] mr-[2px]' src="https://cdn-icons-png.flaticon.com/128/2679/2679078.png" alt="certificate" />
                        <a className="hover:text-orange-500 font-semibold text-[15px]" href="./public/pdf/Certificates/backend-nodejs.pdf">Certification of BackEnd with NodeJs</a>
                    </div>
                    <div className='flex'>
                        <img className='w-[25px] h-[25px] mr-[2px]' src="https://cdn-icons-png.flaticon.com/128/2679/2679078.png" alt="certificate" />
                        <a className="hover:text-orange-500 font-semibold text-[15px]" href="/pdf/Certificates/Excellence-backend.pdf">Certification of Excellence in BackEnd with Node</a>
                    </div>
                    <div className='flex'>
                        <img className='w-[25px] h-[25px] mr-[2px]' src="https://cdn-icons-png.flaticon.com/128/2679/2679078.png" alt="certificate" />
                         <a className="hover:text-orange-500 font-semibold text-[15px]" href="/pdf/Certificates/react.pdf">Certification of Reactjs</a> 
                    </div>
                    <div className='flex'>
                        <img className='w-[25px] h-[25px] mr-[2px]' src="https://cdn-icons-png.flaticon.com/128/2679/2679078.png" alt="certificate" />
                        <a className="hover:text-orange-500 font-semibold text-[15px]" href="">Certification of Excelence in Reactjs</a>
                    </div>
                </div>
            </div>

        </div>
    )
}
