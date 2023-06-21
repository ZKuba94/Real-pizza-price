import {Col, Container, Form, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import React from "react";

function PizzaResultNumbers({pizzaSize, actPizzaMeasure, actPizzaCurrency}) {

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
                                        value={3.14 * (parseFloat(pizzaSize) / 2)}
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