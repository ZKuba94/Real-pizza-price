import {Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import PizzaResultNumbers from "./PizzaResultNumbers"
import AddPizzaButton from "./AddPizzaButton";

function Results({
                     headings,
                     actPizzaMeasure,
                     actPizzaCurrency,
                     pizzaSizesObj,
                     pizzaQuantities,
                     pizzaPrices,
                 }) {

    return (
        <Container className='Results'>
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
                            actPizzaMeasure={actPizzaMeasure}
                            actPizzaCurrency={actPizzaCurrency}
                            pizzaSize={pizzaSizesObj[index].value}
                            pizzaQuantity={pizzaQuantities[index].value}
                            pizzaPrice={pizzaPrices[index].value}
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

export default Results;