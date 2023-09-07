import {fireEvent, render, screen} from "@testing-library/react";
import SkillForm from "./SkillForm";

describe("SkillForm Component Tests", () => {
    it("renders 'Add Skill' button", () => {
        render(<SkillForm/>);
        const addSkillButton = screen.getByRole("button", {name: "Add Skill"});
        expect(addSkillButton).toBeInTheDocument();
    });

    it("clicking the button, adds new skill", () => {
        render(<SkillForm/>);
        const addSkillButton = screen.getByRole("button", {name: "Add Skill"});
        fireEvent.click(addSkillButton);
        expect(screen.getByTestId("skill-1", {})).toBeInTheDocument();
        expect(screen.getAllByTestId("proficiency-1", {})).toHaveLength(4);
    });
});