const Result = (pizzas) => {
    let message =''
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
                    *Math.max(...pizzaAreas),
            }]
        })
    let bestOption = null
    let bestValue = Infinity
    let secondOption = null
    let secondValue = Infinity
    const resultPercentage = (calculationsMap) => {
        calculationsMap.forEach((obj,key)=>{
            if (obj.pricePerArea<secondValue) {
                secondValue = obj.pricePerArea
                secondOption = [key, obj]
            }
        })
    }
    const calculationsMap = new Map(costsCalculations)
    calculationsMap.forEach((obj,key)=> {
        if (obj.pricePerArea<bestValue) {
            bestValue = obj.pricePerArea
            bestOption = [key, obj]
        }
    })
    calculationsMap.delete(bestOption[0])
    resultPercentage(calculationsMap)
    // const resultPercentage = (pricesPerArea, bestOption) => {
    //     const pricesPerAreaUpdated = pricesPerArea.slice()
    //     pricesPerAreaUpdated.splice(pricesPerAreaUpdated.findIndex(el=>el===Math.min(...pricesPerArea)),1)
    //     const secondOption = Math.min(...pricesPerAreaUpdated)
    //     return message = `
    //     Best option is pizza ${pricesPerArea.findIndex(el => el === Math.min(...pricesPerArea)) + 1}
    //     `
    // }
    //
    // if (costsCalculations.every((el,key)=> el. === )) {
    //     return message = 'Each pizza is equally profitable!'
    // } else {
    //     resultPercentage(costsCalculations,Math.min(...pricesPerArea))
    // }

    const messageText = (secondOption[1].totalCost / bestOption[1].totalCost - 1).toFixed(2) * 100

    return (
        <>
            {messageText}%
        </>
    )
}
export default Result;