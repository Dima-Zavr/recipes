import styled from "styled-components";

export const MyModal = styled.div`
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
`;
