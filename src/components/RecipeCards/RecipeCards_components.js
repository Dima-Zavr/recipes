import styled from "styled-components"

export const Search = styled.input`
    font-size: 20px;
    width: 100%;
    box-sizing: border-box;
    background-color: #ffffff;
    padding: 15px 20px;
    margin-bottom: 30px;
    border-radius: 20px;
    border: 1px solid #82bd69;

    &:focus {
        outline: none;
    }
`
export const Ul = styled.ul`
    display: grid;
    grid-template-columns: 300px 300px 300px;
    gap: 30px 30px;
    list-style-type: none;
    @media (max-width: 1019px) {
        grid-template-columns: 310px 310px;
        gap: 30px 30px;
    }
    @media (max-width: 767px) {
        grid-template-columns: 300px;
        gap: 20px;
    }
`
