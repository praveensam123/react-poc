import {fireEvent, render, screen} from "@testing-library/react";
import {MyState} from "./MyState";

describe('test the state', () => {
    it('val equals one', () => {
        render(<MyState/>);
        const value = screen.getByTestId('val', {});
        expect(value).toHaveTextContent('1');
    });

    it('on increment, val equals two', () => {
        render(<MyState/>);
        const value = screen.getByTestId('val', {});
        const incrementButton = screen.getByRole('button', {});
        fireEvent.click(incrementButton);
        expect(value).toHaveTextContent('2');
    });
});