function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top bg-white text-primary">
            <div className="container">
                <a className="navbar-brand" href="#"></a>
                <a href="/" className="w-bolder fs-5 m-0 text-decoration-none text-primary">
                    &lt;JohnSuyang /&gt;
                </a>
                <button
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
                        <li className="nav-item my-2">
                            <a href="#about-me" className="nav-link" aria-current="page">
                                About
                            </a>
                        </li>
                        <li className="nav-item my-2">
                            <a href="#projects" className="nav-link">
                                Projects
                            </a>
                        </li>
                        <li className="nav-item my-2">
                            <a href="#skills" className="nav-link">
                                Skills
                            </a>
                        </li>
                        <li className="nav-item my-2">
                            <a href="#certificates" className="nav-link">
                                Certificates
                            </a>
                        </li>
                        <li className="nav-item my-2">
                            <a href="#contact-me" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
