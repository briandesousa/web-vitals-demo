import { NavLink } from 'react-router-dom';

import './NavBar.css';

function NavBar() {

  return (
      <ul>
          <li>
              <NavLink to="/home" activeClassName="activeNavItem">Home</NavLink>
          </li>
          <li>
              <NavLink to="/ourwork" activeClassName="activeNavItem">Our Work</NavLink>
          </li>
          <li>
              <NavLink to="/getestimate" activeClassName="activeNavItem">Get Estimate</NavLink>
          </li>
      </ul>
  );
}

export default NavBar;
