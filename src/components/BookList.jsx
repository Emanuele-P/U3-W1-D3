import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

function BookList({ booksData }) {

    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const filteredBooks = booksData.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()))

    return (

        <div>
        <Form>
          <Form.Group as={Row} controlId="searchTerm">
            <Form.Label column sm={2}>Search:</Form.Label>
            <Col lg={4}>
              <Form.Control
                type="text"
                placeholder="Search by title"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </Col>
          </Form.Group>
        </Form>
        <div className="d-flex flex-wrap">
          {filteredBooks.map(book => (
            <SingleBook key={book.asin} book={book} />
          ))}
        </div>
      </div>
    );

}

export default BookList