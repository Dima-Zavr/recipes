import styled from "styled-components"

export const Svg = styled.svg<{ color: string }>`
    color: ${(props) => props.color};

    &:hover {
        color: #d9544d;
    }
`
