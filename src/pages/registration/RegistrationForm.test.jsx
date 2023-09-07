import {render, screen} from "@testing-library/react";
import RegistrationForm from "./RegistrationForm";

describe("a form with name, language and size is present", () => {
    it("the text field 'name' is present", () => {
        render(<RegistrationForm/>);
        const nameTextField = screen.getByTestId("teamName", {});
        expect(nameTextField).toBeInTheDocument();
    })

    it("language is present", () => {
        render(<RegistrationForm/>);
        const languageRadioButton = screen.getByTestId("language", {});
        expect(languageRadioButton).toBeInTheDocument();
    })
})