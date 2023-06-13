import {Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import PizzaToCompare from "./PizzaToCompare"
import AddPizzaButton from "./AddPizzaButton"

function Inputs({
                    measures,
                    currencies,
                    actPizzaSize,
                    onPizzaSizeChange,
                    actPizzaMeasure,
                    onPizzaMeasureChange,
                    actPizzaQuantity,
                    onQuantityChange,
                    actPizzaPrice,
                    onPizzaPriceChange,
                    actPizzaCurrency,
                    onPizzaCurrencyChange
                }) {
    // const pizzaNumbers =

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
                <Col>
                    <PizzaToCompare
                        // counter={item.id}
                        measures={measures}
                        currencies={currencies}
                        actPizzaSize={actPizzaSize}
                        onPizzaSizeChange={onPizzaSizeChange}
                        actPizzaMeasure={actPizzaMeasure}
                        onPizzaMeasureChange={onPizzaMeasureChange}
                        actPizzaQuantity={actPizzaQuantity}
                        onQuantityChange={onQuantityChange}
                        actPizzaPrice={actPizzaPrice}
                        onPizzaPriceChange={onPizzaPriceChange}
                        actPizzaCurrency={actPizzaCurrency}
                        onPizzaCurrencyChange={onPizzaCurrencyChange}
                    />
                </Col>
                <Col>
                    <PizzaToCompare
                        // counter={item.id}
                        measures={measures}
                        currencies={currencies}
                        actPizzaSize={actPizzaSize}
                        onPizzaSizeChange={onPizzaSizeChange}
                        actPizzaMeasure={actPizzaMeasure}
                        onPizzaMeasureChange={onPizzaMeasureChange}
                        actPizzaQuantity={actPizzaQuantity}
                        onQuantityChange={onQuantityChange}
                        actPizzaPrice={actPizzaPrice}
                        onPizzaPriceChange={onPizzaPriceChange}
                        actPizzaCurrency={actPizzaCurrency}
                        onPizzaCurrencyChange={onPizzaCurrencyChange}
                    />
                </Col>
                <Col>
                    <AddPizzaButton/>
                </Col>
            </Row>
        </Container>
    )
}

export default Inputs;