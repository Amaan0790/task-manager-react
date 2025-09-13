import React from 'react'
import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" footer-container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top w-100">
                <div className="container col-md-4 d-flex align-items-center justify-content-between w-100">

                    <span className="mb-3 mb-md-0 text-body-secondary">© 2025
                    </span>
                    <span className="mb-3 mb-md-0 text-body-secondary">Edumix Technologies Pvt Ltd
                    </span>
                    <span className="mb-3 mb-md-0 text-body-secondary">Made with <FaHeart />
                    </span>
                </div>

            </footer>
        </div>
    )
}

export default Footer
