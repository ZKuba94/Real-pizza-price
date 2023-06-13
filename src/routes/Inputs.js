import {Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import PizzaToCompare from "./PizzaToCompare"
import AddPizzaButton from "./AddPizzaButton"

function Inputs({
                    measures,
                    currencies,
                    actPizzaMeasure,
                    onPizzaMeasureChange,
                    actPizzaCurrency,
                    onPizzaCurrencyChange
                }) {
    const items = ['Pizza 1', 'Pizza 2']
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
                {items.map((item, index) => (
                    <Col>
                        <PizzaToCompare
                            key={index}
                            item={item}
                            measures={measures}
                            currencies={currencies}
                            actPizzaMeasure={actPizzaMeasure}
                            onPizzaMeasureChange={onPizzaMeasureChange}
                            actPizzaCurrency={actPizzaCurrency}
                            onPizzaCurrencyChange={onPizzaCurrencyChange}
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