import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Inputs from "./Inputs";
import Results from "./Results"
import {useState} from "react";
import {Container, ProgressBar} from "react-bootstrap";

function App() {
    const measurements = ['cm', 'm', 'in', 'ft'];
    const currencies = ['PLN', 'USD', 'EUR']
    const pizzas = ['Pizza 1', 'Pizza 2']
    const [pizzaMeasure, setPizzaMeasure] = useState(measurements[0])
    const [actPizzaCurrency, setPizzaCurrencyChange] = useState(currencies[0])
    const [pizzaSizes, setPizzaSizes] = useState([
        {id:0, value:10},
        {id:1, value:20},
    ])
    const [pizzaQuantities, setQuantitiesChange] = useState([
        {id: 0, value: 2},
        {id: 1, value: 2},
    ])
    const [pizzaPrices,setPizzaPrices] = useState([
        {id: 0, value: 50},
        {id: 1, value: 70},
    ])
    return (
        <div className="App">
            <Header/>
            <Inputs
                headings={pizzas}
                measures={measurements}
                currencies={currencies}
                actPizzaMeasure={pizzaMeasure}
                onPizzaMeasureChange={setPizzaMeasure}
                actPizzaCurrency={actPizzaCurrency}
                onPizzaCurrencyChange={setPizzaCurrencyChange}
                pizzaSizesObj={pizzaSizes}
                onPizzaSizesChange={setPizzaSizes}
                pizzaQuantities={pizzaQuantities}
                onPizzaQuantitiesChange={setQuantitiesChange}
                pizzaPrices={pizzaPrices}
                onPizzaPricesChange={setPizzaPrices}
            />
            <Container className='my-4'>
                <ProgressBar striped variant="primary" now={100} className='w-100'/>
            </Container>
                <Results
                    pizzas={pizzas}
                    actPizzaMeasure={pizzaMeasure}
                    actPizzaCurrency={actPizzaCurrency}
                />
            <Container className='my-4'>
                <ProgressBar striped variant="primary" now={100} className='w-100'/>
            </Container>
        </div>
    );
}

export default App;