import landingpageimage from '../landingpageimage.jpg'
import { Link } from 'react-router-dom'
import './landingpaage.css'
const LandingPage = () => {
    return (
        <div className="landingpageContainer">
            <div className='imagecontainer'>
                <img className='imageland' src={landingpageimage}></img>
            </div>
            <div className='contentContainer'>
                <div className='iconContainer'>
                    <i className="fa-solid fa-bullseye fa-5x"></i>
                </div>

                <div className='welcometext'>Welcome to InstaClone</div>
                <button className='button'><Link className='linkstyle' to='/content'> Enter</Link></button>
            </div>
        </div>

    )
}
export default LandingPage;