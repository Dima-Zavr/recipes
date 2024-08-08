import styled from "styled-components"

export const Page = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.bg};
`
export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    max-width: 1020px;
    width: 100%;
    height: 100%;
    padding: 0 30px;
    margin: 24px 0 72px;
    @media ${({ theme }) => theme.media.medium} {
        padding: 0 20px;
    }
    @media ${({ theme }) => theme.media.small} {
        padding: 0 10px;
    }
`
