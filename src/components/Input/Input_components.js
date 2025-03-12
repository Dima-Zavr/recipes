import styled from "styled-components";

import InputMask from "react-input-mask";

export const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
`;
export const Label = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.font};
    margin-bottom: 5px;
`;

export const Input = styled(InputMask)`
    padding: 12px;
    font-size: 14px;
    border: none;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.fontPrimary};
    color: ${({ theme }) => theme.colors.font};
    box-sizing: border-box;
    width: 100%;

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

export const Error = styled.div`
    position: absolute;
    left: 0;
    bottom: -22px;
    font-size: 14px;
    color: red;
`;
