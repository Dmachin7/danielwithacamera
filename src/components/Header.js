 import myImage from '../Assets/Logo.png'


const Header = (props) => {
    return (
        <nav className="nav"> 
            <img src={myImage} alt='logo' />
            
        </nav>
        
    )
}

export default Header