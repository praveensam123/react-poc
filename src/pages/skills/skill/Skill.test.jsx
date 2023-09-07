import {render, screen} from "@testing-library/react";
import Skill from "./Skill";

describe("Skill Component Tests", () => {
    it("renders skill field to add skill", () => {
        render(<Skill count={1}/>);
        const skillField = screen.getByTestId("skill-1", {});
        expect(skillField).toBeInTheDocument();
    });

    it("render radio buttons to select proficiency level", () => {
        render(<Skill count={1}/>);
        expect(screen.getByLabelText("Beginner", {})).toBeInTheDocument();
        expect(screen.getByLabelText("User", {})).toBeInTheDocument();
        expect(screen.getByLabelText("Expert", {})).toBeInTheDocument();
        expect(screen.getByLabelText("Master", {})).toBeInTheDocument();
    });

    it("renders skill field with label 'Skill 1'", () => {
        render(<Skill count={1}/>);
        const skillLabel = screen.getByLabelText("Skill 1", {});
        expect(skillLabel).toBeInTheDocument();
    });
});