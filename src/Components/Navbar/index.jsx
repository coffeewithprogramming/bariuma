import { Link } from 'react-router-dom';
import './navbar.css';


const NavBar = () =>{
    return (
      <nav>
        <Link to='/'>Home</Link>
        <ul>

          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/service'>Service</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    );
} 


export default NavBar;
