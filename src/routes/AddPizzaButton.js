import {Button} from "react-bootstrap";

function AddPizzaButton({
                            headings,
                            pizzaMeasuresInputs,
                            pizzaMeasuresResult,
                            pizzaCurrencyInputs,
                            pizzaSizes,
                            pizzaQuantities,
                            pizzaPrices,
                            pizzaCompare,
                            setPizzaCompare,
                            setPizzaCurrencyInputs,
                            setPizzaPrices,
                            setPizzaMeasuresInputs,
                            setQuantitiesChange,
                            setPizzaMeasuresResult,
                            setPizzaSizes,
                            // setPizzas,
                        }) {
    const handleClick = () => {
        // headings.push(`Pizza ${headings.length + 1}`)
        // setPizzas({id: headings.length - 1, value: `Pizza ${headings.length+1}`})
        const addElement = (array, func) => {
            const newElement = {id: headings.length - 1, value: array[headings.length - 2].value}
            func([...array, newElement])
        }
        addElement(pizzaMeasuresInputs,setPizzaMeasuresInputs)
        addElement(pizzaMeasuresResult, setPizzaMeasuresResult)
        addElement(pizzaCurrencyInputs, setPizzaCurrencyInputs)
        addElement(pizzaSizes, setPizzaSizes)
        addElement(pizzaQuantities,setQuantitiesChange)
        addElement(pizzaPrices, setPizzaPrices)
        addElement(pizzaCompare, setPizzaCompare)
        // addElement(headings,setPizzas)
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

export default AddPizzaButton;