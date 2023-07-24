import {Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import PizzaToCompare from "./PizzaToCompare"
import PropTypes from "prop-types";

// import AddPizzaButton from "./AddPizzaButton"

function Inputs({
                    headings,
                    measurements,
                    currencies,
                    pizzaMeasuresInputs,
                    onPizzaMeasureChange,
                    pizzaCurrencyInputs,
                    onPizzaCurrencyInputs,
                    pizzaSizesObj,
                    onPizzaSizesChange,
                    pizzaQuantities,
                    onPizzaQuantitiesChange,
                    pizzaPrices,
                    onPizzaPricesChange,
                    pizzaCompare,
                    onPizzaCompareChange,
                }) {
    return (
        <Container
            className='Inputs'
        >
            <Row>
                <Col>
                    <ListGroup>
                        <ListGroupItem>
                            <br/>
                            Diameter
                        </ListGroupItem>
                        <ListGroupItem>
                            Quantity
                        </ListGroupItem>
                        <ListGroupItem>
                            Total price
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                {headings.map((item, index) => (
                    <Col>
                        <PizzaToCompare
                            id={index}
                            heading={item}
                            pizzaSizesObj={pizzaSizesObj}
                            pizzaSize={pizzaSizesObj[index].value}
                            onPizzaSizesChange={onPizzaSizesChange}
                            pizzaQuantitiesObj={pizzaQuantities}
                            pizzaQuantities={pizzaQuantities[index].value}
                            onPizzaQuantitiesChange={onPizzaQuantitiesChange}
                            measurements={measurements}
                            currencies={currencies}
                            actPizzaMeasuresInputs={pizzaMeasuresInputs[index].value}
                            pizzaMeasuresInputs={pizzaMeasuresInputs}
                            onPizzaMeasureChange={onPizzaMeasureChange}
                            pizzaCurrencyInputs={pizzaCurrencyInputs}
                            actPizzaCurrencyInputs={pizzaCurrencyInputs[index].value}
                            onPizzaCurrencyInputs={onPizzaCurrencyInputs}
                            pizzaPrice={pizzaPrices[index].value}
                            pizzaPrices={pizzaPrices}
                            onPizzaPricesChange={onPizzaPricesChange}
                            pizzaCompare={pizzaCompare}
                            onPizzaCompareChange={onPizzaCompareChange}
                        />
                    </Col>
                ))}
                {/*<Col>*/}
                {/*    <AddPizzaButton/>*/}
                {/*</Col>*/}
            </Row>
        </Container>
    )
}

Inputs.propTypes = {
    headings: PropTypes.array.isRequired,
    measurements: PropTypes.array.isRequired,
    currencies: PropTypes.array.isRequired,
    pizzaMeasuresInputs: PropTypes.array.isRequired,
    onPizzaMeasureChange: PropTypes.func.isRequired,
    pizzaCurrencyInputs: PropTypes.array.isRequired,
    onPizzaCurrencyInputs: PropTypes.func.isRequired,
    pizzaSizesObj: PropTypes.array.isRequired,
    onPizzaSizesChange: PropTypes.func.isRequired,
    pizzaQuantities: PropTypes.array.isRequired,
    onPizzaQuantitiesChange: PropTypes.func.isRequired,
    pizzaPrices: PropTypes.array.isRequired,
    onPizzaPricesChange: PropTypes.func.isRequired,
    pizzaCompare: PropTypes.array.isRequired,
    onPizzaCompareChange: PropTypes.func.isRequired,
}
export default Inputs;