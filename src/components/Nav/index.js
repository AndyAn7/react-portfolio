import { Link, NavLink } from 'react-router-dom';
import './index.scss';
// import InstaAndy from '../../assets/images/insta.webp';
// import AndyFace from '../../assets/images/face.webp';
// import LinkyPink from '../../assets/images/linkd.webp';
import AuthIMG from '../../assets/images/profilePic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faBeer,
    faUser,
    faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagramSquare, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons';

const Nav = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img className='sub-logo' src={AuthIMG} alt='author' />
            <div className='iconLinks'>
                {/* <img src={InstaAndy} alt='instagram' />
                <img src={AndyFace} alt='face' />
                <img src={LinkyPink} alt='linkd' /> */}
            </div>
        </Link>

        <nav>
            <NavLink exact='true' activeClassName='active' to='/'>
                <FontAwesomeIcon icon={faHome} />
            </NavLink>
            
            <NavLink exact='true' activeClassName='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faBeer} />
            </NavLink>
            
            <NavLink exact='true' activeClassName='active' to='/project'>
                <FontAwesomeIcon icon={faUser} />
            </NavLink>
            
            <NavLink exact='true' activeClassName='active' to='/about'>
                <FontAwesomeIcon icon={faUserAlt} />
            </NavLink>
        </nav>
        
        <ul>
            <li>
                    <a 
                    target='_blank'  
                    rel='noreferrer' 
                    href='https://www.instagram.com/ghengisan/'>
                    <FontAwesomeIcon icon={faInstagramSquare} />
                    </a>
                </li>
            <li>
                <a 
                target='_blank'  
                rel='noreferrer' 
                href='https://www.linkedin.com/in/andyrooh/'>
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
            <li>
                <a 
                target='_blank'  
                rel='noreferrer'                 
                href='https://github.com/AndyAn7'>
                <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
            <li>
                <a 
                target='_blank'  
                rel='noreferrer' 
                href='../Project'>
                <FontAwesomeIcon icon={faReact} />
                </a>
            </li>
        </ul>
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

