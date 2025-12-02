// Types
import { ButtonHTMLAttributes, ReactNode } from "react";

export const buttonVariants = ["cta", "link"] as const;
export type ButtonVariants = (typeof buttonVariants)[number];

export const buttonVariantTypes = ["primary", "secondary", "link"] as const;
export type ButtonVariantTypes = (typeof buttonVariantTypes)[number];

export const buttonAlignments = ["left", "center", "right"] as const;
export type ButtonAlignments = (typeof buttonAlignments)[number];

export const buttonSizes = ["nano", "small", "medium", "large"] as const;
export type ButtonSizes = (typeof buttonSizes)[number];

export const buttonBorderTypes = ["squared", "rounded"] as const;
export type ButtonBorderTypes = (typeof buttonBorderTypes)[number];

export type ButtonData = {
    label?: string;
    size?: ButtonSizes;
    variant?: ButtonVariants;
    variantType?: ButtonVariantTypes;
    borderType?: ButtonBorderTypes;
    alignment?: ButtonAlignments;
    isFullyAdaptative?: boolean;
    isCommingSoon: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    hasSpacing?: boolean;
    hasUnderline?: boolean;
};

export type ButtonElements = {
    leftIconElement?: ReactNode;
    rightIconElement?: ReactNode;
    additionalContentComposition?: ReactNode;
};

export type ButtonActions = {
    handleClick?: () => void;
};

export type ButtonProps = ButtonData & ButtonElements & ButtonActions & ButtonHTMLAttributes<HTMLButtonElement>;
