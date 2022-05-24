import 'animate.css';
import './index.scss'
import Nav from '../Nav';
import profilePic from '../../assets/images/profilePic.png';

const Header = () => {
    return (   
    <>
        <header>
            <Nav />
                <section className="intro">
                    <img src={ profilePic } alt="profile" />

                    <p className="authName">
                        Andrew M. An
                    </p>
                </section>
         </header>
    </>
    )
}

export default Header;