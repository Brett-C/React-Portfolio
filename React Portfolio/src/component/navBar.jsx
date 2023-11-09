import React from "react";
import { Link } from 'react-router-dom'

const data = [
    {
        label: 'ABOUT ME',
        to: '/'
    },
    {
        label: 'PORTFOLIO',
        to: '/portfolio'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    },
    {
        label: 'RESUME',
        to: '/resume'
    }


]
const Navbar = () => {
    return (
        <ul className="nav">
            {
                data.map((item, key) => (
                    <li key={key} className="nav">
                        <Link className="nav" to={item.to}>
                            {item.label}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default Navbar;