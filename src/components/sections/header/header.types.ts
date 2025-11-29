// Dependencies
import { ReactNode } from "react";

export type HeaderData = {
    brand?: string;
};

export type HeaderElement = {
    navLinksCompositions?: ReactNode;
};

export type HeaderAction = {
    handleClick: () => void;
};

export type HeaderProps = HeaderData & HeaderElement & HeaderAction;
