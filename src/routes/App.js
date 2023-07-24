import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Inputs from "./Inputs";
import Results from "./Results"
import {useState} from "react";
import {Container, ProgressBar} from "react-bootstrap";
import ResultText from "./ResultText";

function App() {
    const measurements = ['cm', 'm', 'in', 'ft'];
    const currencies = ['PLN', 'USD', 'EUR']
    const pizzas = ['Pizza 1', 'Pizza 2']
    const [pizzaMeasuresInputs, setPizzaMeasuresInputs] = useState([
        {id: 0, value: measurements[0]},
        {id: 1, value: measurements[0]},
    ])
    const [pizzaMeasuresResult, setPizzaMeasuresResult] = useState([
        {id: 0, value: measurements[0]},
        {id: 1, value: measurements[0]},
    ])
    const [pizzaCurrencyInputs, setPizzaCurrencyInputs] = useState([
        {id: 0, value: currencies[0]},
        {id: 1, value: currencies[0]},
    ])
    const [pizzaSizes, setPizzaSizes] = useState([
        {id: 0, value: 10},
        {id: 1, value: 20},
    ])
    const [pizzaQuantities, setQuantitiesChange] = useState([
        {id: 0, value: 2},
        {id: 1, value: 2},
    ])
    const [pizzaPrices, setPizzaPrices] = useState([
        {id: 0, value: 50},
        {id: 1, value: 70},
    ])
    const [pizzaCompare, setPizzaCompare] = useState([
        {id: 0, value: 0},
        {id: 1, value: 0},
    ])
    return (
        <div className="App">
            <Header/>
            <Inputs
                headings={pizzas}
                measurements={measurements}
                currencies={currencies}
                pizzaMeasuresInputs={pizzaMeasuresInputs}
                onPizzaMeasureChange={setPizzaMeasuresInputs}
                pizzaCurrencyInputs={pizzaCurrencyInputs}
                onPizzaCurrencyInputs={setPizzaCurrencyInputs}
                pizzaSizesObj={pizzaSizes}
                onPizzaSizesChange={setPizzaSizes}
                pizzaQuantities={pizzaQuantities}
                onPizzaQuantitiesChange={setQuantitiesChange}
                pizzaPrices={pizzaPrices}
                onPizzaPricesChange={setPizzaPrices}
                pizzaCompare={pizzaCompare}
                onPizzaCompareChange={setPizzaCompare}
            />
            <Container
                className='my-4'
            >
                <ProgressBar
                    striped
                    variant="primary"
                    now={100}
                    className='w-100'/>
            </Container>
            <Results
                headings={pizzas}
                measurements={measurements}
                pizzaMeasuresResult={pizzaMeasuresResult}
                onPizzaMeasuresResult={setPizzaMeasuresResult}
                pizzaCurrencyResults={pizzaCurrencyInputs}
                pizzaSizesObj={pizzaSizes}
                pizzaQuantities={pizzaQuantities}
                pizzaPrices={pizzaPrices}
                pizzaCompare={pizzaCompare}
                onPizzaCompareChange={setPizzaCompare}
            />
            <Container
                className='my-4'
            >
                <ProgressBar
                    striped
                    variant="primary"
                    now={100}
                    className='w-100'
                />
            </Container>
            <ResultText
                headings={pizzas}
                pizzaCompare={pizzaCompare}
                pizzaPrices={pizzaPrices}
                pizzaSizes={pizzaSizes}
                pizzaQuantities={pizzaQuantities}
            />
        </div>
    );
}

export default App;