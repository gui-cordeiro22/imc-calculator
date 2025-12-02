// Dependencies
import styled, { css, keyframes } from "styled-components";

// Types
import { ButtonProps } from ".";

// Utils
import { theme } from "../../../styles/theme";

type ContainerStyleProps = {
    variant: ButtonProps["variant"];
    variantType: ButtonProps["variantType"];
    size: ButtonProps["size"];
    borderType: ButtonProps["borderType"];
    isDisabled: boolean;
    isFullyAdaptative: boolean;
    hasSpacing: boolean;
    hasUnderline: boolean;
};

export const Container = styled.button<ContainerStyleProps>`
    width: max-content;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    transition: ${theme.system.durations.faster} all ease-in-out;
    background-color: transparent;

    position: relative;

    .pdg-typography {
        flex-shrink: 0;
        text-align: center;
    }

    ${({ isFullyAdaptative }) =>
        isFullyAdaptative &&
        css`
            width: 100%;
        `}

    ${({ size }) =>
        size === "nano" &&
        css`
            padding: ${theme.system.space.xxxxs};
        `}

  ${({ size }) =>
        size === "small" &&
        css`
            padding: ${theme.system.space.nano} ${theme.system.space.xs};
        `}

  ${({ size }) =>
        size === "medium" &&
        css`
            padding: ${theme.system.space.micro} ${theme.system.space.xs};
        `}

  ${({ size }) =>
        size === "large" &&
        css`
            padding: ${theme.system.space.xxxxs} ${theme.system.space.xs};
        `}

  ${({ borderType }) =>
        borderType === "rounded" &&
        css`
            border-radius: ${theme.system.radii.full};
        `}

  ${({ borderType }) =>
        borderType === "squared" &&
        css`
            border-radius: ${theme.system.radii.md};
        `}

  ${({ isDisabled }) =>
        isDisabled &&
        css`
            cursor: not-allowed;
        `}

  ${({ isDisabled, variantType }) =>
        isDisabled &&
        variantType === "primary" &&
        css`
            background-color: ${theme.palette.colors.aqua100};
            border: ${theme.system.borders.hairline} solid ${theme.palette.colors.aqua500};
        `}

  ${({ isDisabled, variantType }) =>
        isDisabled &&
        variantType === "secondary" &&
        css`
            background-color: transparent;
            border: ${theme.system.borders.hairline} solid ${theme.palette.colors.aqua100};
        `}

  ${({ isDisabled, variantType }) =>
        isDisabled &&
        variantType === "link" &&
        css`
            background-color: transparent;
        `}

  ${({ isDisabled, variantType, variant }) =>
        !isDisabled &&
        variant === "cta" &&
        variantType === "primary" &&
        css`
            background-color: ${theme.palette.colors.aqua100};
            border: ${theme.system.borders.hairline} solid ${theme.palette.colors.aqua500};

            &:hover {
                background-color: ${theme.palette.colors.aqua100};

                .pdg-typography {
                    color: ${theme.palette.colors.aqua100};
                }
            }
        `}

  ${({ isDisabled, variantType, variant }) =>
        !isDisabled &&
        variant === "cta" &&
        variantType === "secondary" &&
        css`
            background-color: transparent;
            border: ${theme.system.borders.hairline} solid ${theme.palette.colors.aqua100};

            &:hover {
                background-color: ${theme.palette.colors.aqua100};
                border-color: ${theme.palette.colors.aqua100};

                .pdg-typography {
                    color: ${theme.palette.colors.aqua100};
                }
            }
        `}

  ${({ isDisabled, variantType, variant }) =>
        !isDisabled &&
        variant === "cta" &&
        variantType === "link" &&
        css`
            background-color: transparent;

            &:hover {
                .pdg-typography {
                    color: ${theme.palette.colors.aqua500};
                }
            }
        `}

  
  ${({ hasSpacing }) =>
        !hasSpacing &&
        css`
            padding: 0;
        `}

  ${({ hasUnderline }) =>
        hasUnderline &&
        css`
            .pdg-typography {
                text-decoration: underline;
            }
        `}
`;

type ContentWrapperStyleProps = {
    isVisible: boolean;
    alignment: ButtonProps["alignment"];
};

export const ContentWrapper = styled.div<ContentWrapperStyleProps>`
    display: flex;
    flex-direction: row;
    gap: ${theme.system.space.xxxxs};
    align-items: center;
    width: 100%;

    ${({ alignment }) =>
        alignment === "left" &&
        css`
            justify-content: flex-start;
        `}

    ${({ alignment }) =>
        alignment === "center" &&
        css`
            justify-content: center;
        `}

  ${({ alignment }) =>
        alignment === "right" &&
        css`
            justify-content: flex-end;
        `}

  ${({ isVisible }) =>
        !isVisible &&
        css`
            visibility: hidden;
        `};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ellipsis1 = keyframes`
   0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const ellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(12px, 0);
  }
`;

const ellipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

type LoaderStyleProps = {
    color: string;
};

export const Loader = styled.div<LoaderStyleProps>`
    display: flex;
    position: absolute;

    > div {
        display: inline-block;
        position: relative;
        width: 40px;
        height: 13px;

        > div {
            position: absolute;
            top: 3.25px;
            width: 6.5px;
            height: 6.5px;
            border-radius: 50%;
            background: ${({ color }) => color};
            animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }

        > div:nth-child(1) {
            left: 4px;
            animation: ${ellipsis1} 0.6s infinite;
        }

        > div:nth-child(2) {
            left: 4px;
            animation: ${ellipsis2} 0.6s infinite;
        }

        > div:nth-child(3) {
            left: 16px;
            animation: ${ellipsis2} 0.6s infinite;
        }

        > div:nth-child(4) {
            left: 28px;
            animation: ${ellipsis3} 0.6s infinite;
        }
    }
`;
