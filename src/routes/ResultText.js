import {Container} from "react-bootstrap";
import React from "react";

function ResultText({
                        headings,
                        pizzaCompare,
                    }) {
    const betterOption = pizzaCompare[0].value < pizzaCompare[1].value ? 0 : 1
    return (
        <Container
            className='ResultText'
        >
            <p>
                {pizzaCompare[0].value === pizzaCompare[1].value ?
                    `Both pizzas are equally profitable. For 1cm of it you will pay: ${((pizzaCompare[betterOption].value) * 100).toFixed(2)} cents. `
                    : `More profitable is ${headings[betterOption]}. Its 1cm cost
                    ${((pizzaCompare[betterOption].value) * 100).toFixed(2)}
                    cents.`}
            </p>
        </Container>
    )
}

export default ResultText;