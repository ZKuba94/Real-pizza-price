import PropTypes from "prop-types";

const Result = (pizzas) => {
    const pizzasMap = pizzas.pizzas
    const pizzaAreas = Array.from(pizzasMap.entries())
        .map(([key, object]) => {
            return Math.PI * (((object.size) / 2) ** 2) * object.quantity
        })
    const costsCalculations = Array.from(pizzasMap.entries())
        .map(([key, object]) => {
            return [key, {
                pricePerArea: object.price / (((Math.PI * (object.size / 2) ** 2) * object.quantity)),
                pizzaArea: Math.PI * (((object.size) / 2) ** 2) * object.quantity,
                totalCost: object.price / (((Math.PI * (object.size / 2) ** 2) * object.quantity))
                    * Math.max(...pizzaAreas),
            }]
        })
    let bestOption = null
    let bestValue = Infinity
    let secondOption = null
    let secondValue = Infinity
    let message
    const calculationsSecond = (calculationsBest) => {
        calculationsBest.forEach((obj, key) => {
            if (obj.pricePerArea < secondValue) {
                secondValue = obj.pricePerArea
                secondOption = [key, obj]
            }
        })
    }
    const calculationsBest = new Map(costsCalculations)
    calculationsBest.forEach((obj, key) => {
        if (obj.pricePerArea < bestValue) {
            bestValue = obj.pricePerArea
            bestOption = [key, obj]
        }
    })
    calculationsBest.delete(bestOption[0])
    calculationsSecond(calculationsBest)
    if (secondValue !== Infinity) {
        const percentageValue = ((secondOption[1].totalCost / bestOption[1].totalCost - 1) * 100).toFixed(2)
        message = !(bestValue === secondValue) ? `More profitable is Pizza ${bestOption[0]}, 
    than the second option by ${percentageValue}% considering whole area of pizza.`
            : `Pizza ${bestOption[0]} is equally profitable than second option considering whole area of pizza.`
    } else return message = 'Please insert pizza parameters.'
    return (
        <>
            {message}
        </>
    )
}
Result.protoTypes = {
    pizzas: PropTypes.object.isRequired,
}
export default Result;