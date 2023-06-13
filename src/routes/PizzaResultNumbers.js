import {Col, Container, Form, ListGroup, ListGroupItem, Row} from "react-bootstrap";

function PizzaResultNumbers({ actPizzaSize, actPizzaMeasure, actPizzaCurrency}) {

    return (
        <Container className='PizzaResultNumbers'>
            <ListGroup>
                <Row>
                    <Form>
                        <ListGroupItem>
                            <Form.Group as={Row}>
                                <Col>
                                    <Form.Control
                                        name='area result'
                                        type='number'
                                        // value={countedPrice}
                                        readOnly
                                    />
                                </Col>
                                <Col>
                                    <Form.Text>
                                        {actPizzaMeasure}<sup>2</sup>
                                    </Form.Text>
                                </Col>
                            </Form.Group>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Form.Group as={Row}>
                                <Col>
                                    <Form.Control
                                        name='total pizza price'
                                        type='number'
                                        readOnly
                                        // value={totalPizzaPrice}
                                    />
                                </Col>
                                <Col>
                                    <Form.Text>
                                        {actPizzaCurrency}
                                        /{actPizzaMeasure}<sup>2</sup></Form.Text>
                                </Col>
                            </Form.Group>
                        </ListGroupItem>
                    </Form>
                </Row>
            </ListGroup>
        </Container>
    )
}

export default PizzaResultNumbers;