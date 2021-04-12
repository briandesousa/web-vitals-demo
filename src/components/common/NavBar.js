import { NavLink } from 'react-router-dom';

import './NavBar.css';

function NavBar() {

    const isHomeActive = (_match, location) => {
        if (!location) return false;
        const { pathname } = location;
        return pathname === "/";
    }

    return (
        <ul>
            <li>
                <NavLink to="/" activeClassName="activeNavItem" isActive={isHomeActive}>Home</NavLink>
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
