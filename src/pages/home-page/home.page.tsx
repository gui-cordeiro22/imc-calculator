// Dependencies
import { FunctionComponent } from "react";

// Components
import { Home } from "../../components/pages/home-page";
import { CalculatorSection } from "../../components/sections/calculator";
import { Input } from "../../components/elements/input";
import { Button } from "../../components/elements/button";
import { ResultsSection } from "../../components/sections/results";
import { ConditionallyRender } from "../../components/utilities/conditionally-render";

// Assets
import { Ruler, Scale, Calculator } from "lucide-react";

// Utils
import { theme } from "../../config/theme";

// Helpers
import { imcCalculator } from "./home.helpers";

// Hooks
import { useWindowDimensions } from "../../hooks/window-dimensions/window-dimensions";

export const HomePage: FunctionComponent = () => {
    const imcValue = imcCalculator({ height: "", weight: "" });

    const { width } = useWindowDimensions();

    console.log(imcValue);

    return (
        <Home
            calculatorSectionCompositions={
                <CalculatorSection
                    heigthInputElement={<Input placeholder="Altura em metros" iconElement={<Ruler color={theme.colors.gray[500]} />} />}
                    weigthInputElement={<Input placeholder="Peso em quilos" iconElement={<Scale color={theme.colors.gray[500]} />} />}
                    actionButtonElement={
                        <Button
                            label="Calcular"
                            variant="cta"
                            isCommingSoon={false}
                            size="large"
                            isFullyAdaptative={width < 768}
                            borderType="squared"
                            rightIconElement={<Calculator />}
                        />
                    }
                />
            }
            resultsSectionCompositions={
                <ConditionallyRender
                    shouldRender={!!imcValue?.imc}
                    content={
                        <ResultsSection title="Confira abaixo o seu resultado:" imcValue={imcValue?.imc} bodyFatLevel={imcValue?.obesityLevel} />
                    }
                />
            }
        />
    );
};
