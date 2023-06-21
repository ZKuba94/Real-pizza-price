import {Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import PizzaResultNumbers from "./PizzaResultNumbers"
import AddPizzaButton from "./AddPizzaButton";

function Results({pizza1Size, pizza2Size, actPizzaMeasure, actPizzaCurrency}) {
    // const items = ['Pizza 1', 'Pizza 2']
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
                {/*{items.map((item, index) => (*/}
                    <Col>
                        <PizzaResultNumbers
                            pizzaSize={pizza1Size}
                            // key={index}
                            // item={item}
                            actPizzaMeasure={actPizzaMeasure}
                            actPizzaCurrency={actPizzaCurrency}
                        />
                    </Col>
                <Col>
                    <PizzaResultNumbers
                        pizzaSize={pizza2Size}
                        actPizzaMeasure={actPizzaMeasure}
                        actPizzaCurrency={actPizzaCurrency}
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

export default Results;