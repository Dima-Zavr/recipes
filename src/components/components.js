import styled from "styled-components"

export const Page = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.bg};
    max-width: 1020px;
    width: 100%;
    padding: 0 30px;
    margin: 24px auto 72px;
    @media ${({ theme }) => theme.media.medium} {
        padding: 0 20px;
    }
    @media ${({ theme }) => theme.media.small} {
        padding: 0 10px;
    }
`
export const Content = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 30px;
`
export const BtnContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: ${({ theme }) => theme.zIndex.btn};
`
