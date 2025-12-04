// Dependencies
import { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";

// Components
import { Home } from "../../components/pages/home-page";
import { CalculatorSection } from "../../components/sections/calculator";
import { Input } from "../../components/elements/input";
import { Button } from "../../components/elements/button";
import { ResultsSection } from "../../components/sections/results";
import { ConditionallyRender } from "../../components/utilities/conditionally-render";

// Types
import { BodyFatLevel } from "./home.types";

// Assets
import { Ruler, Scale, Calculator } from "lucide-react";

// Utils
import { theme } from "../../config/theme";

// Helpers
import { imcCalculator } from "./home.helpers";

// Hooks
import { useWindowDimensions } from "../../hooks/window-dimensions/window-dimensions";

export const HomePage: FunctionComponent = () => {
    const [imcResult, setImcResult] = useState<{ imc: number; bodyFatLevel: BodyFatLevel | undefined } | undefined>(undefined);
    const { register, handleSubmit } = useForm();

    const { width } = useWindowDimensions();

    const handleImcCalculate = (data: any) => {
        const response = imcCalculator({ height: data.height, weight: data.weight });

        setImcResult(response);
    };
    return (
        <Home
            calculatorSectionCompositions={
                <CalculatorSection
                    heigthInputElement={
                        <Input
                            {...register("height")}
                            type="text"
                            placeholder="Altura em metros"
                            iconElement={<Ruler color={theme.colors.gray[500]} />}
                        />
                    }
                    weigthInputElement={
                        <Input
                            {...register("weight")}
                            type="text"
                            placeholder="Peso em quilos"
                            iconElement={<Scale color={theme.colors.gray[500]} />}
                        />
                    }
                    actionButtonElement={
                        <Button
                            type="submit"
                            label="Calcular IMC"
                            variant="cta"
                            isCommingSoon={false}
                            size="large"
                            isFullyAdaptative={width < 768}
                            borderType="squared"
                            rightIconElement={<Calculator />}
                            onClick={handleSubmit(handleImcCalculate)}
                        />
                    }
                />
            }
            resultsSectionCompositions={
                <ConditionallyRender
                    shouldRender={!!imcResult?.imc}
                    content={
                        <ResultsSection title="Confira abaixo o seu resultado:" imcValue={imcResult?.imc} bodyFatLevel={imcResult?.bodyFatLevel} />
                    }
                />
            }
        />
    );
};
