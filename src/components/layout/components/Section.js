import React from 'react'
import '../css/main.css'

export default function Section(props) {
    return (
        <div className="section">{props.children}</div>
    )
}
