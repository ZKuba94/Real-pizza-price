import {Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import PizzaResultNumbers from "./PizzaResultNumbers"
import AddPizzaButton from "./AddPizzaButton";

function Results({actPizzaSize, actPizzaMeasure, actPizzaCurrency}) {

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
                <Col>
                    <PizzaResultNumbers
                        actPizzaSize={actPizzaSize}
                        actPizzaMeasure={actPizzaMeasure}
                        actPizzaCurrency={actPizzaCurrency}
                    />
                </Col>
                <Col>
                    <PizzaResultNumbers
                        actPizzaSize={actPizzaSize}
                        actPizzaMeasure={actPizzaMeasure}
                        actPizzaCurrency={actPizzaCurrency}
                    />
                </Col>
                <Col>
                    <AddPizzaButton/>
                </Col>
            </Row>
        </Container>
    )
}

export default Results;