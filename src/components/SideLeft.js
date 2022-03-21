import React from 'react'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/css/SideLeft.css'

import { Link } from 'react-router-dom'

function SideLeft() {
    return(
        <div className="side-left">
            <div className="link">
                <Link to="/products" exact="true">
                    <div className="option">
                        <span className="iconify" data-icon="bx:store" data-width="30"></span>
                        <p>Productos</p>
                    </div>
                </Link>
            </div>
            <div className="link">
                <Link to="/users" exact="true">
                    <div className="option">
                        <span className="iconify" data-icon="bxs:user" data-width="30"></span>
                        <p>Usuarios</p>
                    </div>
                </Link>
            </div>
            <div className="link">
                <Link to="/ends" exact="true">
                    <div className="option">
                        <span className="iconify" data-icon="emojione-monotone:new-button" data-width="30"></span>
                        <p>Últimos</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SideLeft;
