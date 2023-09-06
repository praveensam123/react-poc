import {useState} from "react";
import {Button, Form, OverlayTrigger, Popover} from "react-bootstrap";

export default function SummaryForm() {
    const [termsCheckboxChecked, setTermsCheckboxChecked] = useState(false);
    const termsPopover = (
        <Popover id="terms-popover">
            <Popover.Body>No ice cream will actually be delivered</Popover.Body>
        </Popover>
    );
    const termsCheckboxLabel = (
        <span>I agree to
            <OverlayTrigger placement="right" overlay={termsPopover}>
                <span style={{color: 'blue'}}> Terms and Conditions</span>
            </OverlayTrigger>
        </span>
    );

    return <Form>
        <Form.Group controlId="terms-and-conditions">
            <Form.Check type="checkbox"
                        id="terms-checkbox"
                        label={termsCheckboxLabel}
                        checked={termsCheckboxChecked}
                        onChange={event => setTermsCheckboxChecked(event.target.checked)}/>
        </Form.Group>
        <Button type="submit" variant="primary" disabled={!termsCheckboxChecked}>Confirm order</Button>
    </Form>;
}
