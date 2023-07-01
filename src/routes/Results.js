import {Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import PizzaResultNumbers from "./PizzaResultNumbers"
import AddPizzaButton from "./AddPizzaButton";

function Results({pizzas,actPizzaMeasure, actPizzaCurrency}) {

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
                {pizzas.map((item, index) => (
                    <Col>
                        <PizzaResultNumbers
                            // pizzaSize={pizza1Size}
                            id={index}
                            item={item}
                            actPizzaMeasure={actPizzaMeasure}
                            actPizzaCurrency={actPizzaCurrency}
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