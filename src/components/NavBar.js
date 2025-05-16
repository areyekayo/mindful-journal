import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink to="/entries">Journal</NavLink>
            <NavLink to="/newEntry">Add Entry</NavLink>
        </nav>
    )
};

export default NavBar;