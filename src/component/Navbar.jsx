
import { Download } from './Download'
import { Link } from "react-router-dom"


export const Navbar = () => {

  return (
    <div className="h-[12rem] w-full bg-slate-800/80 py-3 lg:h-[11rem] lg:px-[5rem] lg:py-[0.5rem]">

      <div className='w-full flex flex-col gap-4 justify-between items-center
                      lg:flex lg:flex-row'>
        {/* --------------------------------My image and Detail-------------------------------------------- */}
        <div className="flex justify-center items-center gap-4">

          <img className="h-[7rem] w-[7rem] rounded-[50rem] border-2 border-orange-500
                          lg:h-[10rem] lg:w-[10rem]" src="/myImage.jpg" alt="my-Image"/>

          <div className="">
            <div className="">
              <div className='text-[1.2rem] font-semibold text-orange-500 lg:text-[1.5rem]'>Harendrasinh.R.Parmar</div>
              <div className='text-gray-50'>Mobile: 9867775626</div>
              <div className='text-gray-50'>Email:haren111990@gmail.com</div>
              <hr />
            </div>
          </div>

        </div>
        {/* --------------------------------Navbar Menu--------------------------------------------------- */}
        <div className="w-[22rem] flex flex-col gap-2 lg:w-[30rem]">
          <div className="w-full text-gray-100 flex justify-center text-[0.9rem] items-center gap-5
                          lg:flex lg:justify-end lg:gap-10 lg:w-full">
            <div><Link to={"/"}>Home</Link></div>
            <div><Link to={"contact"}>Contact me</Link></div>
            <div><Link to={"/aboutUs"}>About me</Link></div>
            <div className="lg:flex lg:justify-center lg:items-center gap-1
                            flex justify-center items-center">
              <a href="https://github.com/harendrasinp"><span className='text-[0.9rem]'>Github</span></a>
              <img className='w-[2rem] h-[2rem]' src="https://cdn-icons-png.flaticon.com/128/11376/11376339.png" alt="github" />
            </div>
          </div>
          <div className="hidden lg:flex lg:justify-end">
            <Download />
          </div>
        </div>
      </div>
    </div>
  )
}
