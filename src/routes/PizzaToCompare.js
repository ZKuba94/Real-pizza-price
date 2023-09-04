import {Col, Container, Form, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import React, {useEffect} from "react";
import PropTypes from "prop-types";
import ClosureButton from "./ClosureButton";

function PizzaToCompare({
                            measurements,
                            currencies,
                            pizzas,
                            id,
                            heading,
                            pizzaMeasuresInputs,
                            pizzaMeasuresResult,
                            pizzaCurrencyInputs,
                            pizzaSizesObj,
                            pizzaSize,
                            pizzaQuantitiesObj,
                            pizzaQuantities,
                            pizzaPricesObj,
                            pizzaPrice,
                            pizzaCompare,
                            actPizzaMeasuresInputs,
                            actPizzaCurrencyInputs,
                            onPizzasChange,
                            onPizzaMeasuresInputsChange,
                            onPizzaMeasuresResultChange,
                            onPizzaCurrencyInputs,
                            onPizzaSizesChange,
                            onPizzaQuantitiesChange,
                            onPizzaPricesChange,
                            onPizzaCompareChange,
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
    useEffect(() => {
        handleInputsChangesNumbers(id, pizzaSizesObj, onPizzaSizesChange)
    }, [pizzaSize, pizzaPrice, pizzaQuantities])

    return (
        <Container
            className='PizzaToCompare'
        >
            <ListGroup>
                <ListGroupItem>
                    <div className='d-flex justify-content-between align-items-start'>
                        {heading}
                        <Col
                            className={pizzas.length < 3 ? 'd-none' : 'd-block text-end justify-content-top'}
                        >
                            <ClosureButton
                                pizzas={pizzas}
                                id={id}
                                pizzaMeasuresInputs={pizzaMeasuresInputs}
                                pizzaMeasuresResult={pizzaMeasuresResult}
                                pizzaCurrencyInputs={pizzaCurrencyInputs}
                                pizzaSizes={pizzaSizesObj}
                                pizzaQuantities={pizzaQuantitiesObj}
                                pizzaPrices={pizzaPricesObj}
                                pizzaCompare={pizzaCompare}
                                onPizzasChange={onPizzasChange}
                                onPizzaMeasuresInputsChange={onPizzaMeasuresInputsChange}
                                onPizzaMeasuresResultChange={onPizzaMeasuresResultChange}
                                onPizzaCurrencyInputs={onPizzaCurrencyInputs}
                                onPizzaSizesChange={onPizzaSizesChange}
                                onPizzaQuantitiesChange={onPizzaQuantitiesChange}
                                onPizzaPricesChange={onPizzaPricesChange}
                                onPizzaCompareChange={onPizzaCompareChange}
                            />
                        </Col>
                    </div>
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
                                            handleInputsChangesStrings(id, pizzaMeasuresInputs, onPizzaMeasuresInputsChange)
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
                                            handleInputsChangesNumbers(id, pizzaPricesObj, onPizzaPricesChange)
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
    measurements: PropTypes.array.isRequired,
    currencies: PropTypes.array.isRequired,
    pizzas: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
    heading: PropTypes.string.isRequired,
    pizzaMeasuresInputs: PropTypes.array.isRequired,
    pizzaMeasuresResult: PropTypes.array.isRequired,
    pizzaCurrencyInputs: PropTypes.array.isRequired,
    pizzaSizesObj: PropTypes.array.isRequired,
    pizzaSize: PropTypes.number.isRequired,
    pizzaQuantitiesObj: PropTypes.array.isRequired,
    pizzaQuantities: PropTypes.number.isRequired,
    pizzaPricesObj: PropTypes.array.isRequired,
    pizzaPrice: PropTypes.number.isRequired,
    pizzaCompare: PropTypes.array.isRequired,
    actPizzaMeasuresInputs: PropTypes.string.isRequired,
    actPizzaCurrencyInputs: PropTypes.string.isRequired,
    onPizzasChange: PropTypes.func.isRequired,
    onPizzaMeasuresInputsChange: PropTypes.func.isRequired,
    onPizzaMeasuresResultChange: PropTypes.func.isRequired,
    onPizzaCurrencyInputs: PropTypes.func.isRequired,
    onPizzaSizesChange: PropTypes.func.isRequired,
    onPizzaQuantitiesChange: PropTypes.func.isRequired,
    onPizzaPricesChange: PropTypes.func.isRequired,
    onPizzaCompareChange: PropTypes.func.isRequired,
}
export default PizzaToCompare;