import { Fragment, FunctionComponent } from "react";
import { DefaultLayoutProps } from "./default-layout.types";

export const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ contentPage }) => {
    return (
        <Fragment>
            <div>Header</div>

            {contentPage}

            <div>Footer</div>
        </Fragment>
    );
};
