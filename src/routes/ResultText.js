import {Container} from "react-bootstrap";
import React, {useEffect} from "react";
import PropTypes from "prop-types";
import connections from "./MeasuresObject";

function ResultText({
                        headings,
                        pizzaMeasuresInputs,
                        pizzaMeasuresResult,
                        pizzaSizes,
                        pizzaQuantities,
                        pizzaPrices,
                        pizzaCompare,
                    }) {
    let inputPizzaMeasures = pizzaMeasuresInputs.map(el => (connections.find(mes => mes.measure === el.value)).values)
    let pizzaSizesInCmResultsFactor = pizzaMeasuresResult.map(el => (connections[4].values).find(mes => mes.measure === el.value))
    // let pizzaSizesInCmResults2 = pizzaSizesInCmResults.map((item,index)=>({
    //     ...item,
    //     id:pizzaCompare[index].id,
    // }))
    let betterOptionValues = pizzaCompare.map((el, index) => el.value * pizzaSizesInCmResultsFactor[index].value)
    let betterOption = betterOptionValues.findIndex(el => el === Math.min(...betterOptionValues))
    const realPizzaSizeFactorInputs = pizzaMeasuresResult.map((el,index) => (inputPizzaMeasures[index]).find(mes => mes.measure === 'cm'))
    const percentageValue = () => {
        let counter = 1
        betterOptionValues = pizzaCompare.map((el, index) => el.value * pizzaSizesInCmResultsFactor[index].value)
        betterOption = betterOptionValues.findIndex(el => el === Math.min(...betterOptionValues))
        let message = ''
        let betterPizzas = [headings[betterOption]]
        const pizzaAreas = pizzaCompare.map((el, index) => (
            ((Math.PI * (((pizzaSizes[index].value * realPizzaSizeFactorInputs[index].value) / 2) ** 2))
                .toFixed(2)) * pizzaQuantities[index].value))
        const totalCosts = pizzaCompare.map((el, index) => (
            Math.max(...pizzaAreas) * betterOptionValues[index]
        ))
        const trimValues = (values, valueOption) => {
            const secondOptionValues = values.slice()
            secondOptionValues.splice(valueOption, 1)
            const secondOption = secondOptionValues.findIndex(el => el === Math.min(...secondOptionValues))
            if (secondOptionValues[secondOption] === values[valueOption] && secondOptionValues.length >= 1) {
                betterPizzas.push(headings[secondOption < valueOption ? secondOption : secondOption + counter])
                counter++
                trimValues(secondOptionValues, secondOption)
            } else if (secondOptionValues[secondOption] !== values[valueOption]) {
                const percentage = (((totalCosts[betterOptionValues.findIndex(el => el === secondOptionValues[secondOption])]
                    / totalCosts[betterOption]) - 1) * 100)
                    .toFixed(2)
                return message = `
                ${betterPizzas.join(' and ')} 
                ${betterPizzas.length === 1 ? 'is' : 'are'} 
                more profitable than the second one (${headings[betterOptionValues.findIndex(el => el === secondOptionValues[secondOption])]}) 
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
    pizzaMeasuresInputs: PropTypes.array.isRequired,
    pizzaMeasuresResult: PropTypes.array.isRequired,
    pizzaSizes: PropTypes.array.isRequired,
    pizzaQuantities: PropTypes.array.isRequired,
    pizzaPrices: PropTypes.array.isRequired,
    pizzaCompare: PropTypes.array.isRequired,
}

export default ResultText;