import {Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import PizzaResultNumbers from "./PizzaResultNumbers"
import AddPizzaButton from "./AddPizzaButton";
import PropTypes from "prop-types";

function Results({
                     measurements,
                     pizzas,
                     headings,
                     pizzaMeasuresInputs,
                     pizzaMeasuresResult,
                     pizzaCurrencyInputs,
                     pizzaCurrencyResults,
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
            className='Results'
        >
            <Row>
                <Col>
                    <ListGroup
                        className='h-100'
                    >
                        <ListGroupItem>
                            Area of pizza
                        </ListGroupItem>
                        <ListGroupItem
                            className='h-100'
                        >
                            Counted price
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                {headings.map((item, index) => (
                    <Col>
                        <PizzaResultNumbers
                            measurements={measurements}
                            index={index}
                            pizzaMeasuresResult={pizzaMeasuresResult}
                            pizzaSize={pizzaSizesObj[index].value}
                            pizzaQuantity={pizzaQuantities[index].value}
                            pizzaPrice={pizzaPrices[index].value}
                            pizzaCompareObj={pizzaCompare}
                            actPizzaMeasureResult={pizzaMeasuresResult[index].value}
                            actPizzaMeasuresInputs={pizzaMeasuresInputs[index].value}
                            actPizzaCurrencyResult={pizzaCurrencyResults[index].value}
                            onPizzaMeasuresResultChange={onPizzaMeasuresResultChange}
                            onPizzaCompareChange={onPizzaCompareChange}
                        />
                    </Col>
                ))}
                <Col
                    className={headings.length === 4 ? 'd-none' : 'd-block'}
                >
                    <AddPizzaButton
                        className='rounded-2'
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

Results.propTypes = {
    measurements: PropTypes.array.isRequired,
    pizzas: PropTypes.array.isRequired,
    headings: PropTypes.array.isRequired,
    pizzaMeasuresInputs: PropTypes.array.isRequired,
    pizzaMeasuresResult: PropTypes.array.isRequired,
    pizzaCurrencyInputs: PropTypes.array.isRequired,
    pizzaCurrencyResults: PropTypes.array.isRequired,
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

export default Results;