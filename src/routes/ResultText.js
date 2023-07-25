import {Container} from "react-bootstrap";
import React, {useEffect} from "react";
import PropTypes from "prop-types";

function ResultText({
                        headings,
                        pizzaCompare,
                        pizzaPrices,
                        pizzaSizes,
                        pizzaQuantities,
                        pizzaMeasuresResult,
                    }) {
    let betterOption = pizzaCompare[0].value > pizzaCompare[1].value ? 1 : 0
    let pizzaSizeInCm;
    switch (pizzaMeasuresResult[0].value) {
        case "cm":
            pizzaSizeInCm = 1;
            break;
        case "m":
            pizzaSizeInCm = 0.01;
            break;
        case "in":
            pizzaSizeInCm = 0.394;
            break;
        case "ft":
            pizzaSizeInCm = 0.033;
            break;
        default:
            pizzaSizeInCm = {};
            break;
    }

    const percentageValue = () => {
        const pizzaCount = [...headings.keys()]
        const betterOptionValues = pizzaCount.map(el => (
            pizzaCompare[el].value
        ))
        betterOption = betterOptionValues.findIndex(el => el === Math.min(...betterOptionValues))
        const pizzaAreas = pizzaCount.map(el => (
            ((Math.PI * (((pizzaSizes[el].value * pizzaSizeInCm) / 2) ** 2)).toFixed(2)) * pizzaQuantities[el].value))
        const totalCosts = pizzaCount.map(el => (
            Math.max(...pizzaAreas) * pizzaCompare[el].value
        ))
        console.log(pizzaAreas)
        console.log(pizzaCompare)
        return (
            betterOption === 0
                ? (((totalCosts[1] / totalCosts[0]) - 1) * 100).toFixed(2)
                : (((totalCosts[0] / totalCosts[1]) - 1) * 100).toFixed(2)
        )
    }
    useEffect(() => {
        percentageValue()
    }, [pizzaMeasuresResult,pizzaCompare, pizzaPrices, pizzaSizes, pizzaQuantities])
    return (
        <Container
            className='ResultText'
        >
            <p>
                {pizzaCompare[0].value === pizzaCompare[1].value ?
                    `Both pizzas are equally profitable.`
                    : `More profitable is ${headings[betterOption]}. Its more profitable by ${percentageValue()}%, considering whole area of pizza.`}
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