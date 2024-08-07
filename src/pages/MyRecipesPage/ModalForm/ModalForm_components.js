import styled from "styled-components"

export const Buttons = styled.div`
    width: 700px;
    display: flex;
    gap: 50px;
    @media ${({ theme }) => theme.media.large} {
        width: 700px;
    }
    @media ${({ theme }) => theme.media.medium} {
        width: 400px;
    }
    @media ${({ theme }) => theme.media.small} {
        width: 100%;
    }
`
export const Inputs = styled.div`
    display: flex;
    gap: 24px;
    @media ${({ theme }) => theme.media.medium} {
        flex-direction: column;
        gap: 0;
    }
`
