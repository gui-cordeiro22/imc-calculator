// Types
import { ImcCalculatorData, BodyFatLevel } from "./home.types";

// Utils
import { ternary } from "../../utils/ternary";

const formatBodyFatLevelMessage = (imc?: number) => {
    const bodyFatLevelFormats: BodyFatLevel[] = [
        BodyFatLevel.MAGREZA,
        BodyFatLevel.NORMAL,
        BodyFatLevel.SOBREPESO,
        BodyFatLevel.OBESIDADE,
        BodyFatLevel.OBESIDADE_GRAVE,
    ];

    if (!imc) return;

    const bodyFatLevelIndex = ternary([
        [imc < 18.5, 0],
        [imc < 25, 1],
        [imc < 30, 2],
        [imc < 35, 3],
        [imc < 40, 4],
        [imc > 40, 5],
    ]);

    return bodyFatLevelFormats[bodyFatLevelIndex ?? 0] ?? null;
};

export const imcCalculator = ({ height, weight }: ImcCalculatorData) => {
    if (!height || !weight) return undefined;

    const formatFloatNumber = (value: string) => Number(value.replace(",", "."));

    const formattedHeight = formatFloatNumber(height);

    const formattedWeight = formatFloatNumber(weight);

    const imc = Number((formattedWeight / (formattedHeight * formattedHeight)).toFixed(2));

    return {
        imc,
        bodyFatLevel: formatBodyFatLevelMessage(imc),
    };
};
