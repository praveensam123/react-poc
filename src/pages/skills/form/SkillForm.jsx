import "./SkillForm.css";
import {useState} from "react";
import Skill from "../skill/Skill";

function SkillForm() {

    const [skills, setSkills] = useState([]);
    const [counter, setCounter] = useState(1);

    const handleAddSkill = () => {
        setSkills([...skills, <Skill key={counter} count={counter}/>]);
        setCounter(counter + 1);
    };

    return <div id="column">
        <button className="btn" onClick={handleAddSkill}>Add Skill</button>
        {skills}
        <button type="submit" className="btn">Submit</button>
    </div>;
}

export default SkillForm;