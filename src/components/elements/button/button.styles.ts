// Dependencies
import styled, { css } from "styled-components";

// Types
import type { ButtonVariants } from "./button.types";

// Theme
//import { theme } from "@/config/theme";

type ContainerStyleProps = {
    variant: ButtonVariants;
    isActive: boolean;
    isCommingSoon: boolean;
    hasHoverEffect?: boolean;
};

//TODO: Refact all styles to be more general and simple

export const Container = styled.button<ContainerStyleProps>`
    background-color: inherit;
    padding: 8px;
`;

export const Label = styled.p`
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;

    @media (min-width: 768px) {
        font-size: 16px;
    }
`;
