import styled from "styled-components"

export const LoaderContainer = styled.div`
    margin-top: 50px;
`

export const Loader = styled.div`
    width: 50px;
    height: 50px;
    border: 8px solid #f3f3f3;
    border-top: 8px solid #61a146;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 20px auto;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`
