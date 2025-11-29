// Dependencies
import { FunctionComponent } from "react";

// Components
import { Home } from "../../components/pages/home-page";
import { CalculatorSection } from "../../components/sections/calculator";
import { Input } from "../../components/elements/input";

// Assets
import { Ruler, Scale } from "lucide-react";

export const HomePage: FunctionComponent = () => {
    return (
        <Home
            calculatorSectionCompositions={
                <CalculatorSection
                    heigthInputElement={<Input placeholder="Insira a sua altura em metros:" iconElement={<Ruler />} />}
                    weigthInputElement={<Input placeholder="Insira o seu peso em quilos:" iconElement={<Scale />} />}
                    actionButtonElement={<div>Button Element</div>}
                />
            }
        />
    );
};
