// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container, Label } from "./button.styles";

// Types
import { ButtonProps } from "./button.types";

export const Button: FunctionComponent<ButtonProps> = ({ label, handleClick, variant, isActive, isCommingSoon, hasHoverEffect }) => {
    return (
        <Container
            {...(!isCommingSoon && { onClick: handleClick })}
            variant={variant}
            isActive={!!isActive}
            isCommingSoon={!!isCommingSoon}
            hasHoverEffect={!!hasHoverEffect}
        >
            <Label>{!!isCommingSoon ? "Em breve..." : label}</Label>
        </Container>
    );
};
