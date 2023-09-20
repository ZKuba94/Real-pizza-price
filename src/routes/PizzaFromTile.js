import {Button} from "react-bootstrap";

const PizzaFormTile = ({values, update, label, remove,measurement,currency}) => {
    const {size, price, quantity} = values
    const pricePerArea = () => {
        return (price/(((Math.PI*(size/2)**2)*quantity))).toFixed(4)
    }
    return (
        <div>
            <label>
                Pizza {label}
                <br/>
                <input
                    value={size}
                    type='number'
                    onChange={(e) => {
                        update({...values, size: parseFloat(e.target.value)})
                    }}
                />
                {measurement}
                <br/>
                <input
                    value={quantity}
                    type="number"
                    onChange={(e) => {
                        update({...values, quantity: parseFloat(e.target.value)})
                    }}
                />
                <br/>
                <input
                    value={price}
                    type="number"
                    onChange={(e) => {
                        update({...values, price: parseFloat(e.target.value)})
                    }}
                />
                {currency}
            </label>
            <Button onClick={remove}>-</Button>
            <br/>
            Price per cm<sup>2</sup>: {pricePerArea()}

            <hr/>
        </div>
    );
};

export default PizzaFormTile;