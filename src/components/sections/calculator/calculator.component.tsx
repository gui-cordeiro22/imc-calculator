// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container } from "./calculator.styles";

// Types
import { CalculatorProps } from "./calculator.types";

export const CalculatorSection: FunctionComponent<CalculatorProps> = ({ heigthInputElement, weigthInputElement, actionButtonElement }) => {
    return (
        <Container>
            {heigthInputElement}

            {weigthInputElement}

            {actionButtonElement}
        </Container>
    );
};
