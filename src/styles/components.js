import styled from "styled-components"
import { Form } from "formik"

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 56px;
    margin-bottom: 30px;
`
export const SignPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`
export const MyForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    width: 100%;
    padding: 32px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 32px;
`
export const Title = styled.h1`
    text-align: center;
`
export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 8px;
    gap: 24px;
`
