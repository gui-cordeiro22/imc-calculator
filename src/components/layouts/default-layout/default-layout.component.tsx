// Dependencies
import { Fragment, FunctionComponent } from "react";

// Components
import { Header } from "../../sections/header";

// Types
import { DefaultLayoutProps } from "./default-layout.types";

export const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ contentPage }) => {
    const handleScrollToTop = () => {
        window.scroll({ top: 0 });
    };
    return (
        <Fragment>
            <Header brand="Calculadora de Índice de Massa Corporal" handleClick={handleScrollToTop} />

            {contentPage}

            <div>Footer</div>
        </Fragment>
    );
};
