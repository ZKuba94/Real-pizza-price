import {Col, Container, Form, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import React, {useEffect} from "react";
import PropTypes from "prop-types";
import connections from "./MeasuresObject";

function PizzaResultNumbers({
                                measurements,
                                index,
                                pizzaMeasuresResult,
                                pizzaSize,
                                pizzaQuantity,
                                pizzaPrice,
                                pizzaCompareObj,
                                actPizzaMeasureResult,
                                actPizzaMeasuresInputs,
                                actPizzaCurrencyResult,
                                onPizzaMeasuresResultChange,
                                onPizzaCompareChange,
                            }) {

    const inputPizzaMeasures = connections.find(el => el.measure === actPizzaMeasuresInputs)
    const realPizzaSizeFactor = (inputPizzaMeasures.values).find(el => el.measure === actPizzaMeasureResult)
    const r = (pizzaSize * realPizzaSizeFactor.value) / 2
    const areaOfPizza = (Math.PI * (r ** 2)) * pizzaQuantity
    const measurementsSelect = measurements.map(measure =>
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
    }, [pizzaSize, pizzaQuantity, pizzaPrice, actPizzaMeasureResult, actPizzaMeasuresInputs])
    return (
        <Container className='PizzaResultNumbers'>
            <ListGroup>
                <Row>
                    <Form
                        className='rounded-2'
                    >
                        <ListGroupItem>
                            <Form.Group
                                as={Row}
                            >
                                <Col>
                                    <Form.Text>
                                        {areaOfPizza.toFixed(2)}
                                    </Form.Text>
                                </Col>
                                <Col>
                                    <Form.Select
                                        name='pizzaMeasure'
                                        value={actPizzaMeasureResult}
                                        onChange={
                                            handleInputsChangeStrings(index, pizzaMeasuresResult, onPizzaMeasuresResultChange)
                                        }
                                    >
                                        {measurementsSelect}
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
    measurements: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    pizzaMeasuresResult: PropTypes.array.isRequired,
    pizzaSize: PropTypes.number.isRequired,
    pizzaQuantity: PropTypes.number.isRequired,
    pizzaPrice: PropTypes.number.isRequired,
    pizzaCompareObj: PropTypes.array.isRequired,
    actPizzaMeasureResult: PropTypes.string.isRequired,
    actPizzaMeasuresInputs: PropTypes.string.isRequired,
    actPizzaCurrencyResult: PropTypes.string.isRequired,
    onPizzaMeasuresResultChange: PropTypes.func.isRequired,
    onPizzaCompareChange: PropTypes.func.isRequired,
}
export default PizzaResultNumbers;