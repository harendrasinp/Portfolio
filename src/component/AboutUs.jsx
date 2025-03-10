import React from 'react'
export const AboutUs = () => {
  return (
    <div className='mt-[14.8rem] lg:mt-0 lg:flex justify-center h-[40rem] w-full'>

      <div className='w-[24.4rem] h-[50rem] bg-black/50 backdrop-blur lg:w-[50rem] lg:mt-[1rem] lg:h-[35rem] bg-slate-500'data-aos="zoom-in">

        {/* ----------------------------About me-------------------------------------------------------- */}
        <div className="flex justify-center flex-col items-center">
          <div className="text-orange-500 text-[1.2rem] font-semibold lg:text-[1.5rem] lg:font-semibold">About Me</div>
          <div className=" text-yellow-100 w-[22rem] text-justify lg:w-[40rem]">
            I am a passionate and skilled Full-Stack Developer with a strong background in Computer Science. I have always been enthusiastic about building scalable and efficient web applications that enhance user experience.
          </div>
        </div>

        {/* ----------------------------Education and Training-------------------------------------------------------- */}
        <div className="flex justify-center items-center flex-col">
          <div className="text-orange-500 font-semibold text-[1.2rem]">Education & Training</div>
          <div className='text-yellow-100 w-[22rem] lg:w-[28rem]'>Master’s in Computer Science from Mumbai University (2015).</div>
          <div className='text-yellow-100 w-[22rem] lg:w-[28rem]'>Full-Stack Development Training from Coding Ninja's(2024).</div>
        </div>
        {/* ----------------------------Projects I Have Built-------------------------------------------------------- */}
        <div className="flex justify-center items-center flex-col">
          <div className="text-orange-500 font-semibold text-[1.2rem]"> Projects I Have Built</div>
          <div className='text-yellow-100 w-[22rem] lg:w-[32rem]'>
            <div className="">

              <div>
                1.<span className=''>Online Shopping Platform:</span>
                A feature-rich e-commerce application.
              </div>

              <div>
                2.<span className=''>Online Job Portal:</span>
                A platform connecting job seekers and recruiters.
              </div>

              <div>
                5.<span className=''>Chatting App:</span>
                A real-time chat application using WebSockets.
              </div>

              <div>
                3.<span className=''>PhotoPholio:</span>
                A portfolio website for photographers.
              </div>

              <div>
                4.<span className=''>Personal Portfolio:</span>
                Showcasing my skills and projects.
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------Technical Skills-------------------------------------------------------- */}
        <div className="flex justify-center items-center flex-col">
          <div className="text-orange-500 font-semibold text-[1.2rem]">Technical Skills</div>
          <div className=' text-yellow-100 w-[22rem] lg:w-[32rem]'>
            <div className='flex'>
              <img src='https://cdn-icons-png.flaticon.com/128/1271/1271269.png' alt='right' className="w-6 h-6 mr-2" />
              <div><span className='font-bold text-yellow-300'>Frontend:</span>
                HTML,CSS,JavaScript,React.js, Tailwind, Bootstrap</div>
            </div>

            <div className='flex'>
              <img src='https://cdn-icons-png.flaticon.com/128/1271/1271269.png' alt='right' className="w-6 h-6 mr-2" />
              <div>
                <span className='font-bold text-yellow-300'>Backend:</span>
                Node.js,Express.js,Django</div>
            </div>

            <div className='flex'>
              <img src='https://cdn-icons-png.flaticon.com/128/1271/1271269.png' alt='right' className="w-6 h-6 mr-2" />
              <div><span className='font-bold text-yellow-300'>Database:</span>
                MongoDB,PostgreSQL,Firebase
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
