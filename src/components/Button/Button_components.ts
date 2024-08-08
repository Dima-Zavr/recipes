import styled from "styled-components"

interface ViewProps {
    view: "primary" | "default" | "link"
}

export const MyButton = styled.button<ViewProps>`
    color: ${({ view, theme }) => {
        if (view === "primary") {
            return theme.colors.fontPrimary
        } else if (view === "link") {
            return theme.colors.font
        } else {
            return theme.colors.primary
        }
    }};
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    width: ${({ view }) => (view === "link" ? `fit-content` : `100%`)};
    height: 56px;
    display: flex;
    border: ${({ view }) => (view === "default" ? `1px #82bd69 solid` : `none`)};
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    border-radius: 16px;
    background-color: ${({ view, theme }) => {
        if (view === "primary") {
            return theme.colors.primary
        } else if (view === "link") {
            return `transparent`
        } else {
            return theme.colors.bg
        }
    }};

    &:hover {
        filter: brightness(1.1);
        cursor: pointer;
    }

    &:active {
        filter: brightness(0.9);
    }
`
