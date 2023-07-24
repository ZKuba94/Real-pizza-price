import {Container} from "react-bootstrap";
import React, {useEffect} from "react";
import PropTypes from "prop-types";

function ResultText({
                        headings,
                        pizzaCompare,
                        pizzaPrices,
                        pizzaSizes,
                        pizzaQuantities,
                    }) {
    let betterOption = pizzaCompare[0].value > pizzaCompare[1].value ? 1 : 0
    const percentageValue = () => {
        const pizzaCount = [...headings.keys()]
        const betterOptionValues = pizzaCount.map(el => (
            pizzaCompare[el].value
        ))
        betterOption = betterOptionValues.findIndex(el => el === Math.min(...betterOptionValues))
        const pizzaAreas = pizzaCount.map(el => (
            ((Math.PI * ((pizzaSizes[el].value / 2) ** 2)).toFixed(2)) * pizzaQuantities[el].value))
        const totalCosts = pizzaCount.map(el => (
            Math.max(...pizzaAreas) * pizzaCompare[el].value
        ))
        return (
            betterOption === 0
                ? (((totalCosts[1] / totalCosts[0]) - 1) * 100).toFixed(2)
                : (((totalCosts[0] / totalCosts[1]) - 1) * 100).toFixed(2)
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
                    cents. Its more profitable by ${percentageValue()}%, considering whole area of pizza.`}
            </p>
        </Container>
    )
}

ResultText.propTypes = {
    headings: PropTypes.array.isRequired,
    pizzaCompare: PropTypes.array.isRequired,
    pizzaPrices: PropTypes.array.isRequired,
    pizzaSizes: PropTypes.array.isRequired,
    pizzaQuantities: PropTypes.array.isRequired,
}

export default ResultText;