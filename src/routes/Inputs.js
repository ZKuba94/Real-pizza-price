import {Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import PizzaToCompare from "./PizzaToCompare"
import AddPizzaButton from "./AddPizzaButton"

function Inputs({
                    items,
                    measures,
                    currencies,
                    actPizzaMeasure,
                    onPizzaMeasureChange,
                    actPizzaCurrency,
                    onPizzaCurrencyChange,
                    // pizzaSize,
                    // onPizzaSizeChange,
                    pizza1Size,
                    onPizza1SizeChange,
                    pizza2Size,
                    onPizza2SizeChange,
                    pizzaQuantity,
                    onPizzaQuantityChange,
                    pizzaPrice,
                    onPizzaPriceChange
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
                {/*{items.map((item, index) => (*/}
                <Col>
                    <PizzaToCompare
                        // key={index}
                        // item={item}
                        item={'Pizza 1'}
                        measures={measures}
                        currencies={currencies}
                        actPizzaMeasure={actPizzaMeasure}
                        onPizzaMeasureChange={onPizzaMeasureChange}
                        actPizzaCurrency={actPizzaCurrency}
                        onPizzaCurrencyChange={onPizzaCurrencyChange}
                        pizzaSize={pizza1Size}
                        onPizzaSizeChange={onPizza1SizeChange}
                        pizzaQuantity={pizzaQuantity}
                        onPizzaQuantityChange={onPizzaQuantityChange}
                        pizzaPrice={pizzaPrice}
                        onPizzaPriceChange={onPizzaPriceChange}
                    />
                </Col>
                <Col>
                    <PizzaToCompare
                        item={'Pizza 2'}
                        measures={measures}
                        currencies={currencies}
                        actPizzaMeasure={actPizzaMeasure}
                        onPizzaMeasureChange={onPizzaMeasureChange}
                        actPizzaCurrency={actPizzaCurrency}
                        onPizzaCurrencyChange={onPizzaCurrencyChange}
                        pizzaSize={pizza2Size}
                        onPizzaSizeChange={onPizza2SizeChange}
                        pizzaQuantity={pizzaQuantity}
                        onPizzaQuantityChange={onPizzaQuantityChange}
                        pizzaPrice={pizzaPrice}
                        onPizzaPriceChange={onPizzaPriceChange}
                    />
                </Col>
                {/*))}*/}
                <Col>
                    <AddPizzaButton/>
                </Col>
            </Row>
        </Container>
    )
}

export default Inputs;