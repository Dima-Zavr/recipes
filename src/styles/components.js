import styled from "styled-components"
import { MyButton } from "../components/Button/Button_components.ts"

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 56px;
    margin-bottom: 30px;
`
export const BtnBack = styled(MyButton)`
    width: fit-content;
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.font};
`
export const HangButton = styled(MyButton)`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: fit-content;
    z-index: ${({ theme }) => theme.zIndex.btn};
`
