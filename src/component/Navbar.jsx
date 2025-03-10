import "./ComponentStyle.css"
import "./Mediaquery.css"
import { Download } from './Download'
import { Link} from "react-router-dom"


export const Navbar = () => {

  return (
    <div>
      <div className={"navBar"}>
        <div className={"Profile-name-div"} >
          <img src="/myImage.jpg" alt="my-Image" />
          <div className="detailContainer ">
            <div className={"detailDiv"}>
              <div className='text-[25px] font-semibold text-orange-500'>Harendrasinh.R.Parmar</div>
              <div className='text-gray-50'>Mobile: 9867775626</div>
              <div className='text-gray-50'>Email:haren111990@gmail.com</div>
              <hr />
            </div>
          </div>
        </div>
        <div className="navAndDownload">
          <div className={"navbarItem"}>
            <div><Link to={"/"}>Home</Link></div>
            <div><Link to={"contact"}>Contact me</Link></div>
            <div><Link to={"/aboutUs"}>About me</Link></div>
            <div className="gitDiv">
              <a href="https://github.com/harendrasinp">
                <span>Github</span><img src="https://cdn-icons-png.flaticon.com/128/11376/11376339.png" alt="github" />
              </a>
            </div>
          </div>
          <div className={"hidden md:block w-fit ml-auto mr-auto"}>
            <Download/>
          </div>
        </div>
      </div>

    </div>
  )
}
