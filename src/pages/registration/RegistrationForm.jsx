import React, {useState} from "react";
import "./Registration.css"

export default function TeamForm() {
    const [teamName, setTeamName] = useState("");
    const [language, setLanguage] = useState("");
    const [teamSize, setTeamSize] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Team Name: ${teamName}`);
        console.log(`Language: ${language}`);
        console.log(`Team Size: ${teamSize}`);
        alert("Team " + {teamName} + " Registration Succeeded! Happy Refactoring!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <p>Team Name:</p>
                <input
                    type="text"
                    value={teamName}
                    onChange={(event) => setTeamName(event.target.value)}
                />
            </label>
            <label>
                <p>Language:</p>
                <select value={language} onChange={(event) => setLanguage(event.target.value)}>
                    <option value="">Choose a language</option>
                    <option value="Java">Java</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Python">Python</option>
                </select>
            </label>
            <label>
                <p>Team Size:</p>
                <input
                    type="text"
                    value={teamSize}
                    onChange={(event) => setTeamSize(event.target.value)}
                />
            </label>
            <br/>
            <button type="submit">Register</button>
        </form>
    );
}