import styled from "styled-components"

export const Inputs = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    gap: 24px;
`
export const Input = styled.input`
    padding: 12px;
    font-size: 14px;
    border: none;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.fontPrimary};
    color: ${({ theme }) => theme.colors.font};
    box-sizing: border-box;
    width: 100%;

    &:hover {
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.font};
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`
export const Slider = styled.div`
    position: relative;
    width: 100%;
    margin-top: 30px;
`
export const SliderTrack = styled.div`
    width: 100%;
    height: 5px;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background: ${({ theme, percent1, percent2 }) =>
        `linear-gradient(to right, ${theme.colors.font} ${percent1}%, 
        ${theme.colors.primary} ${percent1}%, 
        ${theme.colors.primary} ${percent2}%, 
        ${theme.colors.font} ${percent2}%)`};
`
export const RangeInput = styled.input.attrs({ type: "range" })`
    appearance: none;
    width: 100%;
    outline: none;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    background-color: transparent;
    pointer-events: none;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 16px;
        height: 16px;
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 50%;
        cursor: pointer;
        pointer-events: auto;
        border: 2px solid ${({ theme }) => theme.colors.font};
    }
`
