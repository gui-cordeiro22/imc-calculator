// Dependencies
import styled from "styled-components";

// Styles
import { pageGutter } from "../../../styles/gutter";

// Utils
import { theme } from "../../../config/theme";

export const Container = styled.form`
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

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spaces.large};
    width: 100%;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;
