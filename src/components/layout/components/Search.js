import React from 'react'
import Form from 'react-bootstrap/Form';

const Search = () => {
    return (
        <Form>
            <Form.Group className="d-flex">
                {/* icon place */}
                <Form.Control type="search" id="icon" placeholder="Search" className="me-2" aria-label="Search" />
            </Form.Group>
        </Form>
    )
}

export default Search