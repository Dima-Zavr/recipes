import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    gap: 8px;
    white-space: nowrap;
`;
export const MyRadio = styled.input.attrs({ type: "radio" })`
    accent-color: ${({ theme }) => theme.colors.primary};
    width: 16px;
`;
