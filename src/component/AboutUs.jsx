import React from 'react'
import { motion } from 'framer-motion'
export const AboutUs = () => {
  return (
    <div className='h-full lg:mt-0 lg:flex justify-center w-full px-[0.8rem]'>

      <motion.div className='w-full h-[58rem] bg-slate-500/15 backdrop-blur-md lg:w-[50rem] lg:mt-[1rem] lg:h-[40rem] rounded-md'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration:1.8}}>

        <div className='w-[4rem]'><img src="https://cdn-icons-png.flaticon.com/128/3705/3705611.png" alt="pin" /></div>
        {/* ----------------------------About me-------------------------------------------------------- */}
        <div className="flex justify-center flex-col items-center lg:mt-[1rem]">
          <div className="text-orange-500 text-[1.2rem] font-semibold lg:text-[1.5rem] lg:font-semibold">About Me</div>
          <div className=" text-blue-950 w-[22rem] text-justify lg:w-[40rem]">
            I am a passionate and skilled Full-Stack Developer with a strong background in Computer Science. I have always been enthusiastic about building scalable and efficient web applications that enhance user experience.
          </div>
        </div>

        {/* ----------------------------Education and Training-------------------------------------------------------- */}
        <div className="flex justify-center items-center flex-col">
          <div className="text-orange-500 font-semibold text-[1.2rem]">Education & Training</div>
          <div className='text-blue-950 w-[22rem] lg:w-[28rem]'>Master’s in Computer Science from Mumbai University (2015).</div>
          <div className='text-blue-950 w-[22rem] lg:w-[28rem]'>Full-Stack Development Training from Coding Ninja's(2024).</div>
        </div>
        {/* ----------------------------Projects I Have Built-------------------------------------------------------- */}
        <div className="flex justify-center items-center flex-col">
          <div className="text-orange-500 font-semibold text-[1.2rem]"> Projects I Have Built</div>
          <div className='text-blue-950 w-[22rem] lg:w-[32rem]'>
            <div className="">
              <div>
                1.<span className='text-orange-600 font-semibold'>Online Shopping Platform:</span>
                A feature-rich e-commerce application.
              </div>

              <div>
                2.<span className='text-orange-600 font-semibold'>SmartTool App:</span>
                This App is like a small gadgets tool App, in this app there are two gadgets urlshortner,weather,with the help of urlShortner you can short your long Url and with the healp of weather app you can check your area weather detail,and many more is in update process
              </div>
              <div>
                3.<span className='text-orange-600 font-semibold'>Online Job Portal:</span>
                A platform connecting job seekers and recruiters.
              </div>

              <div>
                4.<span className='text-orange-600 font-semibold'>Chatting App:</span>
                A real-time chat application using WebSockets.
              </div>

              <div>
                5.<span className='text-orange-600 font-semibold'>PhotoPholio:</span>
                A portfolio website for photographers.
              </div>

              <div>
                6.<span className='text-orange-600 font-semibold'>Personal Portfolio:</span>
                Showcasing my skills and projects.
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------Technical Skills-------------------------------------------------------- */}
        <div className="flex justify-center items-center flex-col">
          <div className="text-orange-500 font-semibold text-[1.2rem]">Technical Skills</div>
          <div className=' text-blue-950 w-[22rem] lg:w-[32rem]'>
            <div className='flex'>
              <img src='https://cdn-icons-png.flaticon.com/128/1271/1271269.png' alt='right' className="w-6 h-6 mr-2" />
              <div><span className='font-bold text-orange-600'>Frontend:</span>
                HTML,CSS,JavaScript,React.js, Tailwind, Bootstrap</div>
            </div>

            <div className='flex'>
              <img src='https://cdn-icons-png.flaticon.com/128/1271/1271269.png' alt='right' className="w-6 h-6 mr-2" />
              <div>
                <span className='font-bold text-orange-600'>Backend:</span>
                Node.js,Express.js,Django</div>
            </div>

            <div className='flex'>
              <img src='https://cdn-icons-png.flaticon.com/128/1271/1271269.png' alt='right' className="w-6 h-6 mr-2" />
              <div><span className='font-bold text-orange-600'>Database:</span>
                MongoDB,PostgreSQL,Firebase
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  )
}
