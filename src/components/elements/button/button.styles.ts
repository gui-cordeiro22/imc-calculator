// Dependencies
import styled, { css } from "styled-components";

// Types
import type { ButtonVariants } from "./button.types";

// Utils
import { theme } from "../../../config/theme";

type ContainerStyleProps = {
    variant: ButtonVariants;
    isActive: boolean;
    isCommingSoon: boolean;
    hasHoverEffect?: boolean;
};

export const Container = styled.button<ContainerStyleProps>`
    background-color: inherit;
    padding: ${theme.spaces.xs};
    width: 100%;
    border: 1px solid ${theme.colors.aqua[100]};
    border-radius: 8px;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${theme.colors.aqua[100]};

        p {
            color: ${theme.colors.white};
        }
    }
`;

export const Label = styled.p`
    font-size: 14px;
    font-family: "Nunito Sans", sans-serif;
    font-weight: bold;

    @media (min-width: 768px) {
        font-size: 16px;
    }
`;
