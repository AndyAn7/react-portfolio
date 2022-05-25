import { Link } from 'react-router-dom';
import './index.scss';
import InstaAndy from '../../assets/images/insta.webp';
import AndyFace from '../../assets/images/face.webp';
import LinkyPink from '../../assets/images/linkd.webp';

const Nav = () => (
    <div className='navbar'>
        <Link className='logo' to='/'>
            <img src={InstaAndy} alt='instagram' />
            <img src={AndyFace} alt='face' />
            <img src={LinkyPink} alt='linkd' />
        </Link>
    </div>
)

export default Nav;
 
 
    // <>
    //     <nav className='navList'>
    //         <ul>
    //             <li><a href="#aboutModal">About</a></li>
                
    //             <li><a href="#Github">GitHub</a></li>
                
    //             <li><a href="#LinkedIn">LinkedIn</a></li>
                
    //             <li><a href="#Resume">Resume</a></li>
                
    //             <li><a href="#Contact">Contact</a></li>
    //         </ul>
    //     </nav>
    // </>

