import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import React from 'react'

export default function Navigation() {
    return (
        <div className='nav'>
            <Link to="/" className='site-title'>React Basics</Link>
            <ul>
                <CustomLink to='/about'>About</CustomLink>
                <CustomLink to='/service'>Service</CustomLink>
            </ul>
        </div>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}