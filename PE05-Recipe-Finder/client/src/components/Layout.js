import { NavLink, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="container mt-4">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Recipe Finder</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                                    to="/add"
                                >
                                    Add Recipe
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Page Content */}
            <Outlet />
        </div>
    );
}

export default Layout;
