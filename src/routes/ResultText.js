import {Container} from "react-bootstrap";
import React, {useEffect} from "react";

function ResultText({
                        headings,
                        pizzaCompare,
                        pizzaPrices,
                        pizzaSizes,
                        pizzaQuantities,
                    }) {
    const betterOption = pizzaCompare[0].value < pizzaCompare[1].value ? 0 : 1
    const percentageValue = () => {
        const something = (Math.abs((((Math.PI * ((pizzaSizes[0].value/2) ** 2)).toFixed(2)) * pizzaQuantities[0].value)
            - (((Math.PI * ((pizzaSizes[1].value/2) ** 2)).toFixed(2)) * pizzaQuantities[1].value))
        * betterOption === 0 ? pizzaCompare[1].value : pizzaCompare[0].value
        + betterOption === 0 ? pizzaPrices[1].value : pizzaPrices[0].value)
        / (betterOption === 0 ? pizzaPrices[0].value : pizzaPrices[1].value)
        console.log(betterOption === 0 ? pizzaPrices[1].value : pizzaPrices[0].value)
        console.log(betterOption === 0 ? pizzaPrices[0].value : pizzaPrices[1].value)
        return ((something - 1)*100).toFixed(2)
    }
    useEffect(() => {
        percentageValue()
    }, [pizzaPrices, pizzaSizes, pizzaQuantities])
    return (
        <Container
            className='ResultText'
        >
            <p>
                {pizzaCompare[0].value === pizzaCompare[1].value ?
                    `Both pizzas are equally profitable. For 1cm of it you will pay: ${((pizzaCompare[betterOption].value) * 100).toFixed(2)} cents. `
                    : `More profitable is ${headings[betterOption]}. Its 1cm cost
                    ${((pizzaCompare[betterOption].value) * 100).toFixed(2)}
                    cents. Its profitable more by ${percentageValue()}%`}
            </p>
        </Container>
    )
}

export default ResultText;