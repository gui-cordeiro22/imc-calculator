// Dependencies
import { FunctionComponent } from "react";

//Components
import { ConditionallyRender } from "../../utilities/conditionally-render";

// Styles
import { Container, ContentWrapper, Brand, NavLinksCompositionsWrapper } from "./header.styles";

// Types
import { HeaderProps } from "./header.types";

export const Header: FunctionComponent<HeaderProps> = ({ brand, handleClick, navLinksCompositions }) => {
    return (
        <Container>
            <ContentWrapper hasNavLinks={!!navLinksCompositions}>
                <Brand onClick={handleClick}>{brand}</Brand>

                <ConditionallyRender
                    shouldRender={!!navLinksCompositions}
                    content={<NavLinksCompositionsWrapper>{navLinksCompositions}</NavLinksCompositionsWrapper>}
                />
            </ContentWrapper>
        </Container>
    );
};
