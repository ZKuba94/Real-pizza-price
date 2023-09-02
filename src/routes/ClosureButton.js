import {Button} from "react-bootstrap";

function ClosureButton({
                           id,
                           pizzas,
                           setPizzas,
                           pizzaMeasuresInputs,
                           setPizzaMeasuresInputs,
                           pizzaMeasuresResult,
                           setPizzaMeasuresResult,
                           pizzaCurrencyInputs, setPizzaCurrencyInputs,
                           pizzaSizes,
                           setPizzaSizes,
                           pizzaQuantities,
                           setQuantitiesChange,
                           pizzaPrices,
                           setPizzaPrices,
                           pizzaCompare,
                           setPizzaCompare,
                       }) {
    console.log(pizzas)
    const handleClosure = () => {
        const removeElement = (array, func) => {
            array.splice(id, 1)
            // const newElement = {id: headings.length, value: array[headings.length - 2].value}
            func([array])
        }
        removeElement(pizzas, setPizzas)
        removeElement(pizzaMeasuresInputs, setPizzaMeasuresInputs)
        removeElement(pizzaMeasuresResult, setPizzaMeasuresResult)
        removeElement(pizzaCurrencyInputs, setPizzaCurrencyInputs)
        removeElement(pizzaSizes, setPizzaSizes)
        removeElement(pizzaQuantities, setQuantitiesChange)
        removeElement(pizzaPrices, setPizzaPrices)
        removeElement(pizzaCompare, setPizzaCompare)
        console.log(pizzas)
    }
    return (
        <div
            className='ClosureButton'
        >
            <Button
                className='closeBtn'
                variant='secondary'
                onClick={handleClosure}
            >
                X
            </Button>
        </div>
    );
}

export default ClosureButton;