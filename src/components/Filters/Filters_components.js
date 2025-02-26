import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    max-width: 300px;
    margin: 24px;
`
export const Filter = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    padding: 16px;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
`
export const Label = styled.div`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.font};
    margin-bottom: 8px;
`
export const MyForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
    gap: 24px;
`
