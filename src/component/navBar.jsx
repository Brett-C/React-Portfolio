import React from "react";
import { Link } from 'react-router-dom'

const data = [
    {
        label: 'About ME',
        to: '/'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },

    {
        label: 'Contact',
        to: '/contact'
    },
    {
        label: 'PORTFOLIO',
        to: '/portfolio'
    }

]
const Navbar = () => {
    return (
        <ul>
            {
                data.map((item, key) => (
                    <li key={key}>
                        <Link to={item.to}>
                            {item.label}
                        </Link>
                    </li>
                ))
            };
        </ul>
    )
}

export default Navbar;