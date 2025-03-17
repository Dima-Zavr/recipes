import styled from "styled-components";

export const Main = styled.div`
    position: relative;
    display: inline-block;
`;
export const DropdownList = styled.div`
    position: absolute;
    top: calc(100% + 16px);
    left: 0;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.bg};
    z-index: 1000;
    padding: 16px;
`;
