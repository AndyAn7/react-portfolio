import Nav from '../Nav';
import profilePic from '../../assets/images/profilePic.png';

const Header = () => {
    return (   
    <>
        <header>
            <Nav />
        </header>

        <section className="intro">

            <img src={ profilePic } alt="profile" />

            <p className="authName">
                Andrew M. An
            </p>
            
         </section>
    </>
    )
}

export default Header;