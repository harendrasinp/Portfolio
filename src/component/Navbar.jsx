import "./ComponentStyle.css"
import "./Mediaquery.css"
import { Download } from './Download'
import { NavItems } from "./NavItems"

export const Navbar = () => {

  return (
    <div>
      <div className={"navBar"}>
        <div className={"Profile-name-div"} >
          <img src="/myImage.jpg" alt="my-Image" />
          <div className="detailContainer ">
            <div className={"detailDiv"}>
              <div className='text-[20px] font-semibold text-orange-600'>Harendrasinh.R.Parmar</div>
              <div className='text-gray-50 font-semibold'>Mobile: 9867775626</div>
              <div className='text-gray-50 font-semibold'>Email:haren111990@gmail.com</div>
              <hr />
            </div>
          </div>
        </div>
        <NavItems/>
      </div>
      <Download />
    </div>
  )
}
