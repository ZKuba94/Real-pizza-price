import {Button, InputGroup, Form, Col, Row} from "react-bootstrap";

const PizzaFormTile = ({pizzas, label, values, measurement, currency, update, remove}) => {
    const {size, price, quantity} = values
    const pricePerArea = () => {
        return (price / (((Math.PI * (size / 2) ** 2) * quantity))).toFixed(4)
    }
    return (
        <Col xs={10} sm={5} className='border border-secondary'>
            <div>
                <label className='d-flex justify-content-between'>
                    <p>Pizza {label}</p>
                    {pizzas.size > 2 ? <Button variant='danger' onClick={remove} className='my-2'>-</Button> : ''}
                </label>
                <InputGroup size="md" className='mb-1'>
                    <Form.Control
                        type='number'
                        aria-label="size"
                        aria-describedby="size"
                        value={size}
                        onChange={(e) => {
                            update({...values, size: parseFloat(e.target.value)})
                        }}
                    />
                    <InputGroup.Text id="size">{measurement}</InputGroup.Text>
                </InputGroup>
                <InputGroup size="md" className='mb-1'>
                    <Form.Control
                        type='number'
                        aria-label="quantity"
                        aria-describedby="quantity"
                        value={quantity}
                        onChange={(e) => {
                            update({...values, quantity: parseFloat(e.target.value)})
                        }}
                    />
                    <InputGroup.Text id="quantity">quantity</InputGroup.Text>
                </InputGroup>
                <InputGroup size="md" className='mb-1'>
                    <Form.Control
                        type='number'
                        aria-label="price"
                        aria-describedby="price"
                        value={price}
                        onChange={(e) => {
                            update({...values, price: parseFloat(e.target.value)})
                        }}
                    />
                    <InputGroup.Text id="price">{currency}</InputGroup.Text>
                </InputGroup>
                {/*<br/>*/}
                {/*<input*/}
                {/*    value={size}*/}
                {/*    type='number'*/}
                {/*    onChange={(e) => {*/}
                {/*        update({...values, size: parseFloat(e.target.value)})*/}
                {/*    }}*/}
                {/*/>*/}
                {/*{measurement}*/}
                {/*<br/>*/}
                {/*<input*/}
                {/*    value={quantity}*/}
                {/*    type="number"*/}
                {/*    onChange={(e) => {*/}
                {/*        update({...values, quantity: parseFloat(e.target.value)})*/}
                {/*    }}*/}
                {/*/>*/}
                {/*<br/>*/}
                {/*<input*/}
                {/*    value={price}*/}
                {/*    type="number"*/}
                {/*    onChange={(e) => {*/}
                {/*        update({...values, price: parseFloat(e.target.value)})*/}
                {/*    }}*/}
                {/*/>*/}
                {/*{currency}*/}
                {/*</label>*/}
                {/*<br/>*/}
                <p className='mb-0'>Price: {pricePerArea()} {currency}/{measurement}<sup>2</sup></p>
            </div>
        </Col>
    );
};

export default PizzaFormTile;