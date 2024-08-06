import { MyButton } from "./Button_components.ts"

export const Button = ({ type, view, children, onClick }) => (
    <MyButton type={type} view={view} onClick={onClick}>
        {children}
    </MyButton>
)
