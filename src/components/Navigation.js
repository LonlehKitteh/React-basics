import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import links from './data/links.json';
import '../css/Navigation.css';
import Search from './layout/components/Search';
import Button from 'react-bootstrap/esm/Button';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleNavigation = () => window.scrollY ? setIsScrolled(true) : setIsScrolled(false)

        window.addEventListener('scroll', handleNavigation)

        return () => {
            window.removeEventListener('scroll', handleNavigation)
        }
    })

    return (
        <Navbar className={isScrolled ? 'scrolled' : ''} expand="lg" fixed="top">
            < Container fluid >
                <Navbar.Brand><Link to='/'>Logo</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                    >
                        {links.map((link, key) => {
                            if (link.pages) {
                                return <NavDropdown key={key} title={link['main-link']} id="navbarScrollingDropdown">
                                    {
                                        link.pages.map((page, index) => {
                                            return (
                                                <React.Fragment key={`${key}-${index}`}>
                                                    <CustomLink to={`/${page.toLowerCase()}`}>
                                                        <NavDropdown.Item as='div'>
                                                            {page}
                                                        </NavDropdown.Item>
                                                    </CustomLink>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </NavDropdown>
                            }
                            return (
                                <Nav.Link key={key} as="div" className='px-2'>
                                    <CustomLink to={link['main-link'].toLowerCase() === 'home' ? '/' : `/${link['main-link'].toLowerCase()}`}>{link['main-link']}</CustomLink>
                                </Nav.Link>
                            )
                        })}
                    </Nav>
                    <Search isScrolled={isScrolled}/>
                        <Button variant='primary'>Login</Button>
                        <Button variant='danger'>LogOut</Button>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return <Link className={isActive ? "active" : ""} to={to} {...props}>{children}</Link>
}