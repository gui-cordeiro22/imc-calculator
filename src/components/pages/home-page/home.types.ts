// Dependencies
import { ReactNode } from "react";

export enum ObesityLevel {
    MAGREZA = "Magreza",
    NORMAL = "Normal",
    SOBREPESO = "Sobrepeso",
    OBESIDADE = "Obesidade",
    OBESIDADE_GRAVE = "Obesidade grave",
}

export type HomeElements = {
    calculatorSectionCompositions: ReactNode;
};

export type HomeProps = HomeElements;

export type ImcCalculatorData = { heigth: string; weigth: string };
