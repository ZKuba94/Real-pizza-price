import {Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import PizzaResultsNumbers from "./PizzaResultsNumbers"
import AddPizzaButton from "./AddPizzaButton";

function Results({measures, currencies, actPizzaSize, actPizzaMeasure, actPizzaCurrency}) {
    const measurements = measures.map(measure =>
        <option key={measure} value={measure}>{measure}<sup>2</sup></option>
    )
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
                    <PizzaResultsNumbers
                        measures={measurements}
                        currencies={currencies}
                        actPizzaSize={actPizzaSize}
                        actPizzaMeasure={actPizzaMeasure}
                        actPizzaCurrency={actPizzaCurrency}
                    />
                </Col>
                <Col>
                    <PizzaResultsNumbers
                        measures={measurements}
                        currencies={currencies}
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