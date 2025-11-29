// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container, ContentWrapper, Brand, NavLinksCompositionsWrapper } from "./header.styles";

// Types
import { HeaderProps } from "./header.types";

export const Header: FunctionComponent<HeaderProps> = ({ brand, handleClick, navLinksCompositions }) => {
    return (
        <Container>
            <ContentWrapper>
                <Brand onClick={handleClick}>{brand}</Brand>

                <NavLinksCompositionsWrapper>{navLinksCompositions}</NavLinksCompositionsWrapper>
            </ContentWrapper>
        </Container>
    );
};
