import React from 'react'
export const AboutUs = () => {
  return (
    <div className="flex justify-center items-center">
      <div className=" md:mt-[0.5rem] bg-gray-500 w-[60rem] mt-60 flex  justify-center items-center flex-col" data-aos="zoom-in">
        {/* ----------------------------About me-------------------------------------------------------- */}
        <div className=" text-orange-50  text-center w-5/6">
          <div className="text-orange-500 font-bold text-xl">About Me</div>
          <p className="text-justify">
            I am a passionate and skilled Full-Stack Developer with a strong background in Computer Science. I have always been enthusiastic about building scalable and efficient web applications that enhance user experience.
          </p>
        </div>

        {/* ----------------------------Education and Training-------------------------------------------------------- */}
        <div className=" text-orange-50 text-center w-5/6 ">
          <div className="text-orange-500 font-bold text-xl"> Education & Training</div>
          <p className="text-justify">
            Master’s in Computer Science from Mumbai University (2015).<br />
            Full-Stack Development Training from Coding Ninjas(2024).
          </p>
        </div>

        {/* ----------------------------Projects I Have Built-------------------------------------------------------- */}
        <div className=" text-orange-50 w-5/6 text-center">
          <div className="text-orange-500 font-bold text-xl"> Projects I Have Built</div>
          <ol className="list-decimal list-inside text-orange-50 text-justify ">
            <li><span className='font-bold text-yellow-300'>Online Shopping Platform :</span>  A feature-rich e-commerce application.</li>
            <li><span className='font-bold text-yellow-300'>Online Job Portal :</span>  A platform connecting job seekers and recruiters.</li>
            <li><span className='font-bold text-yellow-300'>PhotoPholio :</span>  A portfolio website for photographers.</li>
            <li><span className='font-bold text-yellow-300'>Chatting App : </span>  A real-time chat application using WebSockets.</li>
            <li><span className='font-bold text-yellow-300'>Personal Portfolio :</span>  Showcasing my skills and projects.</li>
          </ol>
        </div>
        {/* ----------------------------Technical Skills-------------------------------------------------------- */}
        <div className=" text-orange-50 w-5/6 text-center">
          <div className="text-orange-500 font-bold text-xl">Technical Skills</div>
          <ol className="text-justify">

            <li className='flex'>
              <img src='https://cdn-icons-png.flaticon.com/128/1271/1271269.png' alt='right' className="w-6 h-6 mr-2"/>
              <div className='inline-block'><span className='font-bold text-yellow-300'>Frontend:</span>
              HTML,CSS,JavaScript,React.js,Redux,ReduxToolkit,Tailwind CSS,Bootstrap</div>
            </li>

            <li className='flex'>
              <img src='https://cdn-icons-png.flaticon.com/128/1271/1271269.png' alt='right' className="w-6 h-6 mr-2"/>
              <div className='inline-block'>
              <span className='font-bold text-yellow-300'>Backend:</span>
              Node.js,Express.js,Django</div>
            </li>

            <li className='flex'>
              <img src='https://cdn-icons-png.flaticon.com/128/1271/1271269.png' alt='right' className="w-6 h-6 mr-2"/>
              <div className='inline-block'><span className='font-bold text-yellow-300'>Database:</span>
              MongoDB,PostgreSQL,Firebase
              </div>
            </li>
          </ol>
        </div>

      </div>
    </div>
  )
}
