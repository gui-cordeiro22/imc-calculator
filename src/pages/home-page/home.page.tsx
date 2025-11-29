// Dependencies
import { FunctionComponent } from "react";

// Components
import { Home } from "../../components/pages/home-page";
import { CalculatorSection } from "../../components/sections/calculator";
import { Input } from "../../components/elements/input";

// Assets
import { Ruler, Scale } from "lucide-react";
import { Button } from "../../components/elements/button";

export const HomePage: FunctionComponent = () => {
    return (
        <Home
            calculatorSectionCompositions={
                <CalculatorSection
                    heigthInputElement={<Input placeholder="Altura em metros" iconElement={<Ruler />} />}
                    weigthInputElement={<Input placeholder="Peso em quilos" iconElement={<Scale />} />}
                    actionButtonElement={<Button label="Calcular" variant="cta" />}
                />
            }
        />
    );
};
