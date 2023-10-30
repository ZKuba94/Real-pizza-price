import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import PizzaFormTile from "./PizzaFromTile";
import Result from "./Result"
import {useState} from "react";
import {Button, Container, Row} from "react-bootstrap";

const measurements = ['cm'];
const currencies = ['PLN'];

const initialPizzasMap = new Map([
    [
        1, {price: 45, quantity: 1, size: 45}
    ],
    [
        2, {price: 30, quantity: 2, size: 30}
    ]
])

function App() {
    const [pizzas, setPizzas] = useState(initialPizzasMap);
    const upsertPizza = (key, values) => {
        // pizzas.ref = ADDR_231543
        setPizzas((prevPizzas) => {
            const nextPizzas = new Map(prevPizzas);
            // nextPizzas.ref = ADDR_231545
            nextPizzas.set(key, values);
            return nextPizzas
        })
    }
    const removePizza = (key) => {
        // pizzas.ref = ADDR_231543
        setPizzas((prevPizzas) => {
            const nextPizzas = new Map(prevPizzas);
            // nextPizzas.ref = ADDR_231545
            nextPizzas.delete(key);
            return nextPizzas
        })
    }
    const addPizza = () =>
        upsertPizza(Array.from(pizzas.keys()).at(-1) + 1, {price: 30, quantity: 1, size: 30})
    return (
        <div className="App">
            <Header/>
            <Container>
                <Row className='d-flex justify-content-center'>
                    {
                        Array.from(pizzas.entries())
                            .map(([key, object]) => (
                                <PizzaFormTile
                                    pizzas={pizzas}
                                    key={key}
                                    label={key}
                                    values={object}
                                    measurement={measurements[0]}
                                    currency={currencies[0]}
                                    update={(values) => upsertPizza(key, values)}
                                    remove={() => removePizza(key)}
                                />
                            ))
                    }
                </Row>
                <Row className='d-flex justify-content-center pb-3'>
                    <Button
                        variant='success'
                        onClick={addPizza}
                        className='my-3'
                        style={{width: "fit-content"}}
                    >
                        Add pizza +
                    </Button>
                    <hr/>
                    <Result
                        pizzas={pizzas}
                    />
                </Row>
            </Container>
        </div>);
}
export default App;