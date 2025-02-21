import styled from "styled-components"

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    z-index: ${({ theme }) => theme.zIndex.modal};
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.7);
`

export const ModalContent = styled.div`
    width: 100%;
    max-width: 600px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.bg};
    margin: auto;
    padding: 64px;
    border-radius: 16px;
    @media ${({ theme }) => theme.media.large} {
        padding: 32px;
    }
    @media ${({ theme }) => theme.media.medium} {
        box-sizing: border-box;
        max-width: 100%;
        margin: auto 0 0;
        padding: 16px;
        border-radius: 16px 16px 0 0;
    }
`

export const Close = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    color: #ced2da;
    text-align: center;

    &:hover {
        color: ${({ theme }) => theme.colors.font};
        cursor: pointer;
    }
`
