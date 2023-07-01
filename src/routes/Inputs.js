import {Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import PizzaToCompare from "./PizzaToCompare"
import AddPizzaButton from "./AddPizzaButton"

function Inputs({
                    headings,
                    measures,
                    currencies,
                    actPizzaMeasure,
                    onPizzaMeasureChange,
                    actPizzaCurrency,
                    onPizzaCurrencyChange,
                    pizzaSizesObj,
                    onPizzaSizesChange,
                    pizzaQuantities,
                    onPizzaQuantitiesChange,
                    pizzaPrices,
                    onPizzaPricesChange,
                }) {
    return (
        <Container className='Inputs'>
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
                            measures={measures}
                            currencies={currencies}
                            actPizzaMeasure={actPizzaMeasure}
                            onPizzaMeasureChange={onPizzaMeasureChange}
                            actPizzaCurrency={actPizzaCurrency}
                            onPizzaCurrencyChange={onPizzaCurrencyChange}
                            pizzaPrice={pizzaPrices[index].value}
                            pizzaPrices={pizzaPrices}
                            onPizzaPricesChange={onPizzaPricesChange}
                        />
                    </Col>
                ))}
                <Col>
                    <AddPizzaButton/>
                </Col>
            </Row>
        </Container>
    )
}

export default Inputs;