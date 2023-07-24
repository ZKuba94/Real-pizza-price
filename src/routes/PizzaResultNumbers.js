import {Col, Container, Form, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import React, {useEffect} from "react";
import PropTypes from "prop-types";

function PizzaResultNumbers({
                                index,
                                measurements,
                                actPizzaMeasureResult,
                                pizzaMeasuresResult,
                                onPizzaMeasuresResult,
                                actPizzaCurrencyResult,
                                pizzaSize,
                                pizzaQuantity,
                                pizzaPrice,
                                pizzaCompareObj,
                                onPizzaCompareChange,
                            }) {
    const r = pizzaSize / 2
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
    const handleInputsChange = (key, obj, clbFunc) => (e => {
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
                                            handleInputsChange(index, pizzaMeasuresResult, onPizzaMeasuresResult)
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
                                        /{actPizzaMeasureResult}<sup>2</sup>
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