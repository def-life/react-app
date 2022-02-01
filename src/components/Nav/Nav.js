import "./nav.css";
import {NavLink} from "react-router-dom";

export default function Nav() {
   
    return (
        <nav className="nav">
            <ul className="nav-list">
              <NavLink to="/films">Films</NavLink>
              <NavLink to="/people">People</NavLink>
              <NavLink to="/planets">Planets</NavLink>
           
            </ul>
        </nav>
    );
}