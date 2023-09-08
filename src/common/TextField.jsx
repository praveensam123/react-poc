export default function TextField(props) {
    return <label>
        <input type="text"
               value={props.value}
               id={props.name}
               name={props.name}
               data-testid={props.name}/>
        {props.label}
    </label>;
}