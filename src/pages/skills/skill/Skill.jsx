import "./Skill.css";

function Skill(props) {

    return <div id="row">
        <label>
            <input type="text" data-testid={`skill-${props.count}`}/>
            Skill {props.count}
        </label>
        <label>
            <input type="radio" value="beginner" name={`proficiency-${props.count}`} data-testid={`proficiency-${props.count}`}/>
            Beginner
        </label>
        <label>
            <input type="radio" value="user" name={`proficiency-${props.count}`} data-testid={`proficiency-${props.count}`}/>
            User
        </label>
        <label>
            <input type="radio" value="expert" name={`proficiency-${props.count}`} data-testid={`proficiency-${props.count}`}/>
            Expert
        </label>
        <label>
            <input type="radio" value="master" name={`proficiency-${props.count}`} data-testid={`proficiency-${props.count}`}/>
            Master
        </label>
    </div>;
}

export default Skill;