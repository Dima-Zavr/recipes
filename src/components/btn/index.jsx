import { MyButton } from "./styled_components"

export const Button = ({ children, onClick, type }) => (
    <MyButton type={type} onClick={onClick}>
        {children}
    </MyButton>
)
