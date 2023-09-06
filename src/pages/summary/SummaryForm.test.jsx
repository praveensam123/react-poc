import {render, screen} from "@testing-library/react";
import SummaryForm from "./SummaryForm";
import userEvent from "@testing-library/user-event";

describe("Summary Form Test", () => {

    describe("'Terms and Conditions' checkbox and 'Confirm order' button tests", () => {
        it("the checkbox with name 'I agree to Terms and Conditions' is unchecked by default", () => {
            render(<SummaryForm/>);
            const termsCheckbox = screen.getByRole("checkbox", {name: "I agree to Terms and Conditions"});
            expect(termsCheckbox).not.toBeChecked();
        });

        it("the button with name 'Confirm order' is disabled by default", () => {
            render(<SummaryForm/>);
            const confirmButton = screen.getByRole("button", {name: "Confirm order"});
            expect(confirmButton).toBeDisabled();
        });

        it("checking the checkbox, enables the button", async () => {
            const user = userEvent.setup();
            render(<SummaryForm/>);
            const termsCheckbox = screen.getByRole("checkbox", {name: "I agree to Terms and Conditions"});

            const confirmButton = screen.getByRole("button", {name: "Confirm order"});
            await user.click(termsCheckbox);
            expect(confirmButton).toBeEnabled();
        });

        it("unchecking the checkbox, disables the button", async () => {
            const user = userEvent.setup();
            render(<SummaryForm/>);
            const termsCheckbox = screen.getByRole("checkbox", {name: "I agree to Terms and Conditions"});

            const confirmButton = screen.getByRole("button", {name: "Confirm order"});
            await user.click(termsCheckbox);
            expect(confirmButton).toBeEnabled();

            await user.click(termsCheckbox);
            expect(confirmButton).toBeDisabled();
        });
    });

    describe("'Terms and Conditions' popover tests", () => {
        it("popover starts out hidden", async () => {
            render(<SummaryForm/>);
            const termsPopover = screen.queryByText("Dont skip to read!", {});
            expect(termsPopover).not.toBeInTheDocument();
        });

        it("popover appears on mouse hover", async () => {
            const user = userEvent.setup();
            render(<SummaryForm/>);
            const termsText = screen.getByText("Terms and Conditions", {});

            await user.hover(termsText);
            const termsPopover = screen.getByText("Dont skip to read!", {});
            expect(termsPopover).toBeInTheDocument();
            expect(termsPopover).toBeVisible();
        });

        it("popover disappears on mouse unhover", async () => {
            const user = userEvent.setup();
            render(<SummaryForm/>);
            const termsText = screen.getByText("Terms and Conditions", {});

            await user.unhover(termsText);
            const termsPopover = screen.queryByText("Dont skip to read!", {});
            expect(termsPopover).not.toBeInTheDocument();
        });
    });
});

