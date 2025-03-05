import React from 'react'
import "./ComponentStyle.css"
import "./Mediaquery.css"
export const Home = () => {
    return (
        <div className={"homeContainer"}>
            <div className={"infoBox"} >
                <div className={"info-title"}>Technologies</div>
                <div className={"techno-Batch"}>
                    <img src="https://cdn-icons-png.flaticon.com/128/1087/1087840.png" alt="techno" />
                </div>
                <div className={"tech-list"}>
                    <div className={"tech"}>
                        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="js" /><span>Javascript</span>
                    </div>
                    <div className={"tech"}>
                        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968267.png" alt="html" /><span>HTML5</span>
                    </div>
                    <div className={"tech"}>
                        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968267.png" alt="css" /><span>Css</span>
                    </div>
                    <div className={"tech"}>
                        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png" alt="btrap" /><span>Bootstrap</span>
                    </div>
                    <div className={"tech"}>
                        <img src="https://cdn-icons-png.flaticon.com/128/15772/15772797.png" alt="react" /><span>React.js</span>
                    </div>
                    <div className={"tech"}>
                        <img src="https://youteam.io/blog/wp-content/uploads/2022/04/expressjs_logo.png" alt="express" /><span>Express.js</span>
                    </div>
                    <div className={"tech"}>
                        <img src="https://cdn-icons-png.flaticon.com/128/919/919825.png" alt="Node.js" /><span>Node.js</span>
                    </div>
                    <div className={"tech"}>
                        <img src="https://cdn-icons-png.flaticon.com/128/9698/9698555.png" alt="mongodb" /><span>MongoDb</span>
                    </div>
                    <div className={"tech"}>
                        <img src="https://cdn-icons-png.flaticon.com/128/919/919852.png" alt="python" /><span>Python</span>
                    </div>
                    <div className={"tech"}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" alt="tailwind" /><span>TailwindCss</span>
                    </div>
                </div>
            </div>
            <div className={"infoBox"} >
                <div className={"info-title"}>Projects</div>
                <div className={"Project"}>
                    <img src="https://cdn-icons-png.flaticon.com/128/4257/4257674.png" alt="Project" />
                </div>
                <div>
                    <p class=" rounded-md p-1 text-blue-950  mb-1 hover:text-white"><a href="https://buy-busy-ten.vercel.app/"> BuBusy-Online Shoping App</a></p>
                    <p class=" rounded-md p-1 text-blue-950  mb-1 hover:text-white"><a href="https://vayuphotopholio.netlify.app/"> Photofolio-Online album App</a></p>
                    <p class=" rounded-md p-1 text-blue-950  mb-1 hover:text-white"><a href="https://vayuchatterup.netlify.app/"> ChatterUp-Online Chatting App</a></p>
                </div>
            </div>
            <div className={"infoBox"}>
                <div className={"info-title"} id='achivment'>Achievements</div>
                <div className={"award"}>
                    <img src="https://cdn-icons-png.flaticon.com/128/11881/11881960.png" alt="award" />
                </div>
                <div>Process in Deployment</div>
            </div>
            
        </div>
    )
}
