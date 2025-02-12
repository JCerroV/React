import { Link } from 'react-router-dom'
import './../App.css'
import image1 from './../assets/istoc.jpg'
import image2 from './../assets/background1.webp'

export function Home(){
    return(
        <div className="home-container">
        <div className='home-div'style={{backgroundImage: `url(${image1})`}} >
            <h2>Verify your identity. Sign in. </h2>
            <Link to='/Login' className='home-button'>Log In</Link>
        </div>
        <div className='home-div' style={{backgroundImage: `url(${image2})`}}>
            <h2>Join Us. Create account.</h2>
            <Link to='/Signup' className='home-button'>Sign Up</Link>
        </div>
        </div>
    )

}