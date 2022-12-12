import "./card.css"
import images from "./10x.png"
import images2 from "./nature.jpg"
import images3 from "./airline.jpg"
import { useState } from "react"
const Card = (Props) => {
    //console.log(Props);
    const [like,setLike]=useState(false);
    let click=false;
    // console.log(typeof(Props.userInfo.name),Props.userInfo.name,Props.userInfo.name.trim().toString()==image.Siva)
    return (

        <div className="cardContainer">
            <div className="imageHeader">
                <div className="imgNameContainer">
                    <div><b>{Props.userInfo.name}</b></div>
                    <div>{Props.userInfo.location}</div>
                </div>
                <div className="dotContainer"><i className="fa-solid fa-ellipsis"></i></div>
            </div>
            <div className="imgcontainer">
                <img className="image" src={Props.userInfo.image.url} alt=""></img>
            </div>
            <div className="reactionContainer">
                <div className="reactions">
                    <div>
                        <button className="heartcontainer" onClick={()=>{setLike(!like)}}><i className={`fa-${like?"solid":"regular"} fa-heart fa-lg`}></i></button>
                        <span><i className="fa-regular fa-paper-plane fa-lg"></i></span>
                    </div>
                    <div className="likesContainer">
                        {Props.userInfo.likes}  likes
                    </div>

                </div>
                <div className="dateContainer">
                    {Props.userInfo.date}
                </div>
            </div>
            <div className="descriptionContainer">
                <b>{Props.userInfo.description}</b>
            </div>

        </div>

    )
}
export default Card