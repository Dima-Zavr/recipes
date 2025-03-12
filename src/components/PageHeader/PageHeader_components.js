import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.bg};
    @media ${({ theme }) => theme.media.medium} {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: ${({ theme }) => theme.zIndex.btn};
        border-bottom: none;
        border-top: 1px solid ${({ theme }) => theme.colors.primary};
    }
`;
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
        padding: 0;
        margin: 0;
        width: 100%;
        height: 60px;
    }
`;
export const Logo = styled.img`
    height: 80px;
    width: auto;
    @media ${({ theme }) => theme.media.medium} {
        display: none;
    }
`;
export const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    height: 100%;
    @media ${({ theme }) => theme.media.medium} {
        gap: 0;
        width: 75%;
    }
`;
export const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    height: 100%;
    @media ${({ theme }) => theme.media.medium} {
        gap: 0;
        width: 25%;
    }
`;
export const Title = styled(NavLink)`
    display: flex;
    box-sizing: border-box;
    font-size: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.font};
    padding: 10px;

    &.active {
        color: ${({ theme }) => theme.colors.primary};
    }

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
    }

    @media ${({ theme }) => theme.media.medium} {
        flex: 1 0;
        height: 100%;
        font-size: 16px;
        padding: 5px;
    }
    @media ${({ theme }) => theme.media.small} {
        font-size: 14px;
    }
`;

export const Theme = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.font};

    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.primary};
    }

    @media ${({ theme }) => theme.media.medium} {
        display: none;
    }
`;
export const Profile = styled(Title)`
    gap: 8px;
    @media ${({ theme }) => theme.media.medium} {
        gap: 0;
        & svg {
            display: none;
        }
    }
`;
