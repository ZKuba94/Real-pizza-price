import {Col, Container, Form, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import React, {useEffect} from "react";

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
    const handleCompareChange = (id, obj, clbFunc) => {
        const updatedData = obj.map((item) =>
            item.id === id
                ? {...item, value: (pizzaPrice / areaOfPizza)}
                : item
        )
        clbFunc(updatedData)
    }
    useEffect(() => {
        handleCompareChange(index, pizzaCompareObj, onPizzaCompareChange)
    }, [pizzaSize, pizzaQuantity,pizzaPrice])

    return (
        <Container className='PizzaResultNumbers'>
            <ListGroup>
                <Row>
                    <Form>
                        <ListGroupItem>
                            <Form.Group
                                as={Row}
                            >
                                <Col>
                                    <Form.Text>
                                        {areaOfPizza}
                                    </Form.Text>
                                </Col>
                                <Col>
                                    <Form.Text>
                                        {actPizzaMeasure}<sup>2</sup>
                                    </Form.Text>
                                </Col>
                            </Form.Group>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Form.Group
                                as={Row}
                            >
                                <Col>
                                    <Form.Text>
                                        {(pizzaPrice / areaOfPizza).toFixed(4)}
                                    </Form.Text>
                                </Col>
                                <Col>
                                    <Form.Text>
                                        {actPizzaCurrency}
                                        /{actPizzaMeasure}<sup>2</sup>
                                    </Form.Text>
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