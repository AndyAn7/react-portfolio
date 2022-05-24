import './index.scss';
// import Link from '../About/index.js';

const Links = () => {
    return (
        <>
            <nav className="main">
                <ul>
                    {/* <Link to="../About">About</Link> */}
                    {/* <li><Link to="../About/index.js">About</Link></li> */}
                    <li><a href="About">About</a></li>
                    <li><a href="Github">GitHub</a></li>
                    <li><a href="LinkedIn">LinkedIn</a></li>
                    <li><a href="Resume">Resume</a></li>
                    <li><a href="Contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Links;