import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link exact to="/">
        <h1>Public API</h1>
      </Link>
      <ul>
        <li><Link to="/"><button>Home</button></Link></li>
        <li><Link to="/categories"><button>Categories</button></Link></li>
        <li><Link to="/random"><button>Random</button></Link></li>
      </ul>
    </div>
  )
}

export default Navbar;
