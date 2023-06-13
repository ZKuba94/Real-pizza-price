import {Button} from "react-bootstrap";

function AddPizzaButton() {
    return (
        <div className='AddPizzaButton d-flex h-100'>
            <Button className='addPizzaBtn mx-3 w-100' variant='primary'>Add Pizza ! <br/> + </Button>
        </div>
    );
}
export default AddPizzaButton;