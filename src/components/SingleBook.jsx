import { Card, Col, Container, Row } from "react-bootstrap"

function SingleBook ({ book}) {
return (

    <Container>
        <Row>
            <Col xs={12} className="d-flex align-items-center justify-content-start">
                <Card className='single-book book-card'>
                        <Card.Img className='card-img-top' variant="top" src={book.img} />
                        <Card.Body className='card-body' style={{ width: '200px' }}>
                            <Card.Title className='card-title'>{book.title}</Card.Title>
                            <div className='d-flex align-items-center gap-2'>
                            </div>
                        </Card.Body>
                    </Card>
            </Col>
       </Row>
    </Container>

)
}

export default SingleBook