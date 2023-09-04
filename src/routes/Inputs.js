import {Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import PizzaToCompare from "./PizzaToCompare"
import PropTypes from "prop-types";
import AddPizzaButton from "./AddPizzaButton"

function Inputs({
                    measurements,
                    currencies,
                    pizzas,
                    headings,
                    pizzaMeasuresInputs,
                    pizzaMeasuresResult,
                    pizzaCurrencyInputs,
                    pizzaSizesObj,
                    pizzaQuantities,
                    pizzaPrices,
                    pizzaCompare,
                    onPizzasChange,
                    onPizzaMeasuresInputsChange,
                    onPizzaMeasuresResultChange,
                    onPizzaCurrencyInputsChange,
                    onPizzaSizesChange,
                    onPizzaQuantitiesChange,
                    onPizzaPricesChange,
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
                            measurements={measurements}
                            currencies={currencies}
                            pizzas={pizzas}
                            id={index}
                            heading={item}
                            pizzaMeasuresInputs={pizzaMeasuresInputs}
                            pizzaMeasuresResult={pizzaMeasuresResult}
                            pizzaCurrencyInputs={pizzaCurrencyInputs}
                            pizzaSizesObj={pizzaSizesObj}
                            pizzaSize={pizzaSizesObj[index].value}
                            pizzaQuantitiesObj={pizzaQuantities}
                            pizzaQuantities={pizzaQuantities[index].value}
                            pizzaPricesObj={pizzaPrices}
                            pizzaPrice={pizzaPrices[index].value}
                            pizzaCompare={pizzaCompare}
                            actPizzaMeasuresInputs={pizzaMeasuresInputs[index].value}
                            actPizzaCurrencyInputs={pizzaCurrencyInputs[index].value}
                            onPizzasChange={onPizzasChange}
                            onPizzaMeasuresInputsChange={onPizzaMeasuresInputsChange}
                            onPizzaMeasuresResultChange={onPizzaMeasuresResultChange}
                            onPizzaCurrencyInputs={onPizzaCurrencyInputsChange}
                            onPizzaSizesChange={onPizzaSizesChange}
                            onPizzaQuantitiesChange={onPizzaQuantitiesChange}
                            onPizzaPricesChange={onPizzaPricesChange}
                            onPizzaCompareChange={onPizzaCompareChange}
                        />
                    </Col>
                ))}
                <Col
                    className={headings.length === 4 ? 'd-none' : 'd-block'}
                >
                    <AddPizzaButton
                        pizzas={pizzas}
                        headings={headings}
                        pizzaMeasuresInputs={pizzaMeasuresInputs}
                        pizzaMeasuresResult={pizzaMeasuresResult}
                        pizzaCurrencyInputs={pizzaCurrencyInputs}
                        pizzaSizes={pizzaSizesObj}
                        pizzaQuantities={pizzaQuantities}
                        pizzaPrices={pizzaPrices}
                        pizzaCompare={pizzaCompare}
                        onPizzasChange={onPizzasChange}
                        onPizzaMeasuresInputsChange={onPizzaMeasuresInputsChange}
                        onPizzaMeasuresResultChange={onPizzaMeasuresResultChange}
                        onPizzaCurrencyInputsChange={onPizzaCurrencyInputsChange}
                        onPizzaSizesChange={onPizzaSizesChange}
                        onPizzaQuantitiesChange={onPizzaQuantitiesChange}
                        onPizzaPricesChange={onPizzaPricesChange}
                        onPizzaCompareChange={onPizzaCompareChange}
                    />
                </Col>
            </Row>
        </Container>
    )
}

Inputs.propTypes = {
    measurements: PropTypes.array.isRequired,
    currencies: PropTypes.array.isRequired,
    pizzas: PropTypes.array.isRequired,
    headings: PropTypes.array.isRequired,
    pizzaMeasuresInputs: PropTypes.array.isRequired,
    pizzaMeasuresResult: PropTypes.array.isRequired,
    pizzaCurrencyInputs: PropTypes.array.isRequired,
    pizzaSizesObj: PropTypes.array.isRequired,
    pizzaQuantities: PropTypes.array.isRequired,
    pizzaPrices: PropTypes.array.isRequired,
    pizzaCompare: PropTypes.array.isRequired,
    onPizzasChange: PropTypes.func.isRequired,
    onPizzaMeasuresInputsChange: PropTypes.func.isRequired,
    onPizzaMeasuresResultChange: PropTypes.func.isRequired,
    onPizzaCurrencyInputsChange: PropTypes.func.isRequired,
    onPizzaSizesChange: PropTypes.func.isRequired,
    onPizzaQuantitiesChange: PropTypes.func.isRequired,
    onPizzaPricesChange: PropTypes.func.isRequired,
    onPizzaCompareChange: PropTypes.func.isRequired,
}
export default Inputs;