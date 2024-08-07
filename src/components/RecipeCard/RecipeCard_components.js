import styled from "styled-components"

export const Main = styled.div`
    &:hover {
        cursor: pointer;
    }
`
export const Picture = styled.div`
    position: relative;

    & > svg {
        position: absolute;
        top: 3px;
        right: 5px;
    }
`
export const Img = styled.img`
    object-fit: cover;
    width: 100%;
    aspect-ratio: 3 / 4;
    margin-bottom: 16px;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    position: relative;

    ${Main}:hover & {
        box-shadow: 0 0 20px ${({ theme }) => theme.colors.font};
    }
`
export const Inf = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
export const Time = styled.p`
    background-color: ${({ theme }) => theme.colors.bg};
    font-size: 20px;
    padding: 10px;
    border-radius: 0 16px 0 15px;
`
export const Calor = styled(Time)`
    border-radius: 16px 0 15px 0;
`
