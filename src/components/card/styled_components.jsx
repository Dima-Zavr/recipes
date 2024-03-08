import styled from "styled-components";

export const Main = styled.div`
    &:hover{
        cursor: pointer;
        position: relative;
        Img{
            box-shadow: 0 0 20px black;
        }
        Title{
            display: flex;
            overflow: inherit;
            text-overflow: inherit;
            white-space: inherit;
        }
    }
`
export const Picture = styled.div`
    position: relative;
    & > svg{
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
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    position: relative;
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
    color: #000000;
    background-color: #ffffff;
    font-size: 20px;
    line-height: 1.3;
    padding: 10px;
    border-radius: 0 20px 0 20px;
`
export const Kalor = styled(Time)`
    border-radius: 20px 0 20px 0;
`
export const Title = styled.p`
    width: 100%;
    color: #141c24;
    font-size: 20px;
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`