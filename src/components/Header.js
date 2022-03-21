import React from 'react'
import '../assets/css/Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header-container">
                <Link to="/" exact="true">
                    <header className="header">
                        <img src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1646243348/NOMBRE_BLANCO_cfqiej.png" className="logo" alt="logo" />
                        <span className="slash-header">|</span>
                        <span className="title-header">Dashboard</span>
                    </header>
                </Link>
        </div>
    )
}

export default Header;
