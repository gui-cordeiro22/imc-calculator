// Dependencies
import styled from "styled-components";

// Utils
import { theme } from "../../../config/theme";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    background-color: #fff;
    box-shadow: 0px 1px 2px rgba(132, 148, 165, 0.2);
    border-radius: 8px;
    width: 100%;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: ${theme.spaces.medium};
    padding: ${theme.spaces.medium};
`;

export const InputElement = styled.input`
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    border: none;
    outline: none;
    height: 52px;
    width: 100%;
    transition: all 0.3s ease-in-out;
    text-overflow: ellipsis;
    background-color: transparent;
    cursor: text;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${theme.spaces.medium};

    svg {
        cursor: pointer;
    }
`;
