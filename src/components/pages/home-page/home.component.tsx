// Dependencies
import { Fragment, FunctionComponent } from "react";

// Components
import { DefaultLayout } from "../../layouts/default-layout";

// Types
import { HomeProps } from "./home.types";

export const Home: FunctionComponent<HomeProps> = ({ calculatorSectionCompositions, resultsSectionCompositions }) => {
    return (
        <DefaultLayout
            contentPage={
                <Fragment>
                    {calculatorSectionCompositions}

                    {resultsSectionCompositions}
                </Fragment>
            }
        />
    );
};
