import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/ourwork">Our Work</Link>
          </li>
          <li>
              <Link to="/getestimate">Get Estimate</Link>
          </li>
      </ul>
    </nav>
  );
}

export default NavBar;
