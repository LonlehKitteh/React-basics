import React from 'react';
import '../../css/Home.css'
import RandomBackgroundTheme from '../layout/components/random/RandomBackgroundTheme'
import Section from '../layout/components/Section'
import Search from '../layout/components/Search';


export default function Home() {

    return (
        <React.Fragment>
            <Section>
                <div className='home-picture'></div>
                <RandomBackgroundTheme />
                <Search />
            </Section>
            <Section>
                <div>Home</div>
            </Section>
        </React.Fragment>
    )
}
