import React from 'react'
import "./ComponentStyle.css"
import "./Mediaquery.css"
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className={"navBar"}>
      <div className={"Profile-name-div"} >
        <img src="/myImage.jpg" alt="my-Image" className={"my-Image"} />
        <div class="mr-10">
          <div className={"myName"}>Harendrasinh.R.Parmar</div>
          <div className={"detailDiv"}>
            <p class="text-white font-thin"><span class="font-semibold">Mobile:</span> 9867775626</p>
            <p class="text-white font-thin"><span class="font-semibold">Email:</span> haren111990@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={"navItemsDiv"}>
        <Link to={"/"}>Home</Link>
        <Link to={"contact"}>Contact me</Link>
        <Link to={"/aboutUs"}>About me</Link>
        <a href="https://github.com/harendrasinp">
          <span>Github</span><img src="https://cdn-icons-png.flaticon.com/128/11376/11376339.png" alt="github" />
        </a>
      </div>
    </div>
  )
}
