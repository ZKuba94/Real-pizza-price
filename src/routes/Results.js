import {Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import PizzaResultNumbers from "./PizzaResultNumbers"
import AddPizzaButton from "./AddPizzaButton";
import PropTypes from "prop-types";

function Results({
                     headings,
                     measurements,
                     pizzaMeasuresResult,
                     pizzaMeasuresInputs,
                     onPizzaMeasuresResult,
                     pizzaCurrencyInputs,
                     pizzaCurrencyResults,
                     pizzaSizesObj,
                     pizzaQuantities,
                     pizzaPrices,
                     pizzaCompare,
                     onPizzaCompareChange,
                     onPizzaSizesChange,
                     setPizzaMeasuresInputs,
                     setPizzaCurrencyInputs,
                     setQuantitiesChange,
                     setPizzaPrices,
                     // setPizzas,
                 }) {
    return (
        <Container
            className='Results'
        >
            <Row>
                <Col>
                    <ListGroup>
                        <ListGroupItem>
                            Area of pizza
                        </ListGroupItem>
                        <ListGroupItem>
                            Counted price
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                {headings.map((item, index) => (
                    <Col>
                        <PizzaResultNumbers
                            index={index}
                            measurements={measurements}
                            actPizzaMeasureResult={pizzaMeasuresResult[index].value}
                            pizzaMeasuresResult={pizzaMeasuresResult}
                            actPizzaMeasuresInputs={pizzaMeasuresInputs[index].value}
                            onPizzaMeasuresResult={onPizzaMeasuresResult}
                            actPizzaCurrencyResult={pizzaCurrencyResults[index].value}
                            pizzaSize={pizzaSizesObj[index].value}
                            pizzaQuantity={pizzaQuantities[index].value}
                            pizzaPrice={pizzaPrices[index].value}
                            pizzaCompareObj={pizzaCompare}
                            onPizzaCompareChange={onPizzaCompareChange}
                        />
                    </Col>
                ))}
                <Col>
                    <AddPizzaButton
                        headings={headings}
                        pizzaMeasuresInputs={pizzaMeasuresInputs}
                        pizzaMeasuresResult={pizzaMeasuresResult}
                        pizzaCurrencyInputs={pizzaCurrencyInputs}
                        pizzaSizes={pizzaSizesObj}
                        pizzaQuantities={pizzaQuantities}
                        pizzaPrices={pizzaPrices}
                        pizzaCompare={pizzaCompare}
                        setPizzaSizes={onPizzaSizesChange}
                        setPizzaMeasuresInputs={setPizzaMeasuresInputs}
                        setPizzaMeasuresResult={onPizzaMeasuresResult}
                        setPizzaCurrencyInputs={setPizzaCurrencyInputs}
                        setQuantitiesChange={setQuantitiesChange}
                        setPizzaPrices={setPizzaPrices}
                        setPizzaCompare={onPizzaCompareChange}
                        // setPizzas={setPizzas}
                    />
                </Col>
            </Row>
        </Container>
    )
}

Results.propTypes = {
    headings: PropTypes.array.isRequired,
    measurements: PropTypes.array.isRequired,
    pizzaMeasuresResult: PropTypes.array.isRequired,
    onPizzaMeasuresResult: PropTypes.func.isRequired,
    pizzaCurrencyResults: PropTypes.array.isRequired,
    pizzaSizesObj: PropTypes.array.isRequired,
    pizzaQuantities: PropTypes.array.isRequired,
    pizzaPrices: PropTypes.array.isRequired,
    pizzaCompare: PropTypes.array.isRequired,
    onPizzaCompareChange: PropTypes.func.isRequired,
}

export default Results;