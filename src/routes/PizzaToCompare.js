import {Col, Container, Form, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import React from "react";

function PizzaToCompare({
                            id,
                            heading,
                            measures,
                            currencies,
                            actPizzaMeasure,
                            onPizzaMeasureChange,
                            actPizzaCurrency,
                            onPizzaCurrencyChange,
                            pizzaSizesObj,
                            pizzaSize,
                            onPizzaSizesChange,
                            pizzaQuantitiesObj,
                            pizzaQuantities,
                            onPizzaQuantitiesChange,
                            pizzaPrice,
                            pizzaPrices,
                            onPizzaPricesChange
                        }) {
    const measurements = measures.map(measure =>
        <option key={measure} value={measure}>{measure}</option>
    )
    const currency = currencies.map(curr =>
        <option key={curr} value={curr}>{curr}</option>
    )
    const handleInputsChanges = (key,obj,clbFunct) => (e => {
        const updatedData = obj.map((item)=>
        item.id === key ? {...item, value: parseFloat(e.target.value)}: item
        )
        clbFunct(updatedData)
    })
    return (
        <Container className='PizzaToCompare'>
            <ListGroup>
                <ListGroupItem>
                    {heading}
                    <Form>
                        <ListGroupItem>
                            <Form.Group as={Row}>
                                <Col>
                                    <Form.Control
                                        name='pizzaSize'
                                        type='number'
                                        value={pizzaSize}
                                        onChange={handleInputsChanges(id,pizzaSizesObj,onPizzaSizesChange)}
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
                                        value={pizzaQuantities}
                                        onChange={handleInputsChanges(id,pizzaQuantitiesObj,onPizzaQuantitiesChange)}
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
                                        onChange={handleInputsChanges(id,pizzaPrices,onPizzaPricesChange)}
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