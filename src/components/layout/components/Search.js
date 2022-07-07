import React from 'react'
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    return (
        <div className='search'>
            <div className='search-title'></div>
            <Form>
                <Form.Group className="d-flex">
                    <Form.Label htmlFor='icon' className='search-btn'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" className='search-btn' />
                    </Form.Label>
                    <Form.Control type="search" id="icon" placeholder="Search" className="me-2" aria-label="Search" />
                </Form.Group>
            </Form>
        </div>
    )
}

export default Search