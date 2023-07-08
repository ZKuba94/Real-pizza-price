import {Col, Container, Form, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import React from "react";

function PizzaResultNumbers({
                                actPizzaMeasure,
                                actPizzaCurrency,
                                pizzaSize,
                                pizzaQuantity,
                                pizzaPrice,
                            }) {
    const r = pizzaSize / 2
    const areaOfPizza = ((Math.PI * (r ** 2)).toFixed(2)) * pizzaQuantity
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
                                        value={areaOfPizza}
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
                                        value={(pizzaPrice / areaOfPizza).toFixed(4)}
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