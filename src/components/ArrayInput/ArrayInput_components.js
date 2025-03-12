import { Button } from "../Button/Button_components";
import styled from "styled-components";

export const MyInput = styled.input`
    width: 100%;
    padding: 12px;
    font-size: 14px;
    border: none;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.fontPrimary};
    color: ${({ theme }) => theme.colors.font};
    box-sizing: border-box;

    &:hover {
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.font};
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;

export const AddButton = styled(Button)`
    width: auto;
    height: auto;
    line-height: 14px;
    padding: 12px;
    font-size: 14px;
    font-weight: 400;
`;
export const Flex = styled.div`
    width: 100%;
    display: flex;
`;
