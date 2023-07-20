import {Container} from "react-bootstrap";
import React, {useEffect} from "react";

function ResultText({
                        headings,
                        pizzaCompare,
                        pizzaPrices,
                        pizzaSizes,
                        pizzaQuantities,
                    }) {
    const betterOption = pizzaCompare[0].value > pizzaCompare[1].value ? 1 : 0
    const percentageValue = () => {
        const area0 = (((Math.PI * ((pizzaSizes[0].value / 2) ** 2)).toFixed(2)) * pizzaQuantities[0].value)
        const area1 = (((Math.PI * ((pizzaSizes[1].value / 2) ** 2)).toFixed(2)) * pizzaQuantities[1].value)
        const totalCost0 = Math.max(area0, area1) * pizzaCompare[0].value
        const totalCost1 = Math.max(area0, area1) * pizzaCompare[1].value
        return (
            betterOption === 0
                ? (((totalCost1 / totalCost0) - 1) * 100).toFixed(2)
                : (((totalCost0 / totalCost1) - 1) * 100).toFixed(2)
        )
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