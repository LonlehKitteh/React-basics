import React from 'react'
import Form from 'react-bootstrap/Form';

const Search = () => {
    return (
        <div className='search'>
            <div className='search-title'></div>
            <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            </Form>
        </div>
    )
}

export default Search