import React from 'react'
import '../../css/Home.css'
import RandomBackgroundTheme from '../layout/random/RandomBackgroundTheme'
import Section from '../layout/Section'

export default function Home() {

    return (
        <React.Fragment>
            <Section>
                <div className="home-picture" />
                <RandomBackgroundTheme />
            </Section>
            <Section>
                <div>Home</div>
            </Section>
        </React.Fragment>
    )
}
