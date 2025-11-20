// Types
import { ImcCalculatorData, ObesityLevel } from "./home.types";

// Utils
import { ternary } from "../../../utils/ternary";

const formatObesityLevelMessage = (imc: number) => {
    const obesityLevelFormats: ObesityLevel[] = [
        ObesityLevel.MAGREZA,
        ObesityLevel.NORMAL,
        ObesityLevel.SOBREPESO,
        ObesityLevel.OBESIDADE,
        ObesityLevel.OBESIDADE_GRAVE,
    ];

    const obesityLevelIndex = ternary([
        [imc < 18.5, 0],
        [imc < 25, 1],
        [imc < 30, 2],
        [imc < 40, 3],
        [imc > 40, 4],
    ]);

    return obesityLevelFormats[obesityLevelIndex ?? 0] ?? null;
};

export const imcCalculator = ({ heigth, weigth }: ImcCalculatorData) => {
    const formatFloatNumber = (value: string) => {
        return Number(value.replace(",", "."));
    };

    const formattedHeigth = formatFloatNumber(heigth);

    const formattedWeigth = formatFloatNumber(weigth);

    const imc = formattedWeigth / (formattedHeigth * formattedHeigth);

    const formattedImc = imc.toFixed(2);

    return {
        imc: formattedImc.replace(".", ","),
        obesityLevel: formatObesityLevelMessage(imc),
    };
};
