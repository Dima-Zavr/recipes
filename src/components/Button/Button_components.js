import styled from "styled-components"

export const Button = styled.button`
    color: ${({ theme }) => theme.colors.fontPrimary};
    font-family: "Verdana", sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    width: 100%;
    height: 56px;
    display: flex;
    border: none;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.primary};

    &:hover {
        filter: brightness(1.1);
        cursor: pointer;
    }

    &:active {
        filter: brightness(0.9);
    }
`
export const DefaultButton = styled(Button)`
    color: ${({ theme }) => theme.colors.primary};
    border: 1px ${({ theme }) => theme.colors.primary} solid;
    background-color: ${({ theme }) => theme.colors.bg};
`
export const LinkButton = styled(Button)`
    color: ${({ theme }) => theme.colors.font};
    width: fit-content;
    background-color: transparent;
`
export const BtnBack = styled(LinkButton)`
    position: absolute;
    left: 0;
`
export const HangButton = styled(Button)`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: fit-content;
    z-index: ${({ theme }) => theme.zIndex.btn};
`
