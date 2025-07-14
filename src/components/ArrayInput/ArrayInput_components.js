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
    margin-bottom: 8px;
`;
export const List = styled.ul`
    display: flex;
    flex-direction: column;
`;
export const Item = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
    margin-bottom: 8px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
`;
export const Label = styled.li`
    display: flex;
    align-items: center;
`;
export const Close = styled.div`
    height: 24px;
    color: ${({ theme }) => theme.colors.font};
    &:hover {
        color: red;
        cursor: pointer;
    }
`;
