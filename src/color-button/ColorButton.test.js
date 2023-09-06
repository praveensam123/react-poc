import {fireEvent, render, screen} from '@testing-library/react';
import ColorButton from './ColorButton';

describe('button-controller-test', () => {

    describe('color-button', () => {
        it('the button with name "Change to red" is present', () => {
            render(<ColorButton/>);
            const colorButton = screen.getByRole('button', {name: 'Change to red'});
            expect(colorButton).toBeInTheDocument();
        });

        it('the button "Change to red" is in color blue', () => {
            render(<ColorButton/>);
            const colorButton = screen.getByRole('button', {name: 'Change to red'});
            expect(colorButton).toHaveStyle({'background-color': 'blue'});
        });

        it('on clicking the button "Change to red", the button changes its, color from blue to red, and text to "Change to blue"', () => {
            render(<ColorButton/>);
            const colorButton = screen.getByRole('button', {name: 'Change to red'});
            expect(colorButton).toHaveStyle({'background-color': 'blue'});

            fireEvent.click(colorButton);
            expect(colorButton).toHaveStyle({'background-color': 'red'});
            expect(colorButton).toHaveTextContent('Change to blue');
        });
    });

    describe('buttonController-checkbox', () => {
        it('the checkbox with name "Disable Button" is present, unchecked', () => {
            render(<ColorButton/>);
            const controllerCheckbox = screen.getByRole('checkbox', {name: 'Disable Button'});
            expect(controllerCheckbox).toBeInTheDocument();
            expect(controllerCheckbox).not.toBeChecked();
        });

        it('the checkbox initial state is unchecked and the button is enabled', () => {
            render(<ColorButton/>);
            const controllerCheckbox = screen.getByRole('checkbox', {name: 'Disable Button'});
            expect(controllerCheckbox).not.toBeChecked();

            const colorButton = screen.getByRole('button', {name: 'Change to red'});
            expect(colorButton).toBeEnabled();
        });

        it('when checked, the button is disabled', () => {
            render(<ColorButton/>);
            const controllerCheckbox = screen.getByRole('checkbox', {name: 'Disable Button'});
            const colorButton = screen.getByRole('button', {name: 'Change to red'});

            fireEvent.click(controllerCheckbox);
            expect(controllerCheckbox).toBeChecked();
            expect(colorButton).toBeDisabled();
        });

        it('when unchecked, the button is enabled', () => {
            render(<ColorButton/>);
            const controllerCheckbox = screen.getByRole('checkbox', {name: 'Disable Button'});
            const colorButton = screen.getByRole('button', {name: 'Change to red'});

            fireEvent.click(controllerCheckbox);
            expect(controllerCheckbox).toBeChecked();

            fireEvent.click(controllerCheckbox);
            expect(controllerCheckbox).not.toBeChecked();
            expect(colorButton).toBeEnabled();
        });
    });

    describe('color-changes', () => {
        it('with blue button of name "Change to red", disable button event turns the button gray with same name', () => {
            render(<ColorButton/>);
            const colorButton = screen.getByRole('button', {name: 'Change to red'});
            const controllerCheckbox = screen.getByRole('checkbox', {name: 'Disable Button'});
            expect(colorButton).toHaveStyle({'background-color': 'blue'});

            fireEvent.click(controllerCheckbox);
            expect(colorButton).toHaveStyle({'background-color': 'gray'});
            expect(colorButton).toHaveTextContent('Change to red');
        });

        it('with gray button of name "Change to red", enable button event turns the button blue with same name', () => {
            render(<ColorButton/>);
            const colorButton = screen.getByText(/Change to red/, {});
            const controllerCheckbox = screen.getByRole('checkbox', {name: 'Disable Button'});

            fireEvent.click(controllerCheckbox);
            expect(colorButton).toHaveStyle({'background-color': 'gray'});
            expect(colorButton).toHaveTextContent('Change to red');

            fireEvent.click(controllerCheckbox);
            expect(colorButton).toHaveStyle({'background-color': 'blue'});
            expect(colorButton).toHaveTextContent('Change to red');
        });

        it('with red button of name "Change to blue", disable button event turns the button gray with same name', () => {
            render(<ColorButton/>);
            const colorButton = screen.getByRole('button', {name: 'Change to red'});
            const controllerCheckbox = screen.getByTestId('disableButton-checkbox', {});

            fireEvent.click(colorButton);
            expect(colorButton).toHaveStyle({'background-color': 'red'});
            expect(colorButton).toHaveTextContent('Change to blue');

            fireEvent.click(controllerCheckbox);
            expect(colorButton).toHaveStyle({'background-color': 'gray'});
            expect(colorButton).toHaveTextContent('Change to blue');
        });

        it('with gray button of name "Change to blue", enable button event turns the button red with same name', () => {
            render(<ColorButton/>);
            const colorButton = screen.getByRole('button', {name: 'Change to red'});
            const controllerCheckbox = screen.getByTestId('disableButton-checkbox', {});

            fireEvent.click(colorButton);
            fireEvent.click(controllerCheckbox);
            expect(colorButton).toHaveStyle({'background-color': 'gray'});
            expect(colorButton).toHaveTextContent('Change to blue');

            fireEvent.click(controllerCheckbox);
            expect(colorButton).toHaveStyle({'background-color': 'red'});
            expect(colorButton).toHaveTextContent('Change to blue');
        });
    });
});