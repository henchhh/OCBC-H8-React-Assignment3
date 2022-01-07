import React from "react";

function Header(props) {
    return(
        <>
            <nav className="py-2 bg-light">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link link-dark px-2 active" aria-current="page">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="http://127.0.0.1:5000/articles" className="nav-link link-dark px-2">API</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <header className="py-3 mb-4 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                    <span className="col-12 col-lg-auto mb-3 mb-lg-0">
                        <img src={props.logo} className="App-logo" alt="logo" />
                    </span>
                    <a href="/" className="col-12 col-lg-auto mb-3 mb-lg-0 text-dark text-decoration-none">
                        <span className="fs-1">Project Kanban Board</span>
                    </a>
                    <span className="col-12 col-lg-auto mb-3 mb-lg-0">
                        <img src={props.logo} className="App-logo" alt="logo" />
                    </span>
                </div>
            </header>
        </>
    )
}

export default Header