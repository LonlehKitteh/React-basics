import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import links from './data/links.json';
import '../css/Navigation.css';

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
        <Navbar bg={isScrolled ? 'dark' : 'light'} expand="lg" sticky="top">
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
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="success">Search</Button>
                    </Form>
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