// Dependencies
import { Fragment, FunctionComponent } from "react";

// Components
import { DefaultLayout } from "../../layouts/default-layout";

// Types
import { HomeProps } from "./home.types";

// Helpers
import { imcCalculator } from "./home.helpers";

export const Home: FunctionComponent<HomeProps> = ({ heightInputElementComposition, weigthInputElementComposition, buttonElementComposition }) => {
    const imcValue = imcCalculator({ heigth: "1,80", weigth: "110,10" });

    return (
        <DefaultLayout
            contentPage={
                <Fragment>
                    {heightInputElementComposition}

                    {weigthInputElementComposition}

                    {buttonElementComposition}

                    <div>O seu IMC é: {imcValue.imc}</div>

                    <div>{imcValue.obesityLevel}</div>
                </Fragment>
            }
        />
    );
};
