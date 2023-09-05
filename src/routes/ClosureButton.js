import {Button} from "react-bootstrap";
import PropTypes from "prop-types";

function ClosureButton({
                           pizzas,
                           id,
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
                           onPizzaCurrencyInputs,
                           onPizzaSizesChange,
                           onPizzaQuantitiesChange,
                           onPizzaPricesChange,
                           onPizzaCompareChange,
                       }) {
    const handleClosure = () => {
        const removeElement = (array, func) => {
            array.splice(id, 1)
            func([...array])
        }
        removeElement(pizzas, onPizzasChange)
        removeElement(pizzaMeasuresInputs, onPizzaMeasuresInputsChange)
        removeElement(pizzaMeasuresResult, onPizzaMeasuresResultChange)
        removeElement(pizzaCurrencyInputs, onPizzaCurrencyInputs)
        removeElement(pizzaSizes, onPizzaSizesChange)
        removeElement(pizzaQuantities, onPizzaQuantitiesChange)
        removeElement(pizzaPrices, onPizzaPricesChange)
        removeElement(pizzaCompare, onPizzaCompareChange)
    }
    return (
        <div
            className='ClosureButton'
        >
            <Button
                className='closeBtn'
                variant='danger'
                onClick={handleClosure}
            >
                X
            </Button>
        </div>
    );
}

ClosureButton.propTypes = {
    pizzas: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
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
    onPizzaCurrencyInputs: PropTypes.func.isRequired,
    onPizzaSizesChange: PropTypes.func.isRequired,
    onPizzaQuantitiesChange: PropTypes.func.isRequired,
    onPizzaPricesChange: PropTypes.func.isRequired,
    onPizzaCompareChange: PropTypes.func.isRequired,
}
export default ClosureButton;