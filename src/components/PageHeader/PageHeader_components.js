import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.bg};
`
export const Header = styled.header`
    max-width: 1360px;
    display: flex;
    align-items: center;
    height: 80px;
    padding: 0 40px;
    margin: 0 auto;
    justify-content: space-between;
    @media ${({ theme }) => theme.media.medium} {
        justify-content: center;
    }
`
export const Logo = styled.img`
    height: 80px;
    width: auto;
    @media ${({ theme }) => theme.media.medium} {
        display: none;
    }
`
export const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
export const Right = styled(Left)``
export const Title = styled.p`
    display: flex;
    font-size: 20px;
    text-align: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.font};
    padding: 10px;

    a.active & {
        color: ${({ theme }) => theme.colors.primary};
    }

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
    }
`

export const Theme = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.font};

    &:hover {
        cursor: pointer;
    }
`
export const Profile = styled.div`
    display: flex;
    align-items: center;
`
