// Dependencies
import { FunctionComponent } from "react";

// Components
import { Home } from "../../components/pages/home-page";

export const HomePage: FunctionComponent = () => {
    return (
        <Home
            weigthInputElementComposition={<div>Weigth Input</div>}
            heightInputElementComposition={<div>Heigth Input</div>}
            buttonElementComposition={<div>Button Element</div>}
        />
    );
};
