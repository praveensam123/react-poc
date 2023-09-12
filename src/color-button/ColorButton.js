import './ColorButton.css';
import {useState} from "react";

function ColorButton() {

    const [buttonColor, setButtonColor] = useState('blue');
    const newButtonColor = buttonColor === 'blue' ? 'red' : 'blue';

    const [disabled, setDisabled] = useState(false);

    return <div id="page">
        <button style={{backgroundColor: disabled ? 'gray' : buttonColor}}
                disabled={disabled}
                onClick={() => setButtonColor(newButtonColor)}
        >Change to {newButtonColor}
        </button>
        <br/>
        <input type='checkbox'
               data-testid="disableButton-checkbox"
               id='disableButton-checkbox'
               onChange={(event) => setDisabled(event.target.checked)}
        />
        <label htmlFor='disableButton-checkbox'>Disable Button</label>
    </div>;
}

export default ColorButton;
