import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/addUser'>Add User</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;