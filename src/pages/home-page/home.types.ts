export enum BodyFatLevel {
    MAGREZA = "Abaixo do peso",
    NORMAL = "Peso ideal",
    SOBREPESO = "Levemente acima do peso",
    OBESIDADE = "Obesidade grau I",
    OBESIDADE_GRAVE = "Obesidade grau II (severa)",
    OBESIDADE_MORBIDA = "Obesidade grau III (mórbida)",
}
export type ImcCalculatorData = { height: string; weight: string };
