import React, { useState } from 'react'

const RandomBackgroundTheme = () => {
    const [random, setRandom] = useState('orange')

    setTimeout(() => {
        setRandom(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
    }, 5000)

    return (
        <div style={{ backgroundColor: random }} className='random-background-theme'></div>
    )
}

export default RandomBackgroundTheme