import styled from "styled-components"

export const LoaderContainer = styled.div`
    margin-top: 50px;
`

export const Loader = styled.div`
    width: 50px;
    height: 50px;
    border: 8px solid ${({ theme }) => theme.colors.bg};
    border-top: 8px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    margin: 20px auto;
    animation: spin 1s linear infinite;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`
