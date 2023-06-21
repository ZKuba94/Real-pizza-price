import {Col, Container, Form, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import React from "react";

function PizzaToCompare({
                            item,
                            measures,
                            currencies,
                            actPizzaMeasure,
                            onPizzaMeasureChange,
                            actPizzaCurrency,
                            onPizzaCurrencyChange,
                            pizzaSize,
                            onPizzaSizeChange,
                            pizzaQuantity,
                            onPizzaQuantityChange,
                            pizzaPrice,
                            onPizzaPriceChange
                        }) {
    const measurements = measures.map(measure =>
        <option key={measure} value={measure}>{measure}</option>
    )
    const currency = currencies.map(curr =>
        <option key={curr} value={curr}>{curr}</option>
    )
    return (
        <Container className='PizzaToCompare'>
            <ListGroup>
                <ListGroupItem>
                    {item}
                    <Form>
                        <ListGroupItem>
                            <Form.Group as={Row}>
                                <Col>
                                    <Form.Control
                                        name='pizzaSize'
                                        type='number'
                                        value={pizzaSize}
                                        onChange={(e) => {
                                            onPizzaSizeChange(parseFloat(e.target.value))
                                        }
                                        }
                                    />
                                </Col>
                                <Col>
                                    <Form.Select
                                        name='measure'
                                        value={actPizzaMeasure}
                                        onChange={(e) => {
                                            onPizzaMeasureChange(e.target.value)
                                        }
                                        }
                                    >
                                        {measurements}
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Form.Group as={Row}>
                                <Col>
                                    <Form.Control
                                        name='pizza quantity'
                                        type='number'
                                        value={pizzaQuantity}
                                        onChange={e => {
                                            onPizzaQuantityChange(parseFloat(e.target.value))
                                        }
                                        }
                                    />
                                </Col>
                            </Form.Group>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Form.Group as={Row}>
                                <Col>
                                    <Form.Control
                                        name='pizzas price'
                                        type='number'
                                        value={pizzaPrice}
                                        onChange={(e) => {
                                            onPizzaPriceChange(parseFloat(e.target.value))
                                        }
                                        }
                                    />
                                </Col>
                                <Col>
                                    <Form.Select
                                        name='currency'
                                        value={actPizzaCurrency}
                                        onChange={(e) => {
                                            onPizzaCurrencyChange(e.target.value)
                                        }
                                        }
                                    >
                                        {currency}
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </ListGroupItem>
                    </Form>
                </ListGroupItem>
            </ListGroup>
        </Container>
    )
}

export default PizzaToCompare;