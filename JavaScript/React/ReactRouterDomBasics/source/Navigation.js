import React from 'react';
import { Link, Outlet } from "react-router-dom";


function Navigation() {
    return (
        <div>
            <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/part-one">Part One</Link></li>
                    <li><Link to="/part-two">Part Two</Link></li>
                </ul>
            </nav>;
            <Outlet />
        </div>
    )
}

export default Navigation;