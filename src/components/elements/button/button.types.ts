export type ButtonVariants = "cta" | "dark-cta" | "dark" | "white" | "link" | "light-budget";

export type ButtonData = {
    label: string;
    isActive?: boolean;
    isCommingSoon?: boolean;
    variant: ButtonVariants;
    hasHoverEffect?: boolean;
};

export type ButtonAction = {
    handleClick?: () => void;
};

export type ButtonProps = ButtonData & ButtonAction;
