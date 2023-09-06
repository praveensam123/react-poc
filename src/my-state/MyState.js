import {useState} from "react";
import "./MyState.css";

export const MyState = () => {
    const [value, setValue] = useState(1);
    return <div>
        <button
            style={{ backgroundColor: "aqua"}}
            onClick={() => setValue(value + 1)}
        >Increment
        </button>
        <span data-testid="val">{value}</span>
    </div>;
}
