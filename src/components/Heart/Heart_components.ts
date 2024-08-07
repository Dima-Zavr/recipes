import styled from "styled-components"

export const Svg = styled.svg<{ color: string }>`
    color: ${({ color }) => color};

    &:hover {
        color: #d9544d;
    }
`
