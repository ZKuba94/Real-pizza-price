import {Col, Container, Form, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import React from "react";
import PropTypes from "prop-types";

function PizzaToCompare({
                            id,
                            heading,
                            measurements,
                            currencies,
                            actPizzaMeasuresInputs,
                            pizzaMeasuresInputs,
                            onPizzaMeasureChange,
                            pizzaCurrencyInputs,
                            onPizzaCurrencyInputs,
                            actPizzaCurrencyInputs,
                            pizzaSizesObj,
                            pizzaSize,
                            onPizzaSizesChange,
                            pizzaQuantitiesObj,
                            pizzaQuantities,
                            onPizzaQuantitiesChange,
                            pizzaPrice,
                            pizzaPrices,
                            onPizzaPricesChange,
                        }) {
    const measurements2 = measurements.map(measure =>
        <option key={measure} value={measure}>{measure}</option>
    )
    const currency = currencies.map(curr =>
        <option key={curr} value={curr}>{curr}</option>
    )
    const handleInputsChangesNumbers = (key, obj, clbFunc) => (e => {
        const updatedData = obj.map((item) =>
            item.id === key
                ? {...item, value: parseFloat(e.target.value)}
                : item
        )
        clbFunc(updatedData)
    })
    const handleInputsChangesStrings = (key, obj, clbFunc) => (e => {
        const updatedData = obj.map((item) =>
            item.id === key
                ? {...item, value: e.target.value}
                : item
        )
        clbFunc(updatedData)
    })

    return (
        <Container
            className='PizzaToCompare'
        >
            <ListGroup>
                <ListGroupItem>
                    {heading}
                    <Form>
                        <ListGroupItem>
                            <Form.Group
                                as={Row}
                            >
                                <Col>
                                    <Form.Control
                                        name='pizzaSize'
                                        type='number'
                                        value={pizzaSize}
                                        onChange={
                                            handleInputsChangesNumbers(id, pizzaSizesObj, onPizzaSizesChange)
                                        }
                                    />
                                </Col>
                                <Col>
                                    <Form.Select
                                        name='measure'
                                        value={actPizzaMeasuresInputs}
                                        onChange={
                                            handleInputsChangesStrings(id, pizzaMeasuresInputs, onPizzaMeasureChange)
                                        }
                                    >
                                        {measurements2}
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Form.Group
                                as={Row}
                            >
                                <Col>
                                    <Form.Control
                                        name='pizza quantity'
                                        type='number'
                                        value={pizzaQuantities}
                                        onChange={
                                            handleInputsChangesNumbers(id, pizzaQuantitiesObj, onPizzaQuantitiesChange)
                                        }
                                    />
                                </Col>
                            </Form.Group>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Form.Group
                                as={Row}
                            >
                                <Col>
                                    <Form.Control
                                        name='pizzas price'
                                        type='number'
                                        value={pizzaPrice}
                                        onChange={
                                            handleInputsChangesNumbers(id, pizzaPrices, onPizzaPricesChange)
                                        }
                                    />
                                </Col>
                                <Col>
                                    <Form.Select
                                        name='currency'
                                        value={actPizzaCurrencyInputs}
                                        onChange={
                                            handleInputsChangesStrings(id, pizzaCurrencyInputs, onPizzaCurrencyInputs)
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

PizzaToCompare.propTypes = {
    id: PropTypes.number.isRequired,
    heading: PropTypes.string.isRequired,
    measurements: PropTypes.array.isRequired,
    currencies: PropTypes.array.isRequired,
    actPizzaMeasuresInputs: PropTypes.string.isRequired,
    pizzaMeasuresInputs: PropTypes.array.isRequired,
    onPizzaMeasureChange: PropTypes.func.isRequired,
    pizzaCurrencyInputs: PropTypes.array.isRequired,
    onPizzaCurrencyInputs: PropTypes.func.isRequired,
    actPizzaCurrencyInputs: PropTypes.string.isRequired,
    pizzaSizesObj: PropTypes.array.isRequired,
    pizzaSize: PropTypes.number.isRequired,
    onPizzaSizesChange: PropTypes.func.isRequired,
    pizzaQuantitiesObj: PropTypes.array.isRequired,
    pizzaQuantities: PropTypes.number.isRequired,
    onPizzaQuantitiesChange: PropTypes.func.isRequired,
    pizzaPrice: PropTypes.number.isRequired,
    pizzaPrices: PropTypes.array.isRequired,
    onPizzaPricesChange: PropTypes.func.isRequired,
}
export default PizzaToCompare;