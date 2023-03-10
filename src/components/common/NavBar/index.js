import React from 'react'
import './NavBar.css';
import { NavLink } from 'react-router-dom';
function NavBar() {
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <div>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        Top Nav
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li>
                            <NavLink
                                to="/"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Contact
                            </NavLink>
                        </li>

                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </ div>
    )
}

export default NavBar