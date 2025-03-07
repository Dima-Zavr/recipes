import styled from "styled-components";
import { Form } from "formik";

export const MyForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
    @media ${({ theme }) => theme.media.medium} {
        width: 100%;
    }
`;
export const Buttons = styled.div`
    width: 100%;
    display: flex;
    gap: 24px;
    @media ${({ theme }) => theme.media.small} {
        display: flex;
        flex-direction: column;
    }
`;
export const Inputs = styled.div`
    display: flex;
    gap: 24px;
    @media ${({ theme }) => theme.media.medium} {
        flex-direction: column;
        gap: 0;
        width: 100%;
    }
`;
