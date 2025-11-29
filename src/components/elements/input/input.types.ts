// Types
import { InputHTMLAttributes, ReactNode } from "react";

export type InputData = Partial<InputHTMLAttributes<HTMLInputElement>> & {
    placeholder: string;
};

export type InputElements = {
    iconElement: ReactNode;
};

export type InputProps = InputData & InputElements;
