import React from 'react'
import "./ComponentStyle.css"
import "./Mediaquery.css"
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className={"navBar"}>
      <div  className={"Profile-name-div"} >
        {/* <div className={"my-Image"}> */}
          <img src="/myImage.jpg" alt="my-Image" className={"my-Image"}/>
        {/* </div> */}
        <div className={"myName"}>Harendrasinh.R.Parmar</div>
      </div>
      <div className={"navItemsDiv"}>
        <Link to={"/"}>Home</Link>
        <Link to={"contact"}>Contact me</Link>
        <Link to={"/aboutUs"}>About me</Link>
        <a href="https://github.com/harendrasinp">
          <span>Github</span><img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="github" />
        </a>
      </div>
    </div>
  )
}
