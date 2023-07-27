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
    let betterOptionValues = pizzaCompare.map(el=>el.value)
    let betterOption = betterOptionValues.findIndex(el => el === Math.min(...betterOptionValues))
    let pizzaSizesInCm= pizzaMeasuresResult.map(el=>{
        switch (el.value) {
            case "cm":
                return 1;
            case "m":
                return 0.01;
            case "in":
                return 0.394;
            case "ft":
                return 0.033;
            default:
                return '';
        }
    })
    const percentageValue = () => {
        const betterOptionValues = pizzaCompare.map(el=>el.value)
        betterOption = betterOptionValues.findIndex(el => el === Math.min(...betterOptionValues))
        const pizzaAreas = pizzaCompare.map(el => (
            ((Math.PI * (((pizzaSizes[el.id].value * pizzaSizesInCm[el.id]) / 2) ** 2)).toFixed(2)) * pizzaQuantities[el.id].value))
        const totalCosts = pizzaCompare.map(el => (
            Math.max(...pizzaAreas) * pizzaCompare[el.id].value
        ))
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
                {pizzaCompare.every((el)=> el.value === pizzaCompare[0].value) ?
                    `Each pizza is equally profitable.`
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