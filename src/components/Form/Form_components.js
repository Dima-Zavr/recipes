import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${({ theme }) => theme.zIndex.modal};
    background-color: rgba(0, 0, 0, 0.7);
`
export const Form = styled.form`
    max-width: 930px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 50px 0;
    background-color: white;
    padding: 50px;
    border-radius: 30px;
`
export const Label = styled.label`
    width: 100%;
    color: black;
    font-size: 20px;
    line-height: 1.2;
    margin: 20px 0;
`
export const Input = styled.input`
    width: 900px;
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: lightgray;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`
export const Buttons = styled.div`
    width: 100%;
    display: flex;
    gap: 50px;
    margin: 20px 0;
`
