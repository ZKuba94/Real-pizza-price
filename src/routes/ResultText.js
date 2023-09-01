import {Container} from "react-bootstrap";
import React, {useEffect} from "react";
import PropTypes from "prop-types";
import connections from "./MeasuresObject";

function ResultText({
                        headings,
                        pizzaCompare,
                        pizzaPrices,
                        pizzaSizes,
                        pizzaQuantities,
                        pizzaMeasuresInputs,
                        pizzaMeasuresResult,
                    }) {

    let inputPizzaMeasures = pizzaMeasuresInputs.map(el => (connections.find(mes => mes.measure === el.value)).values)
    let pizzaSizesInCmResults = pizzaMeasuresResult.map(el => (connections[4].values).find(mes => mes.measure === el.value))
    let betterOptionValues = pizzaCompare.map(el => el.value * pizzaSizesInCmResults[el.id].value)
    let betterOption = betterOptionValues.findIndex(el => el === Math.min(...betterOptionValues))
    const realPizzaSizeFactorInputs = pizzaMeasuresResult.map(el => (inputPizzaMeasures[el.id]).find(mes => mes.measure === el.value))

    const percentageValue = () => {
        betterOptionValues = pizzaCompare.map(el => el.value * pizzaSizesInCmResults[el.id].value)
        betterOption = betterOptionValues.findIndex(el => el === Math.min(...betterOptionValues))
        let message = ''
        let betterPizzas = [headings[betterOption]]
        const pizzaAreas = pizzaCompare.map(el => (
            ((Math.PI * (((pizzaSizes[el.id].value * realPizzaSizeFactorInputs[el.id].value) / 2) ** 2))
                .toFixed(2)) * pizzaQuantities[el.id].value))
        const totalCosts = pizzaCompare.map(el => (
            Math.max(...pizzaAreas) * betterOptionValues[el.id]
        ))
        const trimValues = (values, valueOption) => {
            const secondOptionValues = values.slice()
            secondOptionValues.splice(valueOption, 1)
            const secondOption = secondOptionValues.findIndex(el => el === Math.min(...secondOptionValues))
            if (secondOptionValues[secondOption] === values[valueOption] && secondOptionValues.length >= 1) {
                betterPizzas.push(headings[secondOption<valueOption?secondOption:secondOption+1])
                trimValues(secondOptionValues, secondOption)
            } else if (secondOptionValues[secondOption] !== values[valueOption]) {
                const percentage = (((totalCosts[betterOptionValues.findIndex(el=>el ===secondOptionValues[secondOption])]
                    / totalCosts[betterOption])-1)*100)
                    .toFixed(2)
                return message = `
                ${betterPizzas.join(' and ')} 
                ${betterPizzas.length===1?'is':'are'} 
                more profitable than the second one (${headings[betterOptionValues.findIndex(el=>el ===secondOptionValues[secondOption])]}) 
                by ${percentage}%, considering whole area of pizza.`
            }
        }
        if (betterOptionValues.every(el => el === betterOptionValues[0])) {
            return message = 'Each pizza is equally profitable!'
        } else {
            trimValues(betterOptionValues, betterOption)
        }
        return message
    }

    useEffect(() => {
        percentageValue()
    }, [pizzaMeasuresResult, pizzaCompare, pizzaPrices, pizzaSizes, pizzaQuantities])
    return (
        <Container
            className='ResultText'
        >
            <p>
                {percentageValue()}
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