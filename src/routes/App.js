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
    const [pizzaSize, setPizzaSize] = useState(30)
    const [pizzaMeasure, setPizzaMeasure] = useState(measurements[0])
    const [actPizzaQuantity, setQuantityChange] = useState(2)
    const [actPizzaPrice, setPizzaPriceChange] = useState(42)
    const [actPizzaCurrency, setPizzaCurrencyChange] = useState(currencies[0])
    return (
        <div className="App">
            <Header/>
            <Inputs
                measures={measurements}
                currencies={currencies}
                actPizzaSize={pizzaSize}
                onPizzaSizeChange={setPizzaSize}
                actPizzaMeasure={pizzaMeasure}
                onPizzaMeasureChange={setPizzaMeasure}
                actPizzaQuantity={actPizzaQuantity}
                onQuantityChange={setQuantityChange}
                actPizzaPrice={actPizzaPrice}
                onPizzaPriceChange={setPizzaPriceChange}
                actPizzaCurrency={actPizzaCurrency}
                onPizzaCurrencyChange={setPizzaCurrencyChange}
            />
            <Container className='my-4'>
                <ProgressBar striped variant="primary" now={100} className='w-100'/>
            </Container>
            <Results
                measures={measurements}
                currencies={currencies}
                actPizzaSize={pizzaSize}
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
