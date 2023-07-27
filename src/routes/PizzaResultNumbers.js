import {Col, Container, Form, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import React, {useEffect} from "react";
import PropTypes from "prop-types";

function PizzaResultNumbers({
                                index,
                                measurements,
                                actPizzaMeasureResult,
                                pizzaMeasuresResult,
                                actPizzaMeasuresInputs,
                                onPizzaMeasuresResult,
                                actPizzaCurrencyResult,
                                pizzaSize,
                                pizzaQuantity,
                                pizzaPrice,
                                pizzaCompareObj,
                                onPizzaCompareChange,
                            }) {
    const connections = [
        {
            id: 0, measure: 'cm', values: [
                {id: 0, measure: 'cm', value: 1},
                {id: 1, measure: 'm', value: 0.01},
                {id: 2, measure: 'in', value: 0.394},
                {id: 3, measure: 'ft', value: 0.033},
            ]
        },
        {
            id: 1, measure: 'm', values: [
                {id: 0, measure: 'cm', value: 100},
                {id: 1, measure: 'm', value: 1},
                {id: 2, measure: 'in', value: 39.37},
                {id: 3, measure: 'ft', value: 3.281},
            ]
        },
        {
            id: 2, measure: 'in', values: [
                {id: 0, measure: 'cm', value: 2.54},
                {id: 1, measure: 'm', value: 0.0254},
                {id: 2, measure: 'in', value: 1},
                {id: 3, measure: 'ft', value: 0.083},
            ]
        },
        {
            id: 3, measure: 'ft', values: [
                {id: 0, measure: 'cm', value: 30.48},
                {id: 1, measure: 'm', value: 0.3048},
                {id: 2, measure: 'in', value: 12},
                {id: 3, measure: 'ft', value: 1},
            ]
        },
    ]
    const inputPizzaMeasures = connections.find(el=> el.measure === actPizzaMeasuresInputs)
    const realPizzaSizeFactorr = (inputPizzaMeasures.values).find(el =>el.measure === actPizzaMeasureResult)
    const r = (pizzaSize * realPizzaSizeFactorr.value) / 2
    const areaOfPizza = ((Math.PI * (r ** 2)).toFixed(2)) * pizzaQuantity
    const measurements2 = measurements.map(measure =>
        <option key={measure} value={measure}>{measure}</option>
    )
    const handleCompareChange = (id, obj, clbFunc) => {
        const updatedData = obj.map((item) =>
            item.id === id
                ? {...item, value: (pizzaPrice / areaOfPizza)}
                : item
        )
        clbFunc(updatedData)
    }
    const handleInputsChangeStrings = (key, obj, clbFunc) => (e => {
        const updatedData = obj.map((item) =>
            item.id === key
                ? {...item, value: e.target.value}
                : item
        )
        clbFunc(updatedData)
    })
    useEffect(() => {
        handleCompareChange(index, pizzaCompareObj, onPizzaCompareChange)
    }, [pizzaSize, pizzaQuantity, pizzaPrice])

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
                                    <Form.Select
                                        name='pizzaMeasure'
                                        value={actPizzaMeasureResult}
                                        onChange={
                                            handleInputsChangeStrings(index, pizzaMeasuresResult, onPizzaMeasuresResult)
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
                                    <Form.Text>
                                        {(pizzaPrice / areaOfPizza).toFixed(4)}
                                    </Form.Text>
                                </Col>
                                <Col>
                                    <Form.Text>
                                        {actPizzaCurrencyResult}
                                        /{actPizzaMeasureResult}
                                        <sup>2</sup>
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

PizzaResultNumbers.propTypes = {
    index: PropTypes.number.isRequired,
    measurements: PropTypes.array.isRequired,
    actPizzaMeasureResult: PropTypes.string.isRequired,
    pizzaMeasuresResult: PropTypes.array.isRequired,
    onPizzaMeasuresResult: PropTypes.func.isRequired,
    actPizzaCurrencyResult: PropTypes.string.isRequired,
    pizzaSize: PropTypes.number.isRequired,
    pizzaQuantity: PropTypes.number.isRequired,
    pizzaPrice: PropTypes.number.isRequired,
    pizzaCompareObj: PropTypes.array.isRequired,
    onPizzaCompareChange: PropTypes.func.isRequired,
}
export default PizzaResultNumbers;