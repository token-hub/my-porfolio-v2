import { useRef } from 'react';
import { Link } from 'react-router';

function Navbar() {
    const collapseRef = useRef();
    function handleHome() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        handleCollapsible(true);
    }
    function handleCollapsible(checkNavbar = false) {
        if (checkNavbar) {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                collapseRef.current.click();
            }
            return;
        }
        collapseRef.current.click();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top bg-white text-primary">
            <div className="container">
                <Link to="/" onClick={handleHome} className="w-bolder fs-5 m-0 text-decoration-none text-primary">
                    &lt;JohnSuyang /&gt;
                </Link>
                <button
                    ref={collapseRef}
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li onClick={handleCollapsible} className="nav-item my-2">
                            <Link to="/#about-me" className="nav-link">
                                About
                            </Link>
                        </li>
                        <li onClick={handleCollapsible} className="nav-item my-2">
                            <Link to="/#projects" className="nav-link">
                                Projects
                            </Link>
                        </li>
                        <li onClick={handleCollapsible} className="nav-item my-2">
                            <Link to="/#skills" className="nav-link">
                                Skills
                            </Link>
                        </li>
                        <li onClick={handleCollapsible} className="nav-item my-2">
                            <Link to="/#certificates" className="nav-link">
                                Certificates
                            </Link>
                        </li>
                        <li onClick={handleCollapsible} className="nav-item my-2">
                            <Link to="/#contact-me" className="nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
