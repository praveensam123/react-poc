import {useState} from "react";
import {Button, Form, OverlayTrigger, Popover} from "react-bootstrap";
import "./OrderSummary.css"

export default function SummaryForm() {
    const [termsCheckboxChecked, setTermsCheckboxChecked] = useState(false);
    const termsPopover = (
        <Popover id="terms-popover">
            <Popover.Body>Dont skip to read!</Popover.Body>
        </Popover>
    );
    const termsCheckboxLabel = (
        <span>I agree to
            <OverlayTrigger placement="right" overlay={termsPopover}>
                <span style={{color: 'blue'}}> Terms and Conditions</span>
            </OverlayTrigger>
        </span>
    );

    return <div id="formWrapper">
        <div id="form">
            <Form>
                <Form.Group controlId="terms-and-conditions" className="form-item">
                    <Form.Check type="checkbox"
                                id="terms-checkbox"
                                label={termsCheckboxLabel}
                                checked={termsCheckboxChecked}
                                onChange={event => setTermsCheckboxChecked(event.target.checked)}/>
                </Form.Group>
                <Button type="submit"
                        disabled={!termsCheckboxChecked}>
                    Confirm order
                </Button>
            </Form>
        </div>
    </div>;
}
