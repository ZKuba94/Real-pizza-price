import {Button} from "react-bootstrap";
import PropTypes from "prop-types";

function AddPizzaButton({
                            pizzas,
                            headings,
                            pizzaMeasuresInputs,
                            pizzaMeasuresResult,
                            pizzaCurrencyInputs,
                            pizzaSizes,
                            pizzaQuantities,
                            pizzaPrices,
                            pizzaCompare,
                            onPizzasChange,
                            onPizzaMeasuresInputsChange,
                            onPizzaMeasuresResultChange,
                            onPizzaCurrencyInputsChange,
                            onPizzaSizesChange,
                            onPizzaQuantitiesChange,
                            onPizzaPricesChange,
                            onPizzaCompareChange,
                        }) {
    const handleClick = () => {
        const newPizza = {id: pizzas.length, value: `Pizza ${headings.length + 1}`}
        onPizzasChange([...pizzas, newPizza])
        const addElement = (array, func) => {
            const newElement = {id: headings.length, value: array[headings.length - 2].value}
            func([...array, newElement])
        }
        addElement(pizzaMeasuresInputs, onPizzaMeasuresInputsChange)
        addElement(pizzaMeasuresResult, onPizzaMeasuresResultChange)
        addElement(pizzaCurrencyInputs, onPizzaCurrencyInputsChange)
        addElement(pizzaSizes, onPizzaSizesChange)
        addElement(pizzaQuantities, onPizzaQuantitiesChange)
        addElement(pizzaPrices, onPizzaPricesChange)
        addElement(pizzaCompare, onPizzaCompareChange)
    }
    return (
        <div
            className='AddPizzaButton d-flex h-100'
        >
            <Button
                className='addPizzaBtn mx-3 w-100'
                variant='primary'
                onClick={handleClick}
            >
                Add Pizza ! <br/> +
            </Button>
        </div>
    );
}

AddPizzaButton.propTypes = {
    pizzas: PropTypes.array.isRequired,
    headings: PropTypes.array.isRequired,
    pizzaMeasuresInputs: PropTypes.array.isRequired,
    pizzaMeasuresResult: PropTypes.array.isRequired,
    pizzaCurrencyInputs: PropTypes.array.isRequired,
    pizzaSizes: PropTypes.array.isRequired,
    pizzaQuantities: PropTypes.array.isRequired,
    pizzaPrices: PropTypes.array.isRequired,
    pizzaCompare: PropTypes.array.isRequired,
    onPizzasChange: PropTypes.func.isRequired,
    onPizzaMeasuresInputsChange: PropTypes.func.isRequired,
    onPizzaMeasuresResultChange: PropTypes.func.isRequired,
    onPizzaCurrencyInputsChange: PropTypes.func.isRequired,
    onPizzaSizesChange: PropTypes.func.isRequired,
    onPizzaQuantitiesChange: PropTypes.func.isRequired,
    onPizzaPricesChange: PropTypes.func.isRequired,
    onPizzaCompareChange: PropTypes.func.isRequired,
}
export default AddPizzaButton;