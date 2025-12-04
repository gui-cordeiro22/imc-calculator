// Dependencies
import { FunctionComponent } from "react";

// Styles
import { InputContainer, InputElement, InputWrapper } from "./input.styles";

// Types
import { InputProps } from "./input.types";

export const Input: FunctionComponent<InputProps> = ({ placeholder, iconElement, ...defaultProps }) => {
    return (
        <InputContainer>
            <InputWrapper>
                <InputElement type="text" placeholder={placeholder} {...defaultProps} />

                {iconElement}
            </InputWrapper>
        </InputContainer>
    );
};
