export default function Radio(props) {
    return <label>
        <input type="radio"
               value={props.value}
               name={`${props.name}-${props.count}`}
               data-testid={`${props.name}-${props.count}`}/>
        {props.label}
    </label>;
}