import {Container} from "react-bootstrap";
import React from "react";

function ResultText({
                                headings,
    pizzaCompare,
                                actPizzaMeasure,
                                actPizzaCurrency,
                                pizzaSize,
                                pizzaQuantity,
                                pizzaPrice,
                            }) {

    return (
        <Container className='ResultText'>
            More profitable is "{headings[0]}". Its 1cm<sup>2</sup> cost "{((pizzaCompare[0].value)*100).toFixed(2)}" cents.
        </Container>
    )
}

export default ResultText;