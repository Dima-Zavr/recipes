import styled from "styled-components"

export const Imgs = styled.div`
    width: calc(50% - 12px);
    height: auto;
    @media ${({ theme }) => theme.media.medium} {
        width: 400px;
    }
    @media ${({ theme }) => theme.media.small} {
        width: 100%;
    }
`
export const Img = styled.img`
    object-fit: cover;
    width: 100%;
    aspect-ratio: 3 / 4;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    position: relative;
    img {
        width: auto;
        height: 100%;
    }
`
