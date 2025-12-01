// Dependencies
import { FunctionComponent } from "react";

// Components
import { Home } from "../../components/pages/home-page";
import { CalculatorSection } from "../../components/sections/calculator";
import { Input } from "../../components/elements/input";
import { Button } from "../../components/elements/button";

// Assets
import { Ruler, Scale } from "lucide-react";

// Utils
import { theme } from "../../config/theme";

export const HomePage: FunctionComponent = () => {
    return (
        <Home
            calculatorSectionCompositions={
                <CalculatorSection
                    heigthInputElement={<Input placeholder="Altura em metros" iconElement={<Ruler color={theme.colors.gray[500]} />} />}
                    weigthInputElement={<Input placeholder="Peso em quilos" iconElement={<Scale color={theme.colors.gray[500]} />} />}
                    actionButtonElement={<Button label="Calcular" variant="cta" />}
                />
            }
        />
    );
};
