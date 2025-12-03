// Dependencies
import styled from "styled-components";

// Styles
import { pageGutter } from "../../../styles/gutter";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    ${pageGutter}
`;

export const Title = styled.h3`
    font-family: "Nunito Sans", sans-serif;
`;

export const Description = styled.p`
    font-family: "Nunito Sans", sans-serif;
`;

export const ResultsLabel = styled.p`
    font-family: "Nunito Sans", sans-serif;
`;
