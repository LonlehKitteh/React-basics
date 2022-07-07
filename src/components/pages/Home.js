import React from 'react';
import '../../css/Home.css'
import RandomBackgroundTheme from '../layout/components/random/RandomBackgroundTheme'
import Section from '../layout/components/Section'


export default function Home() {

    return (
        <React.Fragment>
            <Section>
                <div className='home-picture'></div>
                <RandomBackgroundTheme />
                <div className='search-title'></div>
            </Section>
            <Section>
                <div>Home</div>
            </Section>
        </React.Fragment>
    )
}
