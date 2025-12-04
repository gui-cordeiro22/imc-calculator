// Types
import { ImcCalculatorData, ObesityLevel } from "./home.types";

// Utils
import { ternary } from "../../utils/ternary";

const formatObesityLevelMessage = (imc?: number) => {
    const obesityLevelFormats: ObesityLevel[] = [
        ObesityLevel.MAGREZA,
        ObesityLevel.NORMAL,
        ObesityLevel.SOBREPESO,
        ObesityLevel.OBESIDADE,
        ObesityLevel.OBESIDADE_GRAVE,
    ];

    if (!imc) return;

    const obesityLevelIndex = ternary([
        [imc < 18.5, 0],
        [imc < 25, 1],
        [imc < 30, 2],
        [imc < 40, 3],
        [imc > 40, 4],
    ]);

    return obesityLevelFormats[obesityLevelIndex ?? 0] ?? null;
};

export const imcCalculator = ({ height, weight }: ImcCalculatorData) => {
    if (!height || !weight) return undefined;

    const formatFloatNumber = (value: string) => Number(value.replace(",", "."));

    const formattedHeight = formatFloatNumber(height);

    const formattedWeight = formatFloatNumber(weight);

    const imc = Number((formattedWeight / (formattedHeight * formattedHeight)).toFixed(2));

    return {
        imc,
        obesityLevel: formatObesityLevelMessage(imc),
    };
};
