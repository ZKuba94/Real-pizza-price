import {Col, Container, Form, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import React from "react";

function PizzaResultNumbers({
                                index,
                                actPizzaMeasure,
                                actPizzaCurrency,
                                pizzaSize,
                                pizzaQuantity,
                                pizzaPrice,
                                pizzaCompareObj,
                                onPizzaCompareChange,
                            }) {
    const r = pizzaSize / 2
    const areaOfPizza = ((Math.PI * (r ** 2)).toFixed(2)) * pizzaQuantity
    const handleInputChange = (key, obj, clbFunct) => (e => {
        const updatedData = obj.map((item) =>
            item.id === key ? {...item, value: e.target.value} : item
        )
        clbFunct(updatedData)
        console.log(updatedData)
    })

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
                                        disabled
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
                                        // disabled
                                        readOnly
                                        value={(pizzaPrice / areaOfPizza).toFixed(4)}
                                        onFocus={handleInputChange(index,pizzaCompareObj,onPizzaCompareChange)}

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