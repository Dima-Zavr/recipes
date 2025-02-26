import styled from "styled-components"
import { Form } from "formik"

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 56px;
    margin-bottom: 32px;
    gap: 24px;
    @media ${({ theme }) => theme.media.medium} {
        flex-direction: column;
        align-items: center;
    }
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
    width: 100%;
    max-width: 600px;
    gap: 24px;
`
export const Title = styled.h1`
    text-align: center;
    margin-bottom: 0;
`
export const Buttons = styled.div`
    display: flex;
    width: 100%;
    margin-top: 8px;
    gap: 24px;
`
export const Table = styled.table`
    width: 100%;
    border: none;
    margin-bottom: 20px;

    tbody tr:nth-child(odd) {
        background: #454545;
    }

    th {
        font-weight: bold;
        padding: 10px;
        text-align: left;
        width: 50%;
    }

    td {
        padding: 10px;
        width: 50%;
    }
`
