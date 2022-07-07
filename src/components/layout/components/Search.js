import React from 'react'
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = (props) => {
    return (
        <Form>
            <Form.Group className="d-flex">
                <Form.Control type="search" id="icon" placeholder="Search" className="me-2" aria-label="Search" />
                <Form.Label htmlFor='icon' className='search-btn'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" className='search-btn' inverse={!props.isScrolled} />
                </Form.Label>
            </Form.Group>
        </Form>
    )
}

export default Search