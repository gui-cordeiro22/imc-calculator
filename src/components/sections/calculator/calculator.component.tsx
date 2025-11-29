// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container, ContentWrapper, InputsWrapper } from "./calculator.styles";

// Types
import { CalculatorProps } from "./calculator.types";

export const CalculatorSection: FunctionComponent<CalculatorProps> = ({ heigthInputElement, weigthInputElement, actionButtonElement }) => {
    return (
        <Container>
            <ContentWrapper>
                <InputsWrapper>
                    {heigthInputElement}

                    {weigthInputElement}
                </InputsWrapper>

                {actionButtonElement}
            </ContentWrapper>
        </Container>
    );
};
