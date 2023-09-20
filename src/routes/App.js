import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import PizzaFormTile from "./PizzaFromTile";
import Result from "./Result"
import {useState} from "react";
import {Button} from "react-bootstrap";

const measurements = ['cm', 'm', 'in', 'ft'];
const currencies = ['PLN', 'USD', 'EUR'];

// const curSet = new Set(currencies);
// curSet.add('AUD');
// curSet.add('PLN');
// curSet.has('AUD');
// curSet.delete('AUD')
// curSet.has('AUD');
// Array.from(curSet.values());
//
// //  6  7   8
// // [x][x1][x2]
//
// const x = { d: '', c: 11 } // x === addr_1231255
// const x1 = { d: '', c: 11 } // x === addr_1231256
//
// const arr = [x, x1];
// arr.push({ d: '', c: 11})
//
// arr[0] // x === addr_1231255
// arr[1] // x === addr_1231256
// arr[2] // x === addr_1231257


const initialPizzasMap = new Map([
    [
        1, {price: 45, quantity: 1, size: 45} // [key, value(object mostly)]
    ],
    [
        2, {price: 30, quantity: 2, size: 30}
    ]
])


// initialPizzasMap.set('Pizza 3', {
//     price: 0, quantity: 1, size: 50,
// });
//
// initialPizzasMap.delete('Pizza 1')
// initialPizzasMap.get('Pizza 2')
//
// Array.from(initialPizzasMap.entries())
//     .map((entry) => {
//         // [
//         const [key, {size, quantity, price}] = entry;
//         return `label: ${key}, price: ${price}`
//     })
//
// console.log(initialPizzas);

// const pricePerArea = (values) => {
//     const {size, price, quantity} = values
//     return size*quantity*price
// }

function App() {
    const [pizzas, setPizzas] = useState(initialPizzasMap);
    // const [currency, setCurrency] = useState(currencies[0]);

    // const bestPizza = Array.from(pizzas.values());

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

    const addPizza = () => upsertPizza(Array.from(pizzas.keys()).at(-1) + 1, {price: 30, quantity: 1, size: 30})
    // Map size === Array length // arr.at(1) === arr[1]

    return (<div className="App">
        <Header/>
        {
            Array.from(pizzas.entries())
                .map(([key, object]) => (
                    <PizzaFormTile
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
        <Button onClick={addPizza}>+</Button>
        <hr/>
        <Result
            pizzas={pizzas}
        />
    </div>);
}

export default App;