import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink to="/entries" className="nav-link">Journal</NavLink>
            <NavLink to="/newEntry" className="nav-link">Add Entry</NavLink>
            <NavLink to="/stats" className="nav-link">Stats</NavLink>
        </nav>
    )
};

export default NavBar;