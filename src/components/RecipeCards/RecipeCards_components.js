import styled from "styled-components";

export const Search = styled.input`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.font};
    width: 100%;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.fontPrimary};
    padding: 12px;
    margin-bottom: 16px;
    border-radius: 16px;
    border: none;

    &:hover {
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.font};
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
    }
`;
export const Ul = styled.ul`
    display: grid;
    grid-template-columns: 300px 300px 300px;
    gap: 30px;
    list-style-type: none;
    @media ${({ theme }) => theme.media.large} {
        grid-template-columns: 300px 300px;
        gap: 30px;
    }
    @media ${({ theme }) => theme.media.medium} {
        grid-template-columns: 300px;
        gap: 20px;
    }
`;
