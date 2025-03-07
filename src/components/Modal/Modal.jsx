import { MyModal } from "./Modal_components";
import { CloseIcon } from "../../assets/CloseIcon";
import { Background, Close } from "../../styles/components";

export const Modal = ({ children, onClose }) => {
    return (
        <Background>
            <MyModal>
                <Close onClick={() => onClose()}>
                    <CloseIcon />
                </Close>
                {children}
            </MyModal>
        </Background>
    );
};
