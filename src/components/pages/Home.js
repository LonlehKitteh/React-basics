import React, { useState, useEffect } from 'react';
import '../../css/Home.css'
import RandomBackgroundTheme from '../layout/random/RandomBackgroundTheme'
import Section from '../layout/Section'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Home() {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleNavigation = () => window.scrollY ? setIsScrolled(true) : setIsScrolled(false)

        window.addEventListener('scroll', handleNavigation)

        return () => {
            window.removeEventListener('scroll', handleNavigation)
        }
    })

    return (
        <React.Fragment>
            <Section>
                <div className={`home-picture ${isScrolled ? 'scrolled' : ''}`}>
                <Form className="d-flex">
                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="success">Search</Button>
                </Form>
                </div>
                <RandomBackgroundTheme />
            </Section>
            <Section>
                <div>Home</div>
            </Section>
        </React.Fragment>
    )
}
