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
    const [pizzaMeasure, setPizzaMeasure] = useState(measurements[0])
    const [actPizzaCurrency, setPizzaCurrencyChange] = useState(currencies[0])
    const pizzas = ['Pizza1', 'Pizza2']
    // const items2 = {
    //     size: 'pizzaSize'+pizzas[0],
    //     quantity: 'pizzaQuantity'+pizzas[0],
    //     price: 'pizzaPrice'+pizzas[0],
    //     sizeChange: 'setPizzaSize'+pizzas[0],
    //     quantityChange: 'setQuantity'+pizzas[0],
    //     priceChange: 'setPrice'+pizzas[0],
    // }
    const [pizza1Size, setPizza1Size] = useState(25)
    const [pizza2Size, setPizza2Size] = useState(35)
    const [pizzaQuantity, setQuantityChange] = useState(2)
    const [pizzaPrice, setPizzaPriceChange] = useState(45)

    return (
        <div className="App">
            <Header/>
            <Inputs
                items={pizzas}
                measures={measurements}
                currencies={currencies}
                actPizzaMeasure={pizzaMeasure}
                onPizzaMeasureChange={setPizzaMeasure}
                actPizzaCurrency={actPizzaCurrency}
                onPizzaCurrencyChange={setPizzaCurrencyChange}
                pizza1Size={pizza1Size}
                onPizza1SizeChange={setPizza1Size}
                pizza2Size={pizza2Size}
                onPizza2SizeChange={setPizza2Size}
                pizzaQuantity={pizzaQuantity}
                onPizzaQuantityChange={setQuantityChange}
                pizzaPrice={pizzaPrice}
                onPizzaPriceChange={setPizzaPriceChange}
            />
            <Container className='my-4'>
                <ProgressBar striped variant="primary" now={100} className='w-100'/>
            </Container>
                <Results
                    pizza1Size={pizza1Size}
                    pizza2Size={pizza2Size}
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