
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className='nav-list'>
                    <li><Link to='/singleItem'>
                    Single Item
                    </Link>
                    </li>
                    
                 
                  <li>
                  <Link to='/multipleItems'>
                    Multiple Items
                    </Link>
                    </li>
                    
                    
                    <li>
                    <Link to='/'>
                    Fade Auto
                    </Link> 
                    </li>
                    
                                      
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;