import {Col, Container, Form, ListGroup, ListGroupItem, Row} from "react-bootstrap";

function PizzaToCompare({
                            measures,
                            currencies,
                            actPizzaSize,
                            onPizzaSizeChange,
                            actPizzaMeasure,
                            onPizzaMeasureChange,
                            actPizzaQuantity,
                            onQuantityChange,
                            actPizzaPrice,
                            onPizzaPriceChange,
                            actPizzaCurrency,
                            onPizzaCurrencyChange,
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
                    Pizza 1
                    <Form>
                        <ListGroupItem>
                            <Form.Group as={Row}>
                                <Col>
                                    <Form.Control
                                        name='pizza size'
                                        type='number'
                                        value={actPizzaSize}
                                        onChange={(e) => {
                                            onPizzaSizeChange(e.target.value)
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
                                        value={actPizzaQuantity}
                                        onChange={e => {
                                            onQuantityChange(e.target.value)
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
                                value={actPizzaPrice}
                                onChange={(e) => {
                                    onPizzaPriceChange(e.target.value)
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