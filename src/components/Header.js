 import myImage from '../Assets/Logo.png'


const Header = (props) => {
    return (
        <nav className="nav"> 
            <a href='/'><img src={myImage} alt='logo' /></a>
            <ul>
                <li>
                    <a href="/packages">Packages</a>
                </li>
                <li>
                    <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            
        </nav>
        
    )
}

export default Header