// Dependencies
import { FunctionComponent } from "react";

// Components
import { ConditionallyRender } from "../../utilities/conditionally-render";

// Styles
import { Container, ContentWrapper, Description, ResultsLabel, Title } from "./results.styles";

// Types
import { ResultsSectionProps } from "./results.types";

export const ResultsSection: FunctionComponent<ResultsSectionProps> = ({ title, description, imcValue, bodyFatLevel }) => {
    return (
        <Container>
            <ContentWrapper>
                <Title>{title}</Title>

                <ConditionallyRender shouldRender={!!description} content={<Description>{description}</Description>} />

                <ResultsLabel>Índice de Massa Corporal: {imcValue}</ResultsLabel>

                <ResultsLabel>Nível de gordura corporal: {bodyFatLevel}</ResultsLabel>
            </ContentWrapper>
        </Container>
    );
};
