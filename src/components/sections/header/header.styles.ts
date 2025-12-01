// Dependencies
import styled, { css } from "styled-components";

// Utils
import { theme } from "../../../config/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${theme.colors.gray[500]};
`;

type ContentWrapperStyleProps = {
    hasNavLinks: boolean;
};

export const ContentWrapper = styled.div<ContentWrapperStyleProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 24px;
    width: 100%;
    margin: 0 auto;

    ${({ hasNavLinks }) =>
        !!hasNavLinks &&
        css`
            justify-content: space-between;
        `}

    ${({ hasNavLinks }) =>
        !hasNavLinks &&
        css`
            justify-content: center;
        `}

    @media (min-width: 768px) {
        max-width: 677px;
        padding: 24px;
    }

    @media (min-width: 1024px) {
        max-width: 972px;
        padding: 24px 40px;
    }

    @media (min-width: 1366px) {
        max-width: 1226px;
        padding: 24px 76px;
    }

    @media (min-width: 1920px) {
        max-width: 1440px;
    }
`;

export const NavLinksCompositionsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;
`;

export const Brand = styled.h3`
    color: ${theme.colors.white};
    font-size: 18px;
    font-family: "Nunito Sans", serif;
    cursor: pointer;
`;
