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
    const [pizzas, setPizzas] = useState([
        {id: 0, value: 'Pizza 1'},
        {id: 1, value: 'Pizza 2'},
    ])
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
        {id: 0, value: 45},
        {id: 1, value: 30},
    ])
    const [pizzaQuantities, setQuantitiesChange] = useState([
        {id: 0, value: 1},
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
                measurements={measurements}
                currencies={currencies}
                pizzas={pizzas}
                headings={pizzas.map(item => item.value)}
                pizzaMeasuresInputs={pizzaMeasuresInputs}
                pizzaMeasuresResult={pizzaMeasuresResult}
                pizzaCurrencyInputs={pizzaCurrencyInputs}
                pizzaSizesObj={pizzaSizes}
                pizzaQuantities={pizzaQuantities}
                pizzaPrices={pizzaPrices}
                pizzaCompare={pizzaCompare}
                onPizzasChange={setPizzas}
                onPizzaMeasuresInputsChange={setPizzaMeasuresInputs}
                onPizzaMeasuresResultChange={setPizzaMeasuresResult}
                onPizzaCurrencyInputsChange={setPizzaCurrencyInputs}
                onPizzaSizesChange={setPizzaSizes}
                onPizzaQuantitiesChange={setQuantitiesChange}
                onPizzaPricesChange={setPizzaPrices}
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
                measurements={measurements}
                pizzas={pizzas}
                headings={pizzas.map(item => item.value)}
                pizzaMeasuresInputs={pizzaMeasuresInputs}
                pizzaMeasuresResult={pizzaMeasuresResult}
                pizzaCurrencyInputs={pizzaCurrencyInputs}
                pizzaCurrencyResults={pizzaCurrencyInputs}
                pizzaSizesObj={pizzaSizes}
                pizzaQuantities={pizzaQuantities}
                pizzaPrices={pizzaPrices}
                pizzaCompare={pizzaCompare}
                onPizzasChange={setPizzas}
                onPizzaMeasuresInputsChange={setPizzaMeasuresInputs}
                onPizzaMeasuresResultChange={setPizzaMeasuresResult}
                onPizzaCurrencyInputsChange={setPizzaCurrencyInputs}
                onPizzaSizesChange={setPizzaSizes}
                onPizzaQuantitiesChange={setQuantitiesChange}
                onPizzaPricesChange={setPizzaPrices}
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
                headings={pizzas.map(item => item.value)}
                pizzaMeasuresInputs={pizzaMeasuresInputs}
                pizzaMeasuresResult={pizzaMeasuresResult}
                pizzaSizes={pizzaSizes}
                pizzaQuantities={pizzaQuantities}
                pizzaPrices={pizzaPrices}
                pizzaCompare={pizzaCompare}
            />
        </div>
    );
}

export default App;