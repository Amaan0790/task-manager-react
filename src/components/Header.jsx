import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="p-3 text-bg-dark header-container">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none fs-3 me-4">
                        {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                            <use xlinkHref="#bootstrap"></use>
                        </svg> */}
                        Task Manager
                    </Link>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link to="/" className="nav-link px-2 text-white fs-5">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/create-task" className="nav-link px-2 text-white fs-5">
                                Create Task
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard" className="nav-link px-2 text-white fs-5">
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
