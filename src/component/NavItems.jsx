import React from 'react'
import { Link } from 'react-router-dom'
import "./NavItem.css"
export const NavItems = () => {
    return (
        <div>
            <div className={"navbarItem"}>
                <div><Link to={"/"}>Home</Link></div>
                <div><Link to={"contact"}>Contact me</Link></div>
                <div><Link to={"/aboutUs"}>About me</Link></div>
                <div>
                    <a href="https://github.com/harendrasinp">
                        <span>Github</span><img src="https://cdn-icons-png.flaticon.com/128/11376/11376339.png" alt="github" />
                    </a>
                </div>
            </div>
        </div>
    )
}
