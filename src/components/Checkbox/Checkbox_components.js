import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    gap: 8px;
`;
export const MyCheckbox = styled.input.attrs({ type: "checkbox" })`
    accent-color: ${({ theme }) => theme.colors.primary};
    width: 16px;
`;
