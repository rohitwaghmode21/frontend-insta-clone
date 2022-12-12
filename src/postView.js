import React , {useState,useEffect}from "react"
import axios from "axios"
import "./postview.css"
import Card from "./card";
import { Link } from 'react-router-dom'
const FetchData = () =>
{
    const [data,setData]=useState([]);
    useEffect(()=>{
        const getData = async () => {
            //const response = await axios.get('./data.json');
           
                const response=await axios.get("https://rohitn-instaclone.onrender.com/post");
                //console.log(data)
                response.data.reverse()
           
            setData(response.data);
            //console.log(response.data)
          };
          getData();

    },[])
    return(
        
        <div className="maincontainer">
            <div className="header">
                <div className="nameContainer">
                    <span><i className="fa-solid fa-bullseye fa-2xl"></i></span>
                    
                    <span className="pageName">InstaClone</span>
                </div>
                <div className="camIcon">
                    <span><button className='button addpost'><Link className='linkstyle' to='/form'> +</Link></button></span>
                <i className="fa-brands fa-instagram fa-2xl"></i>
                </div>
            </div>
             {
                data.map((dat,i)=>{
                    //console.log(i)
                    return(
                    <Card  userInfo={dat} key={i}/>
                    )
                })
            }  
        </div>
        
    )
}
export default FetchData