import React from 'react'
import "./ComponentStyle.css"
import "./Mediaquery.css"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const animationfunc=()=>{
    const divname=document.querySelector(".downloads");
    divname.classList.add("opnAnimation");
    setTimeout(()=>{
      divname.classList.remove("opnAnimation")
    },3000)
}
  return (
    <div className={"navBar"}>
      <div className={"Profile-name-div"} >
        <img src="/myImage.jpg" alt="my-Image" />
        <div className="detailContainer">
          <div className={"myName"}>Harendrasinh.R.Parmar</div>
          <div className={"detailDiv"}>
            <p className="text-white font-thin"><span className="font-semibold">Mobile:</span> 9867775626</p>
            <p className="text-white font-thin"><span className="font-semibold">Email:</span> haren111990@gmail.com</p>
            <hr />
          </div>
        </div>
      </div>
      <div className={"navItemsDiv"}>
        <div className={"navbarItem"}>
          <Link to={"/"}>Home</Link>
          <Link to={"contact"}>Contact me</Link>
          <Link to={"/aboutUs"}>About me</Link>
          <a href="https://github.com/harendrasinp">
            <span>Github</span><img src="https://cdn-icons-png.flaticon.com/128/11376/11376339.png" alt="github" />
          </a>
        </div>
        <div className={"downloadsDiv"}>
          <div onClick={animationfunc} className={"downloads"}>
            <a href="./public/pdf/Resumes/HarendrasinhResume2025.pdf" download="Harendrasinh-Resume.pdf">Download
            <img src="https://cdn-icons-png.flaticon.com/128/2311/2311512.png" alt="downloads"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
