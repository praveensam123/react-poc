import "./Skill.css";
import Radio from "../../../common/Radio";
import TextField from "../../../common/TextField";

function Skill(props) {
    return <div id="row">
        <TextField name={`skill-${props.count}`} label={`Skill ${props.count}`}/>
        <Radio name="proficiency" label="Beginner" value="beginner" count={props.count}/>
        <Radio name="proficiency" label="User" value="user" count={props.count}/>
        <Radio name="proficiency" label="Expert" value="expert" count={props.count}/>
        <Radio name="proficiency" label="Master" value="master" count={props.count}/>
    </div>;
}

export default Skill;